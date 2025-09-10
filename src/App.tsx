import { Route, Routes } from "react-router-dom";
import "./App.css";
import Signin from "./Pages/Signin";
import Home from "./Pages/Home";
import Dashboard from "./Components/Dashboard";
import MiniAdmin from "./Components/Admin/MiniAdmin";
import Master from "./Components/Admin/Master";
import SuperAgentMaster from "./Components/Admin/SuperAgentMaster";

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
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
