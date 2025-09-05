import { Route, Routes } from "react-router-dom"
import "./App.css"
import Signin from "./Pages/Signin"
import Home from "./Pages/Home"

function App() {
  return (
  
  <>
  <Routes>
    <Route path="/home" element={<Home/>}/>
<Route path="/" element={<Signin />}/>
  </Routes>

  </>
  )
}

export default App