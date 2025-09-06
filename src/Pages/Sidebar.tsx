import { RiComputerLine } from "react-icons/ri";
import { MdFormatListBulleted } from "react-icons/md";
import logo from "../Images/logo.png";
import { FaUser } from "react-icons/fa";

const Sidebar: React.FC = () => {
  const menu = [
    {
      items: [
        { name: "Dashboard", icon: <RiComputerLine />, path: "app/dashboard" },
        {
          name: "Admin",
          icon: <MdFormatListBulleted />,
          path: "app/dashboard",
          Children: [
            {
              name: "MiniAdmin Master",
              icon: <FaUser />,
              path: "app/client/list-subadmin/1",
            },
            {
              name: "Master",
              icon: <FaUser />,
              path: "app/client/list-subadmin/1",
            },
            {
              name: "Superagent Master",
              icon: <FaUser />,
              path: "app/client/list-subadmin/1",
            },
            {
              name: "Agent Master",
              icon: <FaUser />,
              path: "app/client/list-subadmin/1",
            },
            {
              name: "Client Master",
              icon: <FaUser />,
              path: "app/client/list-subadmin/1",
            },
          ],
        },
        { name: "Sports Details", icon: <RiComputerLine />, path: "app/dashboard" },
        {
          name: "Ledger",
          icon: <MdFormatListBulleted />,
          path: "app/dashboard",
          Children: [
            {
              name: "MiniAdmin Master",
              icon: <FaUser />,
              path: "app/client/list-subadmin/1",
            },
            {
              name: "Master",
              icon: <FaUser />,
              path: "app/client/list-subadmin/1",
            },
            {
              name: "Superagent Master",
              icon: <FaUser />,
              path: "app/client/list-subadmin/1",
            },
            {
              name: "Agent Master",
              icon: <FaUser />,
              path: "app/client/list-subadmin/1",
            },
            {
              name: "Client Master",
              icon: <FaUser />,
              path: "app/client/list-subadmin/1",
            },
          ],
        },
        { name: "AllSubadmin Report", icon: <RiComputerLine />, path: "app/dashboard" },
      ],
    },
  ];

  return (
    <div className="w-64 h-screen ">
      {/* Logo */}
      <img className="h-[60px] w-[400px]  mb-2 p-3" src={logo} alt="Logo" />

      {/* Menu */}
      <div className="bg-[#fdc100] h-screen">
        {menu.map((section, index) => (
          <div key={index} className="mb-4">
            {section.items.map((item, i) => (
              <div key={i} className="mb-2">
                {/* Parent menu item */}
                <div className="flex items-center gap-2 p-2 hover:bg-gray-200 cursor-pointer rounded">
                  <span className="text-lg">{item.icon}</span>
                  <span className="font-medium">{item.name}</span>
                </div>

                {/* Children (if any) */}
                {item.Children && (
                  <div className="ml-6 mt-1">
                    {item.Children.map((child, ci) => (
                      <div
                        key={ci}
                        className="flex items-center gap-2 p-2 hover:bg-gray-200 cursor-pointer rounded"
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
