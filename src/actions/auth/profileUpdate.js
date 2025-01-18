"use server"; // Indicates this is a server-side function

import { z } from "zod";
import { connectToDatabase } from "@/utils/db";
import getAuthUser from "@/utils/getAuthUser";
import { redirect } from "next/navigation";
import User from "@/models/User";

export default async function profileUpdate(state, formData) {
  // Connect to the database
  await connectToDatabase();

  // Authenticate the user
  const user = await getAuthUser();
  if (!user) {
    console.log("User not authenticated");
    return redirect("/");
  }

  // Define the schema for validation
  const ProfileSchema = z.object({
    username: z.string().min(3, "Username must be at least 3 characters"),
    shopname: z.string().min(3, "Shop name must be at least 3 characters"),
    phone: z.string().regex(/^\d{11}$/, "Phone number must be exactly 11 digits"),
    address: z.string().optional(),
    stat: z.string().min(2, "State must be at least 2 characters long"),
    city: z.string().min(2, "City must be at least 2 characters long"),
    socialLinks: z.object({
      facebook: z.string().optional(),
      instagram: z.string().optional(),
      tiktok: z.string().optional(),
      twitter: z.string().optional(),
    }).optional(),
  });

  // Parse and validate the form data
  const formInput = {
    username: formData.get("username"),
    shopname: formData.get("shopname"),
    phone: formData.get("phone"),
    address: formData.get("address"),
    stat: formData.get("stat"),
    city: formData.get("city"),
    socialLinks: {
      facebook: formData.get("socialLinks.facebook"),
      instagram: formData.get("socialLinks.instagram"),
      tiktok: formData.get("socialLinks.tiktok"),
      twitter: formData.get("socialLinks.twitter"),
    },
  };

  const { success, data, error } = ProfileSchema.safeParse(formInput);

  if (!success) {
    console.log("Validation errors:", error.flatten().fieldErrors);
    return {
      errors: error.flatten().fieldErrors,
      ...formInput,
    };
  }

  const { username, shopname, phone, address, stat, city, socialLinks } = data;

  // Update the user profile in the database
  console.log("Updating user profile in the database...");
  const updateResult = await User.updateOne(
    { username: user.username }, // Match the logged-in user
    {
      $set: { username, shopname, phone, address, stat, city, socialLinks },
    }
  );

  if (updateResult.modifiedCount === 0) {
    console.log("No changes made to profile");
    return {
      status: 400,
      body: { message: "No changes made to profile" },
    };
  }

  console.log("Profile updated successfully");
  redirect("/users/profile");
  return {
    status: 200,
    body: { message: "Profile updated successfully" },
  };
}
