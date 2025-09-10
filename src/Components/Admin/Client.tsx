import React, { useState } from "react";

const Client: React.FC = () => {
    const [search, setSearch] = useState("");
    const data = [
        {
          id: 1,
          user: "U001",
          admin: "Admin1",
          name: "John Doe",
          password: "******",
          shareAdmin: "20%",
          shareSubadmin: "10%",
          balanceCurrent: "5000",
          commissionSess: "2%",
          commissionMat: "1%",
          commissionMatka: "3%",
        },
      ];
  return (
    <div className="mt-12">
      {/* Header Row */}
      <div className="flex border p-1 border-gray-300 bg-[#f7f7f7] w-full justify-between items-center mb-4">
        {/* Title */}
        <h2 className="text-xl">Client</h2>

        {/* Buttons */}
        <div className="flex gap-2">
          <button className="bg-green-600 hover:bg-green-700 text-white px-2 py-1 rounded flex items-center gap-2">
            💵 Update Limit
          </button>
          <button className="bg-[#1c2e3e] hover:bg-blue-950 text-white px-2 py-1 rounded flex items-center gap-2">
            ➕ Create
          </button>
        </div>
      </div>
      <div className="flex justify-end mb-2">
        <label className="flex items-center gap-2">
          <span className="font-medium">Search:</span>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border px-3 py-1 rounded"
          
          />
        </label>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-white border-collapse  text-sm">
          <thead>
          <tr>
            
              <th className="border  border-gray-400 px-40 py-2 "></th>
             
              <th className="border border-gray-400 px-2 py-2 bg-yellow-400">Share</th>
              <th className="border  border-gray-400 px-2 py-2 bg-yellow-400">Balance</th>
              <th className="border  border-gray-400 px-2 py-2 bg-yellow-400">Commission</th>
            </tr>

          </thead>
        </table>
        <table className="w-full text-white border-collapse  text-sm">
          <thead>
          <tr>
            
              <th className="border  border-gray-400 px-2 py-2 "></th>
              <th className="border  border-gray-400 text-black px-2 py-2 ">#</th>
              <th className="border  border-gray-400  text-black px-2 py-2 ">User</th>
              <th className="border  border-gray-400  text-black px-2 py-2 ">Admin</th>
             
              <th className="border border-gray-400 px-2 text-black py-2 ">Name</th>
              <th className="border  border-gray-400 px-2 py-2 text-black ">Password</th>
              <th className="border  border-gray-400 px-2 py-2 text-black ">Admin</th>
              <th className="border  border-gray-400 px-2 py-2 text-black ">Admin</th>
              <th className="border  border-gray-400 px-2 py-2 text-black ">Admin</th>
              <th className="border  border-gray-400 px-2 py-2 text-black ">Admin</th>
              <th className="border  border-gray-400 px-2 py-2 text-black ">Admin</th>
              <th className="border  border-gray-400 px-2 py-2 text-black ">Admin</th>
            </tr>
            
          </thead>
        </table>
      </div>
    </div>
  );
};

export default Client;
