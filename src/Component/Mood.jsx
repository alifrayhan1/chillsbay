const card = [
  { img: "Mood1.png", heading: "Eat & Drinks" },
  { img: "Mood2.png", heading: "Event" },
  { img: "Mood3.png", heading: "Club" },
  { img: "Mood4.png", heading: "Things to do" },
];

function Mood() {
  return (
    <section className="p-10 lg:p-20">
      <h1 className="text-2xl font-bold text-center mb-6">
        What are you in the mood for?
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-0">
        {card.map((info, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center"
          >
            <img src={info.img} alt={info.heading} className="w-full h-full" />
            <h1 className="text-center mt-2">{info.heading}</h1>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Mood;

