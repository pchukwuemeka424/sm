"use server";

import { z } from "zod";
import bcrypt from "bcrypt";
import supabaseDb from "@/utils/supabase-db";
import { redirect } from "next/navigation";
//import { createClient } from "@supabase/supabase-js";

export async function register(prev,formData) {
 // const supabase = await createClient();

  const registerSchema = z.object({
    email: z.string().email("Invalid email format"),
    username: z.string().min(3, "Username is required"),
    shopname: z.string().min(3, "Shop name is required"),
    phone: z.string().regex(/^\+?\d+$/, "Invalid phone number format"),
    password: z.string().min(8, "Password must be at least 8 characters"),
  });

  const result = registerSchema.safeParse({
    email: formData.get("email"),
    username: formData.get("username"),
    shopname: formData.get("shopname"),
    phone: formData.get("phone"),
    password: formData.get("password"),
  });

  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
      formData: {
        email: formData.get("email"),
        username: formData.get("username"),
        shopname: formData.get("shopname"),
        phone: formData.get("phone"),
      },
    };
  }

  const { email, username, shopname, phone, password } = result.data;

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Sign up user with Supabase
  const { data, error } = await supabaseDb.auth.signUp(
    {
      email,
      password: hashedPassword,
    },
    {
      data: { username, shopname, phone },
    }
  );

  if (error) {
    return {
      success: false,
      errors: [{ path: "auth", message: error.message }],
    };
  }



}
