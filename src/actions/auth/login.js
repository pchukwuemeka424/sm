"use server";

import { z } from "zod";
import { connectToDatabase } from "@/utils/db";

import bcrypt from "bcrypt";
import { createSession } from "@/utils/session";
import { redirect } from "next/navigation";  // Make sure this import is present for redirect

export async function login(state, formData) {
  await connectToDatabase();

  const LoginFormSchema = z.object({
    username: z.string().min(1, { message: "Please enter a username." }).trim(),
    password: z.string().min(1, { message: "Password is required." }).trim(),
  });

  const validatedFields = LoginFormSchema.safeParse({
    username: formData.get("username"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      username: formData.get("username"),
    };
  }

  // Extract form fields
  const { username, password } = validatedFields.data;

  // Check if username exists in our DB
  const existingUser = await User.findOne({ username });

  if (!existingUser) {
    return { errors: { username: "Invalid credentials." } };
  }

  // Check password
  const matchedPassword = await bcrypt.compare(password, existingUser.password);
  if (!matchedPassword) {
    return { errors: { username: "Invalid credentials." } };
  }

  // Create a session
  await createSession(existingUser._id.toString());

  // Optionally log user for debugging
  console.log(existingUser);

  // Redirect to dashboard (ensure next.js redirect works)
  redirect("/users/dashboard");
}
