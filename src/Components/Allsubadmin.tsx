import { useState } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";

const SubadminReport: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const options = ["John", "Priya", "Amit", "Sara"];

  return (
    <div className="flex flex-col p-4">
      {/* Date Filters */}
      <div className="flex gap-4 mb-4">
        <div className="flex flex-col w-1/2">
          <label className="text-sm font-medium mb-1">Start Date</label>
          <input
            type="date"
            className="border border-gray-400 p-2 rounded-sm"
          />
        </div>
        <div className="flex flex-col w-1/2">
          <label className="text-sm font-medium mb-1">End Date</label>
          <input
            type="date"
            className="border border-gray-400 p-2 rounded-sm"
          />
        </div>
      </div>

      {/* Subadmin Dropdown */}
      <div className="relative w-full mb-6">
        <div className="relative">
          <input
            type="text"
            value={selected}
            onClick={() => setIsOpen(!isOpen)}
            readOnly
            className="border border-gray-400 w-full p-2 rounded-sm cursor-pointer pr-8"
            placeholder="Select subadmin"
          />
          <MdOutlineArrowDropDown
            className={`absolute right-2 top-1/2 -translate-y-1/2 text-gray-600 cursor-pointer transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
            size={22}
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
        {isOpen && (
          <ul className="absolute w-full mt-1 border rounded-md bg-white shadow-lg z-10">
            {options.map((option, index) => (
              <li
                key={index}
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setSelected(option);
                  setIsOpen(false);
                }}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Report Table */}
      <div className=" overflow-x-auto">
        <table className=" w-full border border-gray-300 text-sm">
          <thead className="bg-yellow-400 text-black">
            <tr>
              <th className="border border-gray-300 p-2">Subadmin</th>
              <th className="border border-gray-300 p-2">Match(+/-)</th>
              <th className="border border-gray-300 p-2">Session(+/-)</th>
              <th className="border border-gray-300 p-2">Total</th>
              <th className="border border-gray-300 p-2">M.Comm</th>
              <th className="border border-gray-300 p-2">S.Comm</th>
              <th className="border border-gray-300 p-2">T.Comm</th>
              <th className="border border-gray-300 p-2">G.Total</th>
              <th className="border border-gray-300 p-2">S.Share</th>
              <th className="border border-gray-300 p-2">Balance</th>
              <th className="border border-gray-300 p-2">Details</th>
            </tr>
          </thead>
          <tbody>
            {/* Sample row */}
            <tr className="text-center">
              <td className="border border-gray-300 p-2">John</td>
              <td className="border border-gray-300 p-2 text-red-600">-100</td>
              <td className="border border-gray-300 p-2 text-green-600">200</td>
              <td className="border border-gray-300 p-2">100</td>
              <td className="border border-gray-300 p-2">10</td>
              <td className="border border-gray-300 p-2">5</td>
              <td className="border border-gray-300 p-2">15</td>
              <td className="border border-gray-300 p-2">115</td>
              <td className="border border-gray-300 p-2">50%</td>
              <td className="border border-gray-300 p-2 font-semibold">115</td>
              <td className="border border-gray-300 p-2">
                <button className="bg-yellow-500 text-black px-2 py-1 rounded-sm">
                  View
                </button>
              </td>
            </tr>
          </tbody>
          <tfoot className="bg-gray-100 font-bold">
            <tr>
              <td className="border border-gray-300 p-2 text-left">TOTAL</td>
              <td className="border border-gray-300 p-2 text-red-600">0.00</td>
              <td className="border border-gray-300 p-2 text-red-600">0.00</td>
              <td className="border border-gray-300 p-2">0.00</td>
              <td className="border border-gray-300 p-2">0.00</td>
              <td className="border border-gray-300 p-2">0.00</td>
              <td className="border border-gray-300 p-2">0.00</td>
              <td className="border border-gray-300 p-2">0.00</td>
              <td className="border border-gray-300 p-2">0.00</td>
              <td className="border border-gray-300 p-2">0.00</td>
              <td className="border border-gray-300 p-2">0.00</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default SubadminReport;
