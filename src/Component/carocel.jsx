import  { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import { ChevronRight } from 'lucide-react';

const Carousel = () => {
  const cards = [
    {
      img: "Use1.png",
      heading: `Your entire trip in one checkout!`,
      text: "Add multiple experiences to your cart and checkout on one click.",
    },
    {
      img: "Use2.png",
      heading: `Pay with Crypto on the go`,
      text: "Enjoy the freedom of universal payments for a seamless marketplace experience.",
    },
    {
      img: "Use3.png",
      heading: `Free Cancellation and ticket transfer`,
      text: "Resell your tickets or cancel your reservations at zero cost 24 hours before.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const showCard = (index) => {
    setCurrentIndex(index);
  };

  const prev = () => {
    const index = (currentIndex === 0) ? cards.length - 1 : currentIndex - 1;
    showCard(index);
  };

  const next = () => {
    const index = (currentIndex === cards.length - 1) ? 0 : currentIndex + 1;
    showCard(index);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {cards.map((card, index) => (
          <div key={index} className="flex-shrink-0 w-full p-4 text-center">
            <img className="w-24 h-24 mx-auto" src={card.img} alt={`Use${index + 1}`} />
            <h2 className="mt-4 text-xl font-semibold">{card.heading}</h2>
            <p className="mt-2 text-gray-600">{card.text}</p>
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between">
        <button onClick={prev}><ChevronLeft /></button>
        <button onClick={next}>  <ChevronRight /></button>
      </div>
      <div className="absolute bottom-0 flex justify-center w-full">
        {cards.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 mx-1 rounded-full ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'}`}
            onClick={() => showCard(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
