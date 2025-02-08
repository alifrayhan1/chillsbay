import { useState, useEffect } from "react";
import Filter from "./Filter";

const images = ["Banner1.png", "Banner2.jpg", "Banner3.jpg",];

function Banner() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => 
      setCurrentImage((prev) => (prev + 1) % images.length)
    , 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="h-[636px] p-4 sm:px-10 sm:py-20 bg-cover bg-center transition-all duration-500"
      style={{ backgroundImage: `url(${images[currentImage]})` }}
    >
      <div>
        <h1 className="text-2xl sm:text-4xl font-bold sm:w-2/3 mt-20 pt-10 sm:pb-20 px-8 sm:px-0 bg-white sm:bg-transparent text-black sm:text-white rounded-t-2xl">
          Find amazing things to do anytime, anywhere in Lagos.
        </h1>
        <div>
          <Filter />
        </div>
      </div>
    </section>
  );
}

export default Banner;
