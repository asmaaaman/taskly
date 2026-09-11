import { FieldError, UseFormRegisterReturn } from "react-hook-form";

type FormInputProps = {
  label: string;
  name: string;
  placeholder: string;
  type?: "text" | "email" | "password";
  register: UseFormRegisterReturn;
  error?: FieldError;
};

const FormInput = ({
  label,
  name,
  placeholder,
  type = "text",
  register,
  error,
}: FormInputProps) => {
  return (
    <div className="w-full">
      <label
        htmlFor={name}
        className="mb-1.5 block text-[10px] font-medium uppercase tracking-wide text-[#344054]"
      >
        {label}
      </label>

      <input
        id={name}
        type={type}
        placeholder={placeholder}
        {...register}
        className={`h-9 w-full rounded-sm border bg-[#DCE7FF] px-3 text-xs outline-none placeholder:text-[#98A2B3] transition focus:ring-2 ${
          error
            ? "border-red-500 focus:ring-red-500/20"
            : "border-transparent focus:border-[#0757B8] focus:ring-[#0757B8]/20"
        }`}
      />

      {error && (
        <p className="mt-1 text-[10px] text-red-500">{error.message}</p>
      )}
    </div>
  );
};

export default FormInput;
