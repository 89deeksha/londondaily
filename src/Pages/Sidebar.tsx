import { useState } from "react";
import { RiComputerLine } from "react-icons/ri";
import { MdFormatListBulleted } from "react-icons/md";
import { FaUser, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png";

interface SidebarProps {
  collapsed: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed }) => {
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({
    Admin: true,
    Ledger: true,
  });

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
            { name: "Agent Master", icon: <FaUser />, path: "/home/admin/list-agent/1" },
            { name: "Client Master", icon: <FaUser />, path: "/home/admin/list-client/1" },
          ],
        },
        { name: "Sports Details", icon: <RiComputerLine />, path: "/home/admin/app/sportsBetting" },
        {
          name: "Ledger",
          icon: <MdFormatListBulleted />,
          Children: [
            { name: "My Ledger", icon: <FaUser />, path: "/home/admin/app/client/my-ledger/admin" },
            { name: "All Subadmin Ledger", icon: <FaUser />, path: "/home/admin/app/settlement-admin/1" },
            { name: "Total Profit/Loss", icon: <FaUser />, path: "/home/admin/app/ledger/subadmin" },
            { name: "Subadmin Ledger", icon: <FaUser />, path: "/home/admin/app/client/ledger-subadmin" },
          ],
        },
        { name: "AllSubadmin Report", icon: <RiComputerLine />, path: "/home/admin/app/finalreport/subadmin" },
      ],
    },
  ];

  return (
    <div
      className={`${
        collapsed ? "w-16" : "w-64"
      } h-screen  text-black font-medium transition-all duration-300`}
    >
      {/* Logo */}
      <div className="flex items-center justify-center h-20 border-b border-black">
        <img
          className={`${collapsed ? "h-8 w-8" : "h-[40px] w-auto"}`}
          src={logo}
          alt="Logo"
        />
      </div>

      {/* Menu */}
      <div className="bg-[#fdc100] h-screen overflow-y-auto">
        {menu.map((section, index) => (
          <div key={index}>
            {section.items.map((item, i) => (
              <div key={i} className="border-b border-black relative group">
                {/* Parent menu row */}
                <div
                  className="flex items-center justify-between gap-2 p-3 cursor-pointer hover:bg-yellow-400"
                  onClick={() => !collapsed && item.Children && toggleMenu(item.name)}
                >
                  {item.path ? (
                    <Link to={item.path} className="flex items-center gap-2 text-lg w-full">
                      {item.icon}
                      {!collapsed && <span>{item.name}</span>}
                    </Link>
                  ) : (
                    <span className="flex items-center gap-2 text-lg w-full">
                      {item.icon}
                      {!collapsed && <span>{item.name}</span>}
                    </span>
                  )}

                  {/* Dropdown toggle icon (only in expanded mode) */}
                  {item.Children && !collapsed && (
                    <span className="text-sm">
                      {openMenus[item.name] ? <FaChevronUp /> : <FaChevronDown />}
                    </span>
                  )}
                </div>

                {/* Expanded children (only when sidebar expanded) */}
                {!collapsed && item.Children && openMenus[item.name] && (
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

                {/* Collapsed children → show flyout on hover */}
                {collapsed && item.Children && (
                  <div className="absolute top-0 left-full ml-1 hidden group-hover:block bg-yellow-400 shadow-lg rounded z-50 min-w-[180px]">
                    {item.Children.map((child, ci) => (
                      <Link
                        key={ci}
                        to={child.path}
                        className="flex items-center gap-2 px-4 py-2 whitespace-nowrap hover:bg-yellow-300"
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
