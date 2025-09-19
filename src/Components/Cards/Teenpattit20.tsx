import ReactPlayer from 'react-player'
import React from "react";

import { RiComputerLine } from "react-icons/ri";

const Teenpattit20: React.FC = () => {
  const tabledata = [
    { Team: "Player A (0)", Back: "1.95", Lay: "0.00" },
    { Team: "Player B (0)", Back: "1.95", Lay: "0.00" }
  ]

  const tabledata1 = [
    { Session: "Session", Not: "Not", Yes: "Yes" },
  ]

  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center">
          <h2 className="text-xl">20-20 Teenpatti</h2>
          <button className="bg-[#15a2b8] text-white">17-09-2025</button>
        </div>

        {/* Video container with matching width */}
        <div className="mt-4 w-[850px]">
          <p className="bg-[#ffc100] flex justify-between p-2 font-medium w-full">
            Round: 12823737473y4
            <div className='flex justify-center items-center'>
              <RiComputerLine /><span>Live Tv</span>
            </div>
          </p>

          <ReactPlayer
          url="https://youtu.be/LXb3EKWsInQ"
          controls={true}
          playing={false}
          muted={true}
          width="100%"
          height="400px"
        />

          <div className="bg-[#ffc100] flex justify-between p-2 font-medium w-full">
            <p>Last Result</p>
            <p>View All</p>
          </div>
        </div>

        {/* Circles Table */}
        <table className="mt-0 border-separate border-spacing-10 text-center">
          <thead>
            <tr>
              <th className="text-white border bg-[#178fe9] border-gray-400 rounded-full w-12 h-12">A</th>
              <th className="text-white border bg-[#dc3444] border-gray-400 rounded-full w-12 h-12">B</th>
              <th className="text-white border bg-[#dc3444] border-gray-400 rounded-full w-12 h-12">B</th>
              <th className="text-white border bg-[#178fe9] border-gray-400 rounded-full w-12 h-12">A</th>
              <th className="text-white border bg-[#178fe9] border-gray-400 rounded-full w-12 h-12">A</th>
              <th className="text-white border bg-[#178fe9] border-gray-400 rounded-full w-12 h-12">A</th>
              <th className="text-white border bg-[#dc3444] border-gray-400 rounded-full w-12 h-12">B</th>
              <th className="text-white border bg-[#178fe9] border-gray-400 rounded-full w-12 h-12">A</th>
              <th className="text-white border bg-[#178fe9] border-gray-400 rounded-full w-12 h-12">A</th>
              <th className="text-white border bg-[#dc3444] border-gray-400 rounded-full w-12 h-12">B</th>
            </tr>
          </thead>
        </table>
      </div>

      {/* Two Tables beside each other */}
      <div className='flex mt-4'>
        <div className='flex gap-4 mx-47'>

          {/* Team/Back/Lay Table */}
          <table className="mt-4 border-collapse border text-start w-[450px]">
            <thead>
              <tr>
                <th className="border bg-[#ffc100] text-white border-gray-400 px-7 py-1">Team</th>
                <th className="border bg-[#ffc100] text-white border-gray-400 px-2 py-1">Back</th>
                <th className="border bg-[#ffc100] text-white border-gray-400 px-3 py-1">Lay</th>
              </tr>
            </thead>
            <tbody>
              {tabledata.map((data, index) => (
                <tr key={index}>
                  <td className='border bg-[#faae05] border-gray-400 px-3 py-2'>{data.Team}</td>
                  <td className='border bg-[#65b7f8] border-gray-400 px-1 py-1'>{data.Back}</td>
                  <td className='border bg-[#ee839c] border-gray-400 px-1 py-1'>{data.Lay}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Session/Not/Yes Table */}
          <table className="mt-4 border-collapse border text-start h-[30px] w-[380px]">
            {tabledata1.map((data1, index) => (
              <React.Fragment key={index}>
                <thead>
                  <tr>
                    <th className="border  text-black border-gray-400 px-4 py-2">{data1.Session}</th>
                    <th className="border  text-black border-gray-400 px-4 py-2">{data1.Not}</th>
                    <th className="border  text-black border-gray-400 px-4 py-2">{data1.Yes}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border bg-white border-gray-400 px-3 py-3">Loading Session...</td>
                    <td className="border bg-[#ee839c] text-sm border-gray-400 px-3 py-3"><span className='border'>SUSPENDED</span></td>
                    <td className="border bg-[#65b7f8] text-sm border-gray-400 px-3 py-3"><span className='border'>SUSPENDED</span></td>
                  </tr>
                </tbody>
              </React.Fragment>
            ))}
          </table>

        </div>
        
        
      </div>
      <table className="mx-47 mt-4 border-collapse border  table-auto ">
  <thead>
    {/* Top header spanning all columns */}
    <tr>
      <th
        className="border text-black border-gray-400 px-2 py-2 text-center font-bold"
        colSpan={5} // span across 7 columns
      >
        Match
      </th>
      <th
        className="border text-black border-gray-400 px-2 py-2 text-center font-bold"
        colSpan={5} // span across 7 columns
      >
        
      </th>
    </tr>

    {/* Column headers */}
    <tr className="bg-gray-100">
      <th className="border text-black border-gray-400 px-2 py-2 text-center font-bold">
        Client
      </th>
      <th className="border text-black border-gray-400 px-2 py-2 text-center font-bold">
        Amount
      </th>
      <th className="border text-black border-gray-400 px-2 py-2 text-center font-bold">
        Rate
      </th>
      <th className="border text-black border-gray-400 px-2 py-2 text-center font-bold">
        Player
      </th>
      <th className="border text-black border-gray-400 px-2 py-2 text-center font-bold">
        Result
      </th>
      <th className="border text-black border-gray-400 px-2 py-2 text-center font-bold">
        PnL
      </th>
      <th className="border text-black border-gray-400 px-2 py-2 text-center font-bold">
        Date
      </th>
      
    </tr>
  </thead>

  
</table>

      
    </div>
  )
}

export default Teenpattit20
