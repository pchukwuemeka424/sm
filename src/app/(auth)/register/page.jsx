"use client";  // This tells Next.js to treat this component as a client-side component

import { useActionState } from 'react';
import { useRouter } from 'next/navigation';  // Correct import for useRouter in Next.js 13+
import { AiOutlineShop, AiOutlineUser, AiOutlinePhone, AiOutlineLock } from 'react-icons/ai';
import { useEffect } from 'react';
import { register } from '@/actions/auth/register';

export default function Register() {

    const [prev, action, isPending] = useActionState(register, undefined);

 
    return (
        <div className="h-screen flex">
            <div className="w-full md:w-1/2 bg-white flex justify-center items-center p-8">
                <form className="w-full max-w-sm" action={action}>
                    <h2 className="text-3xl font-bold text-center mb-6">Register</h2>

                    {/* Shop Name Field */}
                    <div className="mb-4 relative">
                        <input
                            type="text"
                            name="shopname"
                            placeholder="Shop Name"
                            defaultValue={prev?.shopname}
                            className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <AiOutlineShop className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        {prev?.errors.shopname && (
                            <p className="text-red-500 text-sm mt-1">
                                {prev.errors.shopname}
                            </p>
                        )}
                    </div>


                    {/* Username Field */}
                    <div className="mb-4 relative">
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            defaultValue={prev?.username}
                            className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <AiOutlineUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        {prev?.errors.username && (
                            <p className="text-red-500 text-sm mt-1">
                                {prev.errors.username}
                            </p>
                        )}
                    </div>

                    {/* Phone Field */}
                    <div className="mb-4 relative">
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            defaultValue={prev?.phone}
                            className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <AiOutlinePhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        {prev?.errors.phone && (
                            <p className="text-red-500 text-sm mt-1">
                                {prev.errors.phone}
                            </p>
                        )}
                    </div>
                    <div className="mb-4 relative">
                        <input
                            type="email"
                            name="email"
                            placeholder="email"
                            defaultValue={prev?.email}
                            className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <AiOutlinePhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        {prev?.errors.email && (
                            <p className="text-red-500 text-sm mt-1">
                                {prev.errors.email}
                            </p>
                        )}
                    </div>

                    {/* Password Field */}
                    <div className="mb-6 relative">
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            defaultValue={prev?.password}
                            className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <AiOutlineLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        {prev?.errors.password && (
                            <p className="text-red-500 text-sm mt-1">
                                {prev.errors.password.join(', ')}
                            </p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isPending}
                        className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition"
                    >
                        {isPending ? 'Registering...' : 'Register'}
                    </button>


                    {/* Additional Links */}
                    <div className="mt-4 text-center">
                        <p className="text-gray-600">
                            Already have an account?{' '}
                            <a href="/auth/login" className="text-blue-500 hover:underline">
                                Login
                            </a>
                        </p>
                    </div>
                </form>
            </div>

            <div
                className="hidden md:block w-1/2 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url(/images/Xa.jpg)' }}
            ></div>
        </div>
    );
}
