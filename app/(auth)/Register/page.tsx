import AuthLayouts from "@/app/Layouts/AuthLayouts";
import AuthCard from "../components/AuthCard";
import AuthHeader from "../components/AuthHeader";
import SignUpForm from "../components/SignUpForm";

const RegisterPage = () => {
  return (
    <AuthLayouts>
      <AuthCard>
        <AuthHeader
          title="Create your workspace"
          subtitle="Join the editorial approach to task management."
        />
        <SignUpForm />
      </AuthCard>
    </AuthLayouts>
  );
};

export default RegisterPage;
