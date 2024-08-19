"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import Button from "@/components/Button";
import { provider, signInWithPopup, auth } from "@/service/firebase";
import { buttons } from "./constant";
import { useRouter } from "next/navigation";
import { setUser } from "@/utils/client/auth";
import { SignInFormData, signInSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
  });
  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const onSubmit = async (data: SignInFormData) => {
    setIsLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const user = {
        displayName: userCredential.user.displayName,
        email: data.email,
      };
      handleLoginSuccess(user);
    } catch (error: any) {
      const statusCode = error.code;
      console.log(error);
      switch (statusCode) {
        case "auth/invalid-email":
        case "auth/user-not-found":
        case "auth/wrong-password":
        case "auth/invalid-credential":
          setErrorMessage("Invalid email or password.");
          break;
        case "auth/user-disabled":
          setErrorMessage("User account is disabled.");
          break;
        case "auth/too-many-requests":
          setErrorMessage("Too many request. Please try again later");
          break;
        default:
          setErrorMessage("Internal Server Error");
      }
    } finally {
      setIsLoading(false);
    }
  };
  const handleLoginPopup = async (providerString: string) => {
    try {
      const result = await signInWithPopup(
        auth,
        provider[providerString as keyof typeof provider]
      );
      const user = {
        displayName: result.user.displayName,
        email: result.user.email,
      };
      handleLoginSuccess(user);
    } catch (error) {
      console.error("Error ", error);
    }
  };
  const handleLoginSuccess = (user: unknown) => {
    setUser(user);
    router.push("/");
  };

  return (
    <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
      {/* Title and Welcome Message */}
      <div className="mb-4">
        <h1 className="text-2xl font-semibold text-primary mb-1">NextJS</h1>
        <p className="text-3xl text-primary font-bold mb-4">Welcome back</p>
        <div className="text-gray-600">
          <p>
            Start your website in seconds. Don’t have an account?{" "}
            <Link
              href="/auth/register"
              className="text-primary font-medium hover:underline"
            >
              Sign up.
            </Link>
          </p>
        </div>
        {errorMessage && (
          <p className="text-red-500 text-xs italic">{errorMessage}</p>
        )}
      </div>

      {/* Form */}
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex space-x-4">
          {/* Email Field */}
          <div className="flex-1">
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
              className="appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-primary rounded-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
              placeholder="Email address"
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div className="flex-1">
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
              autoComplete="current-password"
              className="appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-primary rounded-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-red-500 text-xs italic">
                {errors.password.message}
              </p>
            )}
          </div>
        </div>

        {/* Divider with "or" */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-2 text-sm text-gray-500">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        {buttons.map((button) => {
          return (
            <Button
              key={button.id}
              id={button.id}
              text={button.text}
              icon={button.icon}
              type={button.type}
              className={button.className}
              onClick={() => {
                handleLoginPopup(button.id);
              }}
            />
          );
        })}

        {/* Remember me and Sign in */}
        <div className="flex items-center justify-start mt-6">
          <div className="text-sm">
            <a
              href="#"
              className="font-medium text-gray-600 hover:text-gray-500"
            >
              Forgot your password?
            </a>
          </div>
        </div>

        <div className="mt-4">
          <button
            type="submit"
            disabled={isLoading}
            className={`${
              isLoading
                ? "bg-gray-500"
                : "bg-primary hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            }
    group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white transition ease-in-out duration-150`}
            aria-live="polite"
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </button>
        </div>
      </form>
    </div>
  );
}
