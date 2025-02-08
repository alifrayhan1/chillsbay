const card = [
  { img: "Things1.png", heading: "Sight Seeing" },
  { img: "Things2.png", heading: "Volley Ball Game" },
  { img: "Things3.png", heading: "Wizkid Show" },
  { img: "Things3.png", heading: "Wizkid Show" },
  { img: "Things1.png", heading: "Sight Seeing" },
  { img: "Things2.png", heading: "Volley Ball Game" },
  { img: "Things3.png", heading: "Wizkid Show" },
  { img: "Things3.png", heading: "Wizkid Show" },
];

function Things() {
  return (
    <section className="p-10 lg:p-20 bg-[#9A9FBF10]">
      <div className="space-y-5">
        <h1 className="text-xl font-bold">Top things to do in Lagos</h1>

        
        <div className="flex sm:grid sm:grid-cols-3 lg:grid-cols-4 gap-5 items-center 
          overflow-x-auto scroll-smooth whitespace-nowrap sm:whitespace-normal">
          
          {card.map((info, index) => (
            <div key={index} className="min-w-[70%] sm:w-full sm:min-w-0">
              <img src={info.img} alt={info.heading} className="w-full h-full rounded-2xl" />
              <h1 className="text-center font-medium">{info.heading}</h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Things;

