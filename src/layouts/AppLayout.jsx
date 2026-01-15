import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../components/navigation/Sidebar";
import TopBar from "../components/navigation/TopBar";

export default function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-app text-text">
      <div className="flex">
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <div className="flex-1 min-w-0">
          <TopBar onMenu={() => setSidebarOpen(true)} />
          <main className="px-6 py-8">
            <div className="mx-auto max-w-5xl">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
