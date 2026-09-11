type AuthCardProps = {
  children: React.ReactNode;
};

const AuthCard = ({ children }: AuthCardProps) => {
  return (
    <div
      className="rounded-lg  min-h-[calc(100vh-72px)] 
     bg-white px-8 py-8 shadow-[0_24px_48px_0_#041B3C0F] w-xl sm:px-12"
    >
      {children}
    </div>
  );
};

export default AuthCard;
