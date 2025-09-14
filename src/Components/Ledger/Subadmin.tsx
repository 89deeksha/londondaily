const Subadmin:React.FC=()=> {
  return (
    <div className="flex flex-col p-4">
      {/* Header */}
      <header className="flex w-full justify-center text-center bg-[#6d757e] text-2xl font-medium p-2 text-white">
        All Subadmin Ledger
      </header>

      {/* Ledger Tables */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {/* Table 1 */}
        <table className="border w-full text-center">
          <thead>
            <tr>
              <th colSpan={4} className="p-3 font-medium">
                PAYMENT RECEIVING FROM ( LENA HAI )
              </th>
            </tr>
            <tr>
              <th className="border p-2">SUBADMIN</th>
              <th className="border p-2">AMOUNT</th>
              <th className="border p-2">SETTLED</th>
              <th className="border p-2">FINAL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={4} className="text-teal-800 text-start font-medium">
                User not found
              </td>
            </tr>
            <tr>
              <td className="border p-2">Lena Hai</td>
              <td className="border p-2 text-green-600">0.00</td>
              <td className="border p-2 text-green-600">0.00</td>
              <td className="border p-2 text-green-600">0.00</td>
            </tr>
          </tbody>
        </table>

        {/* Table 2 */}
        <table className="border w-full text-center">
          <thead>
            <tr>
              <th colSpan={4} className="p-3 font-medium">
                PAYMENT PAID TO ( DENA HAI )
              </th>
            </tr>
            <tr>
              <th className="border p-2">SUBADMIN</th>
              <th className="border p-2">AMOUNT</th>
              <th className="border p-2">SETTLED</th>
              <th className="border p-2">FINAL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={4} className="text-teal-800 text-start font-medium">
                User not found
              </td>
            </tr>
            <tr>
              <td className="border p-2">Dena Hai</td>
              <td className="border p-2 text-red-600">0.00</td>
              <td className="border p-2 text-red-600">0.00</td>
              <td className="border p-2 text-red-600">0.00</td>
            </tr>
          </tbody>
        </table>

        {/* Table 3 */}
        <table className="border w-full text-center">
          <thead>
            <tr>
              <th colSpan={4} className="p-3 font-medium">
                PAYMENT PAID TO ( CLEAR HAI )
              </th>
            </tr>
            <tr>
              <th className="border p-2">SUBADMIN</th>
              <th className="border p-2">AMOUNT</th>
              <th className="border p-2">SETTLED</th>
              <th className="border p-2">FINAL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={4} className="text-teal-800 text-start font-medium">
                User not found
              </td>
            </tr>
            <tr>
              <td className="border p-2">Clear Hai</td>
              <td className="border p-2 text-red-600">0.00</td>
              <td className="border p-2 text-red-600">0.00</td>
              <td className="border p-2 text-red-600">0.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Subadmin;
