import AuthLayouts from "@/app/Layouts/AuthLayouts";
import AuthCard from "../components/AuthCard";
import AuthHeader from "../components/AuthHeader";

import SignInForm from "../components/SignForm";

const LoginPage = () => {
  return (
    <AuthLayouts>
      <AuthCard>
        <AuthHeader
          title="Welcome back"
          subtitle="Please enter your details to sign in to your account"
        />
        <SignInForm />
      </AuthCard>
    </AuthLayouts>
  );
};

export default LoginPage;
