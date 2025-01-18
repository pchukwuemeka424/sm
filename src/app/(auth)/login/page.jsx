"use client";

import React, { useActionState } from 'react';
import { AiOutlineUser, AiOutlineLock } from 'react-icons/ai';
import Image from 'next/image';
import { login } from '@/actions/auth/login';
export default function Login() {
  const [state, action, isPending] = useActionState(login, undefined);

  return (
    <div className="h-screen flex">
      {/* Left Column - Form */}
      <div className="w-full md:w-1/2 bg-white flex justify-center items-center p-8">
        <form className="w-full max-w-sm" action={action}>
          <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

          {/* Username Field */}
          <div className="mb-4 relative">
            <input
              type="text"
              name='username'
              placeholder="Username"
              defaultValue={state?.username}
              className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <AiOutlineUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            {state?.errors?.username && (
            <p className="error">{state.errors.username}</p>
          )}
                       
          </div>

          {/* Password Field */}
          <div className="mb-6 relative">
            <input
              type="password"
              name='password'
              defaultValue={state?.password}
              placeholder="Password"
              className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <AiOutlineLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            {state?.errors?.password && (
            <p className="error">{state.errors.password}</p>
          )}
          </div>

          {/* Submit Button */}
          <button
            type="submit" disabled={isPending}
            className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition"
          >
            {isPending ? 'Processing...' : 'Login'}
          </button>

          {/* Additional links */}
          <div className="mt-4 text-center">
            <a href="#" className="text-blue-500 hover:underline">Forgot Password?</a>
          </div>
        </form>
      </div>

      {/* Right Column - Image */}
      <div className="hidden md:block w-1/2 bg-cover bg-center" style={{ backgroundImage: 'url(/images/img.jpg)' }}>

      </div>
    </div>
  );
}
