import React from "react";
import AuthNavBar from "../components/NavBar/AuthNav";

type AuthLayoutsProps = {
  children: React.ReactNode;
};
const AuthLayouts = ({ children }: AuthLayoutsProps) => {
  return (
    <>
      <AuthNavBar />

      <main
        className="rounded-lg bg-white-bg
      shadow-[0_24px_48px_0_#041B3C0F] sm:px-12 
      flex items-center justify-center px-4 py-10   "
      >
        {children}
      </main>
    </>
  );
};

export default AuthLayouts;
