import image1 from "../../Images/card.png"
import image2 from "../../Images/card1.png";
import image3 from "../../Images/card2.png";
import image4 from "../../Images/card3.png";
import image5 from "../../Images/card4.png";
import image6 from "../../Images/card5.png";
import image7 from "../../Images/card7.png";
import image8 from "../../Images/card8.png";
import matka from "../../Images/matka.png";
import { useNavigate } from "react-router-dom";
import { FaUser, FaFutbol, FaBook, FaTag } from "react-icons/fa";

const Lucky7B: React.FC = () => {
  const data = [
    { image: image1, card: "Teenpatti T20", link: "/home/Teenpattit20" },
    { image: image2, card: "Dragon Tiger2", link: "/home/DragonTiger2" },
    { image: image3, card: "Lucky 7B", link: "/home/Lucky7B" },
    { image: image4, card: "TeenPatti Onedat", link: "/teenpatti-onedat" },
    { image: image5, card: "AAA", link: "/aaa" },
    { image: image8, card: "20-20 Dragon Tiger 2", link: "/dragon-tiger-20" },
    { image: image6, card: "Worly Matka", link: "/worly-matka" },
    { image: image7, card: "20-20 Dragon Tiger 2", link: "/dragon-tiger-2" },
    { image: matka, card: "Matka", link: "/matka" },
  ];
  const items = [
    { icon: <FaUser size={40} />, label: "Admin Details", link: "/admin-details" },
    { icon: <FaFutbol size={40} />, label: "Sports Details", link: "/sports-details" },
    { icon: <FaBook size={40} />, label: "Ledger", link: "/ledger" },
    { icon: <FaTag size={40} />, label: "All Subadmin Report", link: "/subadmin-report" },
  ];
  const Amount =[
    {
       name:"My Account",
       Amount:"1000000",
       color:"#29a745"
    },
    {
        name:"My Account",
        Amount:"1000000",
        color:"#15a2b8"
     },
     {
        name:"My Account",
        Amount:"1000000",
        color:"#6d757e"
     },
     {
        name:"My Account",
        Amount:"1000000",
         color:"#ffc00a"
     },
     {
        name:"My Account",
        Amount:"1000000",
        color:"#1c2e3e"
     },
     {
        name:"My Account",
        Amount:"1000000",
        color:"#29a745"
     },
     {
        name:"My Account",
        Amount:"#dc3444",
        color:"#dc3444"
     },
     {
        name:"My Account",
        Amount:"#dc3444",
        color:"#08225e"
     },
     
  ]

  const navigate = useNavigate();

  return (
    <div className="p-4 space-y-6">
      {/* Game Cards */}
      <div className="flex flex-wrap gap-2">
        {data.map((para, index) => (
          <div
            key={index}
            className="w-[200px] rounded-2xl bg-[#fdc100] shadow-md overflow-hidden cursor-pointer hover:scale-105 transition-transform"
            onClick={() => navigate(para.link)}
          >
            <img
              src={para.image}
              alt={para.card}
              className="h-[160px] w-full object-cover"
            />
            <p className="text-center text-white font-bold p-2">{para.card}</p>
          </div>
        ))}
      </div>

      {/* Match Card */}
      <div className="border h-[120px] border-[#fdc100] rounded-md overflow-hidden shadow-md w-[630px]">
        {/* Title */}
        <div className="bg-[#fdc100] text-white font-bold text-center p-2">
          Guyana Amazon Warriors v St. Kitts and Nevis Patr (T-20)
        </div>

        {/* Content */}
        <div className="bg-white p-3">
          {/* Status */}
          <div className="flex items-center gap-2 mb-2">
            <span className="h-3 w-3 rounded-full bg-green-500"></span>
            <p className="font-semibold text-black">IN PLAY</p>
          </div>

          {/* Date & Time */}
          <p className="font-bold text-black">08-09-2025 05:30:00 AM</p>
        </div>
      </div>
      {/* icons */}
      <div className="flex justify-center gap-40  mt-10 flex-wrap">
  {items.map((item, index) => (
    <div
      key={index}
      className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
      onClick={() => navigate(item.link)} // 👈 makes them clickable
    >
      <div className="flex items-center justify-center bg-blue-500 rounded-full w-30 h-30 text-white shadow-md">
        {item.icon}
      </div>
      <p className="mt-3 text-gray-600 justify-center font-medium">{item.label}</p>
    </div>
  ))}
  </div>
  <div className="grid w-full mt-2  grid-cols-3 gap-4">
  {Amount.map((acc, index) => (
    <div
      key={index}
      className="flex items-center gap-2 p-2 rounded-t-sm rounded-b-none shadow-md text-white  cursor-pointer hover:scale-105 transition-transform"
      style={{ backgroundColor: acc.color }}
    >
      <p >{acc.name}</p>
      <p >₹{acc.Amount}</p>
    </div>
  ))}
</div>



      
    </div>
  );
};

export default Lucky7B;
