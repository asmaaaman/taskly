"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerUser } from "@/app/services/register.service";
import {
  RegisterFormData,
  registerSchema,
} from "../validations/register.schema";
import PasswordRules from "./Form/PasswordRules";
import PasswordInput from "./Form/PasswordInput";
import AuthHeader from "./AuthHeader";
import FormInput from "./Form/FormInput";

const RegisterPage = () => {
  const router = useRouter();

  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      setServerError("");

      await registerUser(data);

      router.push("/login");
    } catch (error) {
      if (error instanceof Error) {
        setServerError(error.message);
      } else {
        setServerError("Something went wrong");
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <FormInput
          label="Full Name"
          name="fullName"
          placeholder="Enter your full name"
          register={register("fullName")}
          error={errors.fullName}
        />

        <FormInput
          label="Email"
          name="email"
          type="email"
          placeholder="you@example.com"
          register={register("email")}
          error={errors.email}
        />

        <FormInput
          label="Job Title (Optional)"
          name="jobTitle"
          placeholder="e.g. Frontend"
          register={register("jobTitle")}
          error={errors.jobTitle}
        />

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <PasswordInput
            label="Password"
            name="password"
            placeholder="Password"
            register={register("password")}
            error={errors.password}
          />

          <PasswordInput
            label="Confirm Password"
            name="confirmPassword"
            placeholder="Repeat your password"
            register={register("confirmPassword")}
            error={errors.confirmPassword}
          />
        </div>

        <PasswordRules />

        {serverError && (
          <p className="rounded-md bg-red-50 p-2 text-center text-xs text-red-600">
            {serverError}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="h-10 w-full rounded-md bg-[#0757B8] text-xs font-semibold text-white transition hover:bg-[#064B9E] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Creating account..." : "Create Account"}
        </button>
      </form>
    </>
  );
};

export default RegisterPage;
