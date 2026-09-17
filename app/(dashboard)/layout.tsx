import HeaderNavBar from "./DashboardLayoutComponents/HeaderNavBar/HeaderNavBar";
import SideBar from "./DashboardLayoutComponents/SideBar/SideBar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <SideBar />

      <div className="flex min-w-0 flex-1 flex-col bg-white-bg">
        <header>
          <HeaderNavBar />
        </header>

        <main className="flex-1 ">{children}</main>
      </div>
    </div>
  );
}
