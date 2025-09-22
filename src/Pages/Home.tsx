
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

import { Outlet } from "react-router-dom";


const Home: React.FC = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 hidden md:block ">
        <Sidebar />
      </div>

      {/* Right side (Navbar + Content) */}
      <div className="flex-1 flex flex-col">
        {/* Navbar stays full width */}
        <Navbar />

        {/* Page Content */}
        <div className="flex-1 overflow-auto w-full">
         <Outlet/>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
