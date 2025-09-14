import { Route, Routes } from "react-router-dom";
import "./App.css";
import Signin from "./Pages/Signin";
import Home from "./Pages/Home";
import Dashboard from "./Components/Dashboard";
import MiniAdmin from "./Components/Admin/MiniAdmin";
import Master from "./Components/Admin/Master";
import SuperAgentMaster from "./Components/Admin/SuperAgentMaster";
import Agent from "./Components/Admin/Agent";
import Client from "./Components/Admin/Client";
import Sportsdetails from "./Components/Sportsdetails";
import MyLedger from "./Components/Ledger/MyLedger";
import Subadmin from "./Components/Ledger/Subadmin";
import Totalprofit from "./Components/Ledger/Totalprofit";
import Subad from "./Components/Ledger/Subad";
import Allsubadmin from "./Components/Allsubadmin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />

      {/* Home as parent layout */}
      <Route path="/home" element={<Home />}>
        {/* 👇 Default child when /home is visited */}
        <Route index element={<Dashboard />} />

        {/* Other child routes */}
        <Route path="dashboard" element={<Dashboard />} />

        {/* Admin children */}
        <Route path="admin">
          <Route path="subadmin-1" element={<MiniAdmin />} />
          <Route path="master" element={<Master/>} />
          <Route path="list-superagent/1" element={<SuperAgentMaster/>} />
          <Route path="list-agent/1" element={<Agent/>} />
          <Route path="list-client/1" element={<Client/>} />
          <Route path="app/sportsBetting" element={<Sportsdetails/>} />
          <Route path="app/client/my-ledger/admin" element={<MyLedger/>} />
          <Route path="app/settlement-admin/1" element={<Subadmin/>} />
          <Route path="app/ledger/subadmin" element={<Totalprofit/>} />
          <Route path="app/client/ledger-subadmin" element={<Subad/>} />
          <Route path="app/finalreport/subadmin" element={<Allsubadmin/>} />


          

        </Route>
      </Route>
    </Routes>
  );
}

export default App;
