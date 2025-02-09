const PeopleImage = [
  "People1.png",
  "People2.png",
  "People3.png",
  "People4.png",
  "People5.png",
  "People6.png",
];

function People() {
  return (
    <>
      <section className="p-10 lg:p-20">
        <div className="space-y-2">
          <h1 className="text-lg font-bold">
            See How people are chilling in{" "}
            <span className="text-blue-500">Chillsbay</span>
          </h1>
          <div className="grid grid-cols-4 sm:grid-cols-6">
            {PeopleImage.map((info, index) => (
              <div key={index}>
                <img src={info} alt="" className="w-full h-auto"/>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default People;
