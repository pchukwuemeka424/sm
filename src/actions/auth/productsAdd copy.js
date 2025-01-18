"use server"; // Indicates this is a server-side function

import { connectToDatabase } from "@/utils/db";
import getAuthUser from "@/utils/getAuthUser";
import { redirect } from "next/navigation";
import Product from "@/models/Product"; // Ensure correct path
import multer from "multer";
import sharp from "sharp";
import path from "path";
import fs from "fs/promises";

// Configure Multer for file uploads
const uploadDir = path.join(process.cwd(), "public", "uploads"); // Save images in the "public/uploads" directory
const storage = multer.memoryStorage(); // Store file in memory as buffer for processing
const upload = multer({ storage }).single("image"); // Process single image file

export default async function addProduct(state, formData) {
  try {
    // Authenticate the user
    const user = await getAuthUser();
    if (!user) {
      console.log("User not authenticated");
      return redirect("/"); // Redirect if user is not authenticated
    }

    // Prepare the form input
    const formInput = {
      name: formData.get("name") || "",
      description: formData.get("description") || "",
      price: formData.get("price") ? parseFloat(formData.get("price")) : 0,
      category: formData.get("category") || "",
      stock: formData.get("stock") ? parseInt(formData.get("stock"), 10) : 0,
      image: "", // Placeholder for the processed image path
    };

    // Process and compress the image
    const imageFile = formData.get("image"); // File object from the form data
    if (!imageFile) {
      console.log("No image file provided.");
      formInput.image = null; // Ensure this field is set if no image is uploaded
    } else {
      let compressedImagePath = null;

      // Ensure the upload folder exists
      await fs.mkdir(uploadDir, { recursive: true });

      const originalImageName = `${Date.now()}-${imageFile.name}`;
      const originalImagePath = path.join(uploadDir, originalImageName);
      const compressedImageName = `compressed-${Date.now()}-${imageFile.name}`;
      compressedImagePath = path.join(uploadDir, compressedImageName);

      // Write the original image buffer to disk
      try {
        await fs.writeFile(originalImagePath, Buffer.from(await imageFile.arrayBuffer()));
      } catch (error) {
        console.error("Error writing image to disk: ", error);
      }

      // Compress and resize the image using sharp
      await sharp(originalImagePath)
        .resize({ width: 800 }) // Resize to a maximum width of 800px
        .jpeg({ quality: 80 }) // Compress to 80% quality
        .toFile(compressedImagePath);

      // Attempt to delete the original uploaded image
      try {
        await fs.unlink(originalImagePath);
      } catch (unlinkError) {
        console.error("Error deleting original image: ", unlinkError);
      }

      // Save the relative path to the image
      formInput.image = `/uploads/${compressedImageName}`;
    }

    // Connect to the database
    await connectToDatabase();

    // Add the product to the database
    const newProduct = new Product({
      username: user.username, // Link product to the authenticated user
      name: formInput.name,
      description: formInput.description,
      price: formInput.price,
      category: formInput.category,
      stock: formInput.stock,
      image: formInput.image,
    });

    const savedProduct = await newProduct.save();
    console.log("Product added successfully:", savedProduct);

    // Convert Mongoose document to plain object
    const plainProduct = savedProduct.toObject();

    return {
      status: 200,
      body: { message: "Product added successfully"},
    };
  } catch (error) {
    console.error("Error adding product:", error);
    return {
      status: 500,
      body: { message: "Failed to add product", error: error.message },
    };
  }
}
