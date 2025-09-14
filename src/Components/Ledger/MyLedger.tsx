import { useState, useEffect } from "react";

interface LedgerEntry {
  date: string;
  credit: number;
  debit: number;
  balance: number;
  remark: string;
}

const MyLedger: React.FC = () => {
  const [data, setData] = useState<LedgerEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const dummyHeaders = ["Date", "Credit", "Debit", "Balance", "Winner Remark"];

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const dummyData: LedgerEntry[] = [
        { date: "2025-09-10", credit: 500, debit: 0, balance: 500, remark: "Initial Deposit" },
        { date: "2025-09-11", credit: 0, debit: 200, balance: 300, remark: "Bet Loss" },
        { date: "2025-09-12", credit: 1000, debit: 0, balance: 1300, remark: "Bet Win" },
      ];
      setData(dummyData);
      setError("failed to fetch data")
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col min-h-screen"> {/* 👈 full height */}
      {/* Header */}
      <header className="bg-[#6d757e] text-white p-2 text-2xl font-medium text-center">
        My Ledger
      </header>

      {/* Table */}
      <div className="p-6 overflow-x-auto flex-1"> {/* 👈 take available space */}
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {!loading && !error && (
          <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-yellow-500 text-white">
              <tr>
                {dummyHeaders.map((header, index) => (
                  <th key={index} className="p-3 text-left">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((entry, index) => (
                <tr key={index} className="border-b hover:bg-gray-100">
                  <td className="p-3">{entry.date}</td>
                  <td className="p-3 text-green-600">{entry.credit}</td>
                  <td className="p-3 text-red-600">{entry.debit}</td>
                  <td className="p-3 font-bold">{entry.balance}</td>
                  <td className="p-3">{entry.remark}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Footer (Always at bottom) */}
      <footer className="p-4 bg-gray-200 flex justify-between items-center mt-auto">
        <span className="font-semibold">TOTAL</span>
        <span className="text-green-600 font-bold text-lg">
          {data.reduce((acc, row) => acc + row.balance, 0).toFixed(2)}
        </span>
      </footer>
    </div>
  );
};

export default MyLedger;
