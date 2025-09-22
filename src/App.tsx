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
import Password from "./Components/Password";
import Teenpattit20 from "./Components/Cards/Teenpattit20";
import DragonTiger2 from "./Components/Cards/DragonTiger2";
import Lucky7B from "./Components/Cards/Lucky7B";

function App() {
  return (
    <Routes>
      {/* Signin */}
      <Route path="/" element={<Signin />} />

      {/* Home as parent layout */}
      <Route path="/home" element={<Home />}>
        {/* 👇 Default child route */}
        <Route index element={<Dashboard />} />

        {/* Other children */}
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="teenpattit20" element={<Teenpattit20 />} />
        <Route path="DragonTiger2" element={<DragonTiger2 />} />
        <Route path="Lucky7B" element={<Lucky7B />} />

        {/* Admin children */}
        <Route path="admin">
          <Route path="subadmin-1" element={<MiniAdmin />} />
          <Route path="master" element={<Master />} />
          <Route path="list-superagent/1" element={<SuperAgentMaster />} />
          <Route path="list-agent/1" element={<Agent />} />
          <Route path="list-client/1" element={<Client />} />
          <Route path="app/sportsBetting" element={<Sportsdetails />} />
          <Route path="app/client/my-ledger/admin" element={<MyLedger />} />
          <Route path="app/settlement-admin/1" element={<Subadmin />} />
          <Route path="app/ledger/subadmin" element={<Totalprofit />} />
          <Route path="app/client/ledger-subadmin" element={<Subad />} />
          <Route path="app/finalreport/subadmin" element={<Allsubadmin />} />
          <Route path="app/finalreport/pass" element={<Password />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
