"use client";

import { useState } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

import EyeIcon from "../../../assets/icons/eye.svg";
import EyeOffIcon from "../../../assets/icons/eye-off.svg";

type PasswordInputProps = {
  label: string;
  name: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
};

const PasswordInput = ({
  label,
  name,
  placeholder,
  register,
  error,
}: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full">
      <label
        htmlFor={name}
        className="mb-1.5 block text-[10px] font-medium uppercase tracking-wide text-[#344054]"
      >
        {label}
      </label>

      <div className="relative">
        <input
          id={name}
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          {...register}
          className={`h-9 w-full rounded-sm border bg-[#DCE7FF] px-3 pr-10 text-xs outline-none placeholder:text-[#98A2B3] transition focus:ring-2 ${
            error
              ? "border-red-500 focus:ring-red-500/20"
              : "border-transparent focus:border-[#0757B8] focus:ring-[#0757B8]/20"
          }`}
        />

        <button
          type="button"
          onClick={() => setShowPassword((previous) => !previous)}
          className="absolute right-3 top-1/2 -translate-y-1/2"
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? (
            <EyeOffIcon className="h-5 w-5 text-[#667085]" aria-hidden="true" />
          ) : (
            <EyeIcon className="h-5 w-5 text-[#667085]" aria-hidden="true" />
          )}
        </button>
      </div>

      {error && (
        <p className="mt-1 text-[10px] text-red-500">{error.message}</p>
      )}
    </div>
  );
};

export default PasswordInput;
