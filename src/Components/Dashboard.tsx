import image1 from "../Images/card.png";
import image2 from "../Images/card1.png";
import image3 from "../Images/card2.png";
import image4 from "../Images/card3.png";
import image5 from "../Images/card4.png";
import image6 from "../Images/card5.png";
import image7 from "../Images/card7.png";


const Dashboard: React.FC = () => {
  const data = [
    { image: image1, card: "Teenpatti T20" },
    { image: image2, card: "Dragon Tiger2" },
    { image: image3, card: "Lucky 7B" },
    { image: image4, card: "TeenPatti Onedat" },
    { image: image5, card: "AAA" },
    { image: image6, card: "Worly Matka" },
    { image: image7, card: "20-20 Dragon Tiger 2" },
    
  ];

  return (
    <div className="flex flex-wrap">
      {data.map((para, index) => (
        <div
          key={index}
          className="h-[220px] w-[220px] rounded-2xl overflow-hidden  border-[#fdc100] shadow-md flex flex-col items-center justify-center"
        >
          <img
            src={para.image}
            alt={para.card}
            className="h-[180px] w-full object-cover"
          />
          <p className="text-center mt-2 font-medium">{para.card}</p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
