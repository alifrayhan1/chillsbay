import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";

const SeeHow = () => {
  const cards = [
    {
      img: "Things3.png",
      heading: `Your entire trip in one checkout!`,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      icon1: "Icon1.png",
      icon2: "Icon2.png",
      icon3: "Icon3.png",
      icon4: "Icon4.png",
      icon5: "Icon5.png",
      icon6: "Icon6.png",
      icon1text: "Dec 12 2022",
      icon2text: "TBS Lagos",
      icon3text: "9:00 PM",
      icon4text: "N20,000",
    },
    {
      img: "Things3.png",
      heading: `Your entire trip in one checkout!`,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      icon1: "Icon1.png",
      icon2: "Icon2.png",
      icon3: "Icon3.png",
      icon4: "Icon4.png",
      icon5: "Icon5.png",
      icon6: "Icon6.png",
      icon1text: "Dec 12 2022",
      icon2text: "TBS Lagos",
      icon3text: "9:00 PM",
      icon4text: "N20,000",
    },
    {
      img: "Things3.png",
      heading: `Your entire trip in one checkout!`,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      icon1: "Icon1.png",
      icon2: "Icon2.png",
      icon3: "Icon3.png",
      icon4: "Icon4.png",
      icon5: "Icon5.png",
      icon6: "Icon6.png",
      icon1text: "Dec 12 2022",
      icon2text: "TBS Lagos",
      icon3text: "9:00 PM",
      icon4text: "N20,000",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const showCard = (index) => {
    setCurrentIndex(index);
  };

  const prev = () => {
    const index = currentIndex === 0 ? cards.length - 1 : currentIndex - 1;
    showCard(index);
  };

  const next = () => {
    const index = currentIndex === cards.length - 1 ? 0 : currentIndex + 1;
    showCard(index);
  };

  return (
    <section  className="p-10 lg:p-20">
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {cards.map((card, index) => (
            <div key={index} className="flex-shrink-0 w-full p-4 text-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <img
                  src={card.img}
                  alt=""
                  className="rounded-2xl h-auto w-full"
                />
                <div className="text-start space-y-3 lg:w-4/5 lg:space-y-5">
                  <h1 className="text-2xl font-bold">{card.heading}</h1>
                  <p className="text-xs text-gray-400">{card.text}</p>
                  <div className="grid grid-cols-2 space-x-1 space-y-1">
                    <div className="flex gap-1">
                      <img src={card.icon1} alt="" />
                      <h1 className="font-medium">{card.icon1text}</h1>
                    </div>
                    <div className="flex gap-1">
                      <img src={card.icon2} alt="" />
                      <h1 className="font-medium">{card.icon2text}</h1>
                    </div>
                    <div className="flex gap-1">
                      <img src={card.icon3} alt="" />
                      <h1 className="font-medium">{card.icon3text}</h1>
                    </div>
                    <div className="flex gap-1">
                      <img src={card.icon4} alt="" />
                      <h1 className="font-medium">{card.icon4text}</h1>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <button className="border-2 border-blue-500 text-blue-500 w-full rounded-sm font-medium">
                      Add to cart
                    </button>
                    <button className="bg-blue-500 text-white w-full font-medium rounded-sm">
                      Add to cart
                    </button>
                  </div>
                  <div className="flex gap-2">
                    <h1>Connect with us on:</h1>
                    <div className="flex gap-2">
                      <img src={card.icon5} alt="" />
                      <img src={card.icon6} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute inset-0 flex items-center justify-between">
          <button onClick={prev}>
            <ChevronLeft />
          </button>
          <button onClick={next}>
            {" "}
            <ChevronRight />
          </button>
        </div>
        <div className="absolute bottom-0 flex justify-center w-full">
          {cards.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 mx-1 rounded-full ${
                index === currentIndex ? "bg-gray-800" : "bg-gray-400"
              }`}
              onClick={() => showCard(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeeHow;
