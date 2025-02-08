import Carousel from "./carocel";


const card = [
  {
    img: "Use1.png",
    heading: `Your  entire  trip
              in one checkout!`,
    text:"Add multiple experiences to your cart and checkout on one click.",          
  },
  {
    img: "Use2.png",
    heading: `Pay with Crypto on the go`,
    text:"Enjoy the freedom of universal payments for a seamless marketplace experience",          
  },
  {
    img: "Use3.png",
    heading: `Free Cancellation
and ticket transfer`,
    text:"Resell your tickets or cancel your reservations at zero cost 24 hours before.",          
  },
];

function WhyUse() {
  return (
    <>
      <section className="p-10 lg:p-20">
        <div className="space-y-5">
          <h1 className="text-2xl sm:text-3xl text-center font-bold">
            Why Use Chillsbay?
          </h1>
          <div className="hidden sm:flex justify-center items-center gap-5  bg-[#9A9FBF10] p-5 rounded-2xl shadow">
            {card.map((info,index)=>(
                <div key={index} className="flex flex-col justify-center items-center space-y-2 ">
                    <img src={info.img} alt="" className="w-10 h-10 "/>
                    <h1 className="text-lg font-semibold w-[70%]">{info.heading}</h1>
                    <p className="text-xs text-gray-500 w-[80%]">{info.text}</p>
                </div>
            ))}
          </div>
          <div className="sm:hidden">
          <Carousel/></div>
        </div>
      </section>
    </>
  );
}

export default WhyUse;
