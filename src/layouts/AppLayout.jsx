import { Outlet } from "react-router-dom";
import { useState } from "react";
import TopBar from "../components/navigation/TopBar";
import Sidebar from "../components/navigation/Sidebar";
import ScrollToTop from "../components/ScrollToTop";

export default function AppLayout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-app text-text">
      <TopBar onMenu={() => setOpen(true)} />
      <Sidebar open={open} onClose={() => setOpen(false)} />

      <ScrollToTop />

      <main className="pt-16">
        <div className="mx-auto w-full max-w-6xl 2xl:max-w-7xl px-4 sm:px-6 lg:px-12">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
