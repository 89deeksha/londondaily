import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";
import Password from "../Components/Password";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [changepass, setChangepass] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="bg-[#fdc100] w-full h-[60px] px-4 flex items-center justify-between shadow-md flex-shrink-0">
      {/* Left: Hamburger */}
      <button
        className="bg-black text-white p-2 rounded"
        onClick={toggleSidebar} // toggles sidebar
      >
        <FaBars />
      </button>

      {/* Right: User */}
      <div className="relative flex items-center gap-1 bg-black text-white px-3 py-1 rounded cursor-pointer">
        <p className="font-medium">ADM1007</p>
        <MdOutlineArrowDropDown
          className="h-7 w-7"
          onClick={() => setIsOpen(!isOpen)}
        />

        {isOpen && (
          <div className="absolute top-[110%] right-0 bg-white text-black shadow-lg rounded w-48 py-2 z-50">
            <p
              className="px-4 py-2 flex items-center hover:bg-gray-100 cursor-pointer border-b border-gray-300"
              onClick={() => {
                setChangepass(true);
                setIsOpen(false);
              }}
            >
              <FaUser className="mr-2" /> Change Password
            </p>
            <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => navigate("/")}>
              Logout
            </p>
          </div>
        )}
      </div>

      {changepass && <Password onClose={() => setChangepass(false)} />}
    </div>
  );
};

export default Navbar;
