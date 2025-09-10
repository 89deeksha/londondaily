import React from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import ball from "../Images/ball.png"

const Sportsdetails: React.FC = () => {
  const tabledata = [
    {
      sr: <MdOutlineArrowDropDown />,
      Date: "10-09-2025 23:00:00 PM",
      icon: "",
      name: "England v South Africa (T-20)",
      winner: "",
      "My Share P/L": 0,
      "Total P/L": 0,
    },
    {
        sr: <MdOutlineArrowDropDown />,
        Date: "10-09-2025 23:00:00 PM",
        icon: "",
        name: "England v South Africa (T-20)",
        winner: "",
        "My Share P/L": 0,
        "Total P/L": 0,
      },
      {
        sr: <MdOutlineArrowDropDown />,
        Date: "10-09-2025 23:00:00 PM",
        icon: "",
        name: "England v South Africa (T-20)",
        winner: "",
        "My Share P/L": 0,
        "Total P/L": 0,
      },
      {
        sr: <MdOutlineArrowDropDown />,
        Date: "10-09-2025 23:00:00 PM",
        icon: "",
        name: "England v South Africa (T-20)",
        winner: "",
        "My Share P/L": 0,
        "Total P/L": 0,
      },
      {
        sr: <MdOutlineArrowDropDown />,
        Date: "10-09-2025 23:00:00 PM",
        icon: "",
        name: "England v South Africa (T-20)",
        winner: "",
        "My Share P/L": 0,
        "Total P/L": 0,
      },
      {
        sr: <MdOutlineArrowDropDown />,
        Date: "10-09-2025 23:00:00 PM",
        icon: "",
        name: "England v South Africa (T-20)",
        winner: "",
        "My Share P/L": 0,
        "Total P/L": 0,
      },
      {
        sr: <MdOutlineArrowDropDown />,
        Date: "10-09-2025 23:00:00 PM",
        icon: "",
        name: "England v South Africa (T-20)",
        winner: "",
        "My Share P/L": 0,
        "Total P/L": 0,
      },
      {
        sr: <MdOutlineArrowDropDown />,
        Date: "10-09-2025 23:00:00 PM",
        icon: "",
        name: "England v South Africa (T-20)",
        winner: "",
        "My Share P/L": 0,
        "Total P/L": 0,
      },
      {
        sr: <MdOutlineArrowDropDown />,
        Date: "10-09-2025 23:00:00 PM",
        icon: "",
        name: "England v South Africa (T-20)",
        winner: "",
        "My Share P/L": 0,
        "Total P/L": 0,
      },
      {
        sr: <MdOutlineArrowDropDown />,
        Date: "10-09-2025 23:00:00 PM",
        icon: "",
        name: "England v South Africa (T-20)",
        winner: "",
        "My Share P/L": 0,
        "Total P/L": 0,
      },
      {
        sr: <MdOutlineArrowDropDown />,
        Date: "10-09-2025 23:00:00 PM",
        icon: "",
        name: "England v South Africa (T-20)",
        winner: "",
        "My Share P/L": 0,
        "Total P/L": 0,
      },
      {
        sr: <MdOutlineArrowDropDown />,
        Date: "10-09-2025 23:00:00 PM",
        icon: "",
        name: "England v South Africa (T-20)",
        winner: "",
        "My Share P/L": 0,
        "Total P/L": 0,
      },
      {
        sr: <MdOutlineArrowDropDown />,
        Date: "10-09-2025 23:00:00 PM",
        icon: "",
        name: "England v South Africa (T-20)",
        winner: "",
        "My Share P/L": 0,
        "Total P/L": 0,
      },
      {
        sr: <MdOutlineArrowDropDown />,
        Date: "10-09-2025 23:00:00 PM",
        icon: "",
        name: "England v South Africa (T-20)",
        winner: "",
        "My Share P/L": 0,
        "Total P/L": 0,
      },
      {
        sr: <MdOutlineArrowDropDown />,
        Date: "10-09-2025 23:00:00 PM",
        icon: "",
        name: "England v South Africa (T-20)",
        winner: "",
        "My Share P/L": 0,
        "Total P/L": 0,
      },
      {
        sr: <MdOutlineArrowDropDown />,
        Date: "10-09-2025 23:00:00 PM",
        icon: "",
        name: "England v South Africa (T-20)",
        winner: "",
        "My Share P/L": 0,
        "Total P/L": 0,
      },
      {
        sr: <MdOutlineArrowDropDown />,
        Date: "10-09-2025 23:00:00 PM",
        icon: "",
        name: "England v South Africa (T-20)",
        winner: "",
        "My Share P/L": 0,
        "Total P/L": 0,
      },
  ];

  return (
    <div className="p-4">
      <table className="w-full border-collapse border border-gray-400">
        <thead className="">
          <tr>
            <th className="border border-gray-400 px-4 py-2">-</th>
            <th className="border border-gray-400 px-4 py-2">Date</th>
            <th className="border border-gray-400 px-4 py-2">Name</th>
            <th className="border border-gray-400 px-4 py-2">Winner</th>
            <th className="border border-gray-400 px-4 py-2">My share P/L</th>
            <th className="border border-gray-400 px-4 py-2">Total P/L</th>
          </tr>
        </thead>
        <tbody>
          {tabledata.map((data, index) => (
            <tr key={index}>
              <td className="border   border-gray-400 px-4 py-2"><div className="text-4xl flex items-center justify-center">{data.sr}</div></td>
              <td className="border border-gray-400 px-4 py-2">{data.Date}</td>
              <td className="border border-gray-400 px-4 py-2">
  <div className="flex items-center gap-2">
    <img src={ball} alt="ball" className="w-5 h-5" />
    <span>{data.name}</span>
  </div>
</td>
              <td className="border border-gray-400 px-4 py-2">{data.winner}</td>
              <td className="border border-gray-400 px-4 py-2">
                {data["My Share P/L"]}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {data["Total P/L"]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Sportsdetails;
