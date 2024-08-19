"use client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpFormData, signUpSchema } from "./schema";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "@/service/firebase";
import { setUser } from "@/utils/client/auth";
import { useRouter } from "next/navigation";
export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });
  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  async function onSubmit(data: SignUpFormData) {
    setIsLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const user = {
        displayName: `user${new Date().getTime()}`,
        email: data.email,
      };
      await updateProfile(userCredential.user, {
        displayName: user.displayName,
      });
      setUser(user);
      router.push("/");
    } catch (error: any) {
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
      {/* Title and Welcome Message */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-1">NextJS</h1>
        <p className="text-3xl text-gray-900 font-bold mb-4">
          Create your account
        </p>
        <div className="text-gray-600">
          <p>
            Already have an account?{" "}
            <Link
              href="/auth/login"
              className="text-gray-900 font-medium hover:underline"
            >
              Sign in.
            </Link>
          </p>
        </div>
      </div>

      {/* Form */}
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email address
          </label>
          <input
            id="email"
            {...register("email")}
            type="email"
            autoComplete="email"
            className="appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
            placeholder="Email address"
          />
          {errors.email && (
            <p className="text-red-500 text-xs italic">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Password Field */}
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Password
          </label>
          <input
            id="password"
            {...register("password")}
            type="password"
            autoComplete="new-password"
            className="appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
            placeholder="Password"
          />
          {errors.password && (
            <p className="text-red-500 text-xs italic">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Confirm Password Field */}
        <div>
          <label
            htmlFor="confirm_password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            {...register("confirmPassword")}
            type="password"
            autoComplete="new-password"
            className="appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
            placeholder="Confirm Password"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-xs italic">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        {/* Sign Up Button */}
        <div className="mt-4">
          <button
            type="submit"
            disabled={isLoading}
            className={`${
              isLoading
                ? "bg-gray-500"
                : "bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            }
            group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white `}
          >
            {isLoading ? "Signing up..." : "Sign Up"}
          </button>
        </div>
      </form>
    </div>
  );
}
