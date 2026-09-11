import { LoginFormData } from "../(auth)/validations/login.schema";

type SupabaseError = {
  msg?: string;
  message?: string;
  error_description?: string;
};

export type LoginResponse = {
  access_token: string;
  refresh_token: string;
  token_type: string;
  expires_in: number;
  expires_at?: number;
  user: {
    id: string;
    email?: string;
    user_metadata?: {
      name?: string;
      department?: string;
    };
  };
};

export const loginUser = async (
  data: LoginFormData
): Promise<LoginResponse> => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Supabase environment variables are missing");
  }

  const response = await fetch(
    `${supabaseUrl}/auth/v1/token?grant_type=password`,
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
        "Login failed"
    );
  }

  return result as LoginResponse;
};
