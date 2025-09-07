import { useState } from "react";
import { RiComputerLine } from "react-icons/ri";
import { MdFormatListBulleted } from "react-icons/md";
import { FaUser, FaChevronDown, FaChevronUp } from "react-icons/fa";
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
        { name: "Dashboard", icon: <RiComputerLine />, path: "app/dashboard" },
        {
          name: "Admin",
          icon: <MdFormatListBulleted />,
          path: "app/dashboard",
          Children: [
            { name: "MiniAdmin Master", icon: <FaUser />, path: "app/client/list-subadmin/1" },
            { name: "Master", icon: <FaUser />, path: "app/client/list-subadmin/1" },
            { name: "Superagent Master", icon: <FaUser />, path: "app/client/list-subadmin/1" },
            { name: "Agent Master", icon: <FaUser />, path: "app/client/list-subadmin/1" },
            { name: "Client Master", icon: <FaUser />, path: "app/client/list-subadmin/1" },
          ],
        },
        { name: "Sports Details", icon: <RiComputerLine />, path: "app/dashboard" },
        {
          name: "Ledger",
          icon: <MdFormatListBulleted />,
          path: "app/dashboard",
          Children: [
            { name: "MiniAdmin Master", icon: <FaUser />, path: "app/client/list-subadmin/1" },
            { name: "Master", icon: <FaUser />, path: "app/client/list-subadmin/1" },
            { name: "Superagent Master", icon: <FaUser />, path: "app/client/list-subadmin/1" },
            { name: "Agent Master", icon: <FaUser />, path: "app/client/list-subadmin/1" },
            { name: "Client Master", icon: <FaUser />, path: "app/client/list-subadmin/1" },
          ],
        },
        { name: "AllSubadmin Report", icon: <RiComputerLine />, path: "app/dashboard" },
      ],
    },
  ];

  return (
    <div className="w-64 h-screen  text-black font-medium">
      {/* Logo */}
      <div className="flex items-center justify-center h-20 border-b border-black">
        <img className="h-[40px] w-auto" src={logo} alt="Logo" />
      </div>

      {/* Menu */}
      <div className="bg-[#fdc100] h-screen">
        {menu.map((section, index) => (
          <div key={index}>
            {section.items.map((item, i) => (
              <div key={i} className="border-b border-black">
                {/* Parent menu item */}
                <div
                  className="flex items-center justify-between gap-2 p-3 cursor-pointer hover:bg-yellow-400"
                  onClick={() => item.Children && toggleMenu(item.name)}
                >
                  <span className="flex items-center gap-2 text-lg">
                    {item.icon} <span>{item.name}</span>
                  </span>
                  {item.Children && (
                    <span className="text-sm">
                      {openMenus[item.name] ? <FaChevronUp /> : <FaChevronDown />}
                    </span>
                  )}
                </div>

                {/* Children (show only if open) */}
                {item.Children && openMenus[item.name] && (
                  <div className="bg-yellow-400">
                    {item.Children.map((child, ci) => (
                      <div
                        key={ci}
                        className="flex items-center gap-2 pl-10 pr-3 py-2 cursor-pointer hover:bg-yellow-300"
                      >
                        <span className="text-sm">{child.icon}</span>
                        <span className="text-sm">{child.name}</span>
                      </div>
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
