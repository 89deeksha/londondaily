import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const Home: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false); // track collapse/expand

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar collapsed={collapsed} />

      {/* Right side (Navbar + Content) */}
      <div className="flex-1 flex flex-col">
        <Navbar toggleSidebar={() => setCollapsed(!collapsed)} />

        <div className="flex-1 overflow-auto w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
