import { useState } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { PiFolderMinusFill } from "react-icons/pi";

const Subad: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const options = ["John", "Priya", "Amit", "Sara"];

  return (
    <div className="flex flex-col relative">
      {/* Header */}
      <header className="flex w-full justify-center text-center bg-[#6d757e] text-2xl font-medium p-1 text-white">
        Subadmin Ledger
      </header>

      {/* Input + Dropdown */}
      <div className="p-6 relative">
        <div className="relative">
          <input
            type="text"
            value={selected}
            onClick={() => setIsOpen(!isOpen)} // toggle dropdown
            readOnly
            className="border border-gray-400 w-full p-1 rounded-sm cursor-pointer pr-8"
            placeholder="Select a person"
          />
          {/* Icon inside input */}
          <MdOutlineArrowDropDown
            className={`absolute right-2 top-1/2 -translate-y-1/2 text-gray-600 cursor-pointer transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
            size={22}
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>

        {/* Settlement Button */}
        <div className="flex justify-center text-center mt-3">
          <button className="flex items-center justify-center gap-1 border border-[#eab306] rounded-sm bg-[#eab306] p-1 w-[120px] text-black font-medium">
            <PiFolderMinusFill size={18} />
            <span>Settlement</span>
          </button>
        </div>
        <table className="w-full mt-5 border  border-gray-300">
  <thead >
    <tr className="bg-gray-200 ">
      <th className="border border-gray-300 p-2 text-left">Date</th>
      <th className="border border-gray-300 p-2 text-left">Debit</th>
      <th className="border border-gray-300 p-2 text-left">Credit</th>
      <th className="border border-gray-300 p-2 text-left">Balance</th>
      <th className="border border-gray-300 p-2 text-left">Remark</th>
    </tr>
    <tr ><td className="p-3">no result</td></tr>
  </thead>
  </table>

        {/* Dropdown menu */}
        {isOpen && (
          <ul className="absolute left-6 right-6 mt-1 border rounded-md bg-white shadow-lg z-10">
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
    </div>
  );
};

export default Subad;
