"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormData, loginSchema } from "../validations/login.schema";
import { loginUser } from "@/app/services/loginUser";
import FormInput from "./Form/FormInput";
import PasswordInput from "./Form/PasswordInput";
import { useRouter } from "next/navigation";

const SignInForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    setServerError("");

    try {
      const result = await loginUser(data);

      localStorage.setItem("access_token", result.access_token);
      localStorage.setItem("refresh_token", result.refresh_token);

      localStorage.setItem(
        "user",
        JSON.stringify({
          id: result.user.id,
          email: result.user.email,
          name: result.user.user_metadata?.name,
          department: result.user.user_metadata?.department,
        }),
      );

      router.push("/dashboard");
    } catch (error) {
      setServerError(error instanceof Error ? error.message : "Login failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        label="Email"
        name="email"
        type="email"
        placeholder="Enter your email"
        register={register("email")}
        error={errors.email}
      />

      <PasswordInput
        label="Password"
        name="password"
        placeholder="Enter your password"
        register={register("password")}
        error={errors.password}
      />

      <div className="flex items-center justify-between text-[10px]">
        <label className="flex items-center gap-2 text-[#667085]">
          <input type="checkbox" className="h-3 w-3 accent-[#0757B8]" />
          Remember me
        </label>

        <Link
          href="/forgot-password"
          className="text-[#0757B8] hover:underline"
        >
          Forgot Password?
        </Link>
      </div>

      {serverError && (
        <p className="text-center text-xs text-red-500">{serverError}</p>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="h-9 w-full rounded-sm bg-[#0757B8] text-xs font-medium text-white transition hover:bg-[#064a9d] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isLoading ? "Logging in..." : "Log In"}
      </button>

      <p className="text-center text-[10px] text-[#667085]">
        Don&apos;t have an account?{" "}
        <Link
          href="/register"
          className="font-medium text-[#0757B8] hover:underline"
        >
          Sign Up
        </Link>
      </p>
    </form>
  );
};

export default SignInForm;
