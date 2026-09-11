import { RegisterFormData } from "../(auth)/validations/register.schema";


const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

type SupabaseError = {
  msg?: string;
  message?: string;
  error_description?: string;
};

export const registerUser = async (data: RegisterFormData) => {
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Supabase environment variables are missing");
  }

  const response = await fetch(
    `${supabaseUrl}/auth/v1/signup`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: supabaseAnonKey,
        Authorization: `Bearer ${supabaseAnonKey}`,
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
        data: {
          name: data.fullName,
          department: data.jobTitle || "",
        },
      }),
    }
  );

  const result = await response.json();

  if (!response.ok) {
    const errorData = result as SupabaseError;

    throw new Error(
      errorData.message ||
        errorData.msg ||
        errorData.error_description ||
        "Registration failed"
    );
  }

  return result;
};
