import { Link } from 'react-router-dom';
import React from 'react';

type LoginParameters = {
    email: string;
    password: string
}

export default function LoginForm() {
    const onFinish = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Casting `e.target` as HTMLFormElement to access elements
        const form = e.target as HTMLFormElement;
        const email = (form.elements.namedItem('email') as HTMLInputElement).value;
        const password = (form.elements.namedItem('password') as HTMLInputElement).value;


        const params: LoginParameters = {email , password};


    }
    return (
        <>
            <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
                <div className="relative hidden md:flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600">

                    <div className="absolute text-center text-white p-6 max-w-md">
                        <h2 className="text-4xl font-bold mb-2">Connect and Chat</h2>
                        <p className="text-lg font-semibold">Join us and start conversations with friends, family, and colleagues.</p>
                    </div>
                </div>

                {/* Right side - Login Form */}
                <div className="flex flex-col justify-center items-center p-8 bg-gray-50 shadow-lg rounded-lg md:rounded-none">
                    <h2 className="text-4xl font-bold text-gray-800 mb-2">Welcome Back!</h2>
                    <p className="text-gray-600 mb-6">Login to your account</p>

                    <form className="w-full max-w-md space-y-5" onSubmit={onFinish}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
                                placeholder="Enter your password"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Login
                        </button>

                        <p className="text-sm text-gray-600 mt-4 text-center">
                            Forgot your password?{' '}
                            <a href="/forgot-password" className="text-blue-600 hover:underline">
                                Reset it here
                            </a>
                        </p>
                    </form>

                    <p className="mt-6 text-sm text-gray-500">
                        Don't have an account?{' '}
                        <Link to="/register" className="text-blue-600 hover:underline">
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
}
