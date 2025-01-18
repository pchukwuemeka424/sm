"use server";

import { z } from "zod";
import { connectToDatabase } from "@/utils/db";
import User from "@/models/User";
import bcrypt from "bcrypt";
import { createSession } from "@/utils/session";

export async function register(state, formData) {
  await connectToDatabase();

  const registerSchema = z.object({
    username: z.string().min(3, "Username is required"),
    shopname: z.string().min(3, "Shop name is required"),
    phone: z.string().regex(/^\+?\d+$/, "Invalid phone number format"),
    password: z.string().min(8, "Password must be at least 8 characters"),
  });

  const result = registerSchema.safeParse({
    username: formData.get("username"),
    shopname: formData.get("shopname"),
    phone: formData.get("phone"),
    password: formData.get("password"),
  });

  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
    };
  }

  const { username, shopname, phone, password } = result.data;

  try {
    const existingUser = await User.findOne({ $or: [{ username }, { phone }] });
    if (existingUser) {
      return {
        success: false,
        errors: {
          username: existingUser.username === username ? ["Username is already taken"] : undefined,
          phone: existingUser.phone === phone ? ["Phone number is already registered"] : undefined,
        },
      };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ username, shopname, phone, password: hashedPassword });
    await newUser.save();

    createSession(newUser.insertId);

    return { success: true, successMessage: "Registration successful! Redirecting to login." };
  } catch (error) {
    console.error("Error registering user:", error);
    return { success: false, errors: { general: ["An unexpected error occurred. Please try again."] } };
  }
}
