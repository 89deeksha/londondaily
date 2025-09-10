import { useState } from "react";
import { RiComputerLine } from "react-icons/ri";
import { MdFormatListBulleted } from "react-icons/md";
import { FaUser, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom"; // ✅ import Link
import logo from "../Images/logo.png";

const Sidebar: React.FC = () => {
  // state to store which menus are open
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});

  const toggleMenu = (name: string) => {
    setOpenMenus((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const menu = [
    {
      items: [
        { name: "Dashboard", icon: <RiComputerLine />, path: "/home/dashboard" },
        {
          name: "Admin",
          icon: <MdFormatListBulleted />,
          Children: [
            { name: "MiniAdmin Master", icon: <FaUser />, path: "/home/admin/subadmin-1" },
            { name: "Master", icon: <FaUser />, path: "/home/admin/master" },
            { name: "Superagent Master", icon: <FaUser />, path: "/home/admin/list-superagent/1" },
            { name: "Agent Master", icon: <FaUser />, path: "" },
            { name: "Client Master", icon: <FaUser />, path: "" },
          ],
        },
        { name: "Sports Details", icon: <RiComputerLine />, path: "/app/sports" },
        {
          name: "Ledger",
          icon: <MdFormatListBulleted />,
          Children: [
            { name: "MiniAdmin Master", icon: <FaUser />, path: "" },
            { name: "Master", icon: <FaUser />, path: "" },
            { name: "Superagent Master", icon: <FaUser />, path: "" },
            { name: "Agent Master", icon: <FaUser />, path: "" },
            { name: "Client Master", icon: <FaUser />, path: "" },
          ],
        },
        { name: "AllSubadmin Report", icon: <RiComputerLine />, path: "/app/report" },
      ],
    },
  ];

  return (
    <div className="w-64 h-screen text-black font-medium">
      {/* Logo */}
      <div className="flex items-center justify-center h-20 border-b border-black">
        <img className="h-[40px] w-auto" src={logo} alt="Logo" />
      </div>

      {/* Menu */}
      <div className="bg-[#fdc100] h-screen overflow-y-auto">
        {menu.map((section, index) => (
          <div key={index}>
            {section.items.map((item, i) => (
              <div key={i} className="border-b border-black">
                {/* Parent menu */}
                <div
                  className="flex items-center justify-between gap-2 p-3 cursor-pointer hover:bg-yellow-400"
                  onClick={() => item.Children && toggleMenu(item.name)}
                >
                  {/* ✅ Parent with path uses Link, otherwise plain span */}
                  {item.path ? (
                    <Link to={item.path} className="flex items-center gap-2 text-lg w-full">
                      {item.icon} <span>{item.name}</span>
                    </Link>
                  ) : (
                    <span className="flex items-center gap-2 text-lg w-full">
                      {item.icon} <span>{item.name}</span>
                    </span>
                  )}

                  {item.Children && (
                    <span className="text-sm">
                      {openMenus[item.name] ? <FaChevronUp /> : <FaChevronDown />}
                    </span>
                  )}
                </div>

                {/* Children */}
                {item.Children && openMenus[item.name] && (
                  <div className="bg-yellow-400">
                    {item.Children.map((child, ci) => (
                      <Link
                        key={ci}
                        to={child.path}
                        className="flex items-center gap-2 pl-10 pr-3 py-2 cursor-pointer hover:bg-yellow-300"
                      >
                        <span className="text-sm">{child.icon}</span>
                        <span className="text-sm">{child.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
