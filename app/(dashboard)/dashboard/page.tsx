import SideBar from "../DashboardLayoutComponents/SideBar/SideBar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <SideBar />

      <div className="flex min-w-0 flex-1 flex-col ">
        <header className="h-16 bg-gray-950 shrink-0 text-amber-100">
          TopBar
        </header>

        <main className="bg-amber-100 flex-1">frfr</main>
      </div>
    </div>
  );
}
