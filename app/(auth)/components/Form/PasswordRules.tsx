const PasswordRules = () => {
  return (
    <div className="rounded-md bg-[#EEF2FF] px-3 py-2.5">
      <p className="mb-1.5 text-[10px] font-medium text-[#344054]">
        Your password must contain:
      </p>

      <div className="space-y-1 text-[9px] text-[#667085]">
        <p>◉ At least 8 characters</p>
        <p>◉ One uppercase letter</p>
        <p>◉ One lowercase letter, and one number</p>
      </div>
    </div>
  );
};

export default PasswordRules;
