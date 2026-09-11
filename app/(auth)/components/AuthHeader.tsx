import React from "react";

type AuthHeaderProps = {
  title?: string;
  subtitle?: string;
};

const AuthHeader = ({ title, subtitle }: AuthHeaderProps) => {
  return (
    <div className="mb-6 flex flex-col items-center justify-center gap-2">
      <div>
        <h2 className="text-2xl font-bold text-[#101828]">{title}</h2>

        <p className="mt-2 text-xs text-[#667085]">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthHeader;
