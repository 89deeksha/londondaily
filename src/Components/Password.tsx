import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import { TiTick } from "react-icons/ti";

interface PasswordProps {
  onClose?: () => void;
}

const Password: React.FC<PasswordProps> = ({ onClose }) => {
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleUpdate = () => {
    let tempErrors: { [key: string]: string } = {};

    if (!oldPass.trim()) tempErrors.oldPass = "Old password is required";
    if (!newPass.trim()) tempErrors.newPass = "New password is required";
    if (!confirmPass.trim()) tempErrors.confirmPass = "Confirm password is required";
    if (newPass && confirmPass && newPass !== confirmPass) {
      tempErrors.confirmPass = "Passwords do not match";
    }

    setErrors(tempErrors);

    // ✅ If no errors, proceed
    if (Object.keys(tempErrors).length === 0) {
      alert("Password updated successfully!");
      setOldPass("");
      setNewPass("");
      setConfirmPass("");
      onClose?.();
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-start bg-opacity-50 z-[9999]">
      {/* Modal Box with full border */}
      <div className="bg-white rounded-lg shadow-lg w-[450px] relative mt-20 border border-gray-400">
        
        {/* Header */}
        <div className="flex justify-between items-center px-4 py-3 border-b border-gray-400">
          <h1 className="text-xl font-bold">Change Password</h1>
          <button onClick={onClose} className="text-gray-600 hover:text-red-500">
            <ImCross />
          </button>
        </div>

        {/* Content */}
        <div>
          {/* Input fields */}
          <div className="px-4 py-2">
            <input
              type="password"
              placeholder="Old Password"
              className="border w-full p-2 rounded focus:outline-none"
              value={oldPass}
              onChange={(e) => setOldPass(e.target.value)}
            />
            {errors.oldPass && <p className="text-red-500 text-sm">{errors.oldPass}</p>}
          </div>

          <div className="px-4 py-2">
            <input
              type="password"
              placeholder="New Password"
              className="border w-full p-2 rounded focus:outline-none"
              value={newPass}
              onChange={(e) => setNewPass(e.target.value)}
            />
            {errors.newPass && <p className="text-red-500 text-sm">{errors.newPass}</p>}
          </div>

          <div className="px-4 py-2">
            <input
              type="password"
              placeholder="Confirm Password"
              className="border w-full p-2 rounded focus:outline-none"
              value={confirmPass}
              onChange={(e) => setConfirmPass(e.target.value)}
            />
            {errors.confirmPass && <p className="text-red-500 text-sm">{errors.confirmPass}</p>}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-2 border-t border-gray-300 px-4 py-3">
          <button
            onClick={onClose}
            className="flex items-center gap-1 px-4 py-2 bg-[#fec109] text-white rounded hover:bg-yellow-500"
          >
            <ImCross /> Cancel
          </button>
          <button
            onClick={handleUpdate}
            className="flex items-center gap-1 px-4 py-2 bg-[#29a745] text-white rounded hover:bg-green-600"
          >
            <TiTick /> Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Password;
