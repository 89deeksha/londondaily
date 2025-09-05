
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"


const Home:React.FC=()=> {
  return (
//     <div className="flex gap-4  h-screen">
//   <div className="p-5">
//     <Sidebar />
//   </div>
//   <div className="flex ">
//     <Navbar/>
//     <div className="flex-1 p-4"><Outlet/></div>
//   </div>
// </div>
<div className="flex gap-4  h-screen">
    <div className="p-4"><Sidebar/></div>
    <div><Navbar/></div>
</div>

  )
}

export default Home