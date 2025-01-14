import Image from "next/image";

export default function CityGuideSection({area}) {
  const guides = [
    {
      image: "/img/paris1.jpg", // Replace with your image paths
      tag: "City Guide",
      date: "November 18, 2024",
      title: "Summer 2024 in Paris: Sport Spots to Party for Free",
      description:
        "This summer in Paris promises a showcase of elite athletic prowess and a vibrant atmosphere.",
    },
    {
      image: "/img/paris2.jpg",
      tag: "City Guide",
      date: "November 18, 2024",
      title: "Summer 2024: What You Should Know to Rent Your Place in Paris",
      description:
        "This summer, the city of lights is expected to welcome millions of visitors, making housing a priority.",
    },
    {
      image: "/img/paris3.jpg",
      tag: "City Guide",
      date: "November 18, 2024",
      title: "A FULL Guide to Plan Your Summer Vacation in Paris",
      description:
        "Paris promises to be an ideal destination for summer vacations, drawing visitors from all over the world.",
    },
  ];

  return (
    <div className="bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">Find your {area} Guide</h2>
        <p className="mt-4 text-gray-600">
          Explore the best tips and advice to make your {area} experience unforgettable.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {guides.map((guide, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
          >
            <div className="relative h-48 w-full">
              <Image
                src={guide.image}
                alt={guide.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex-grow">
              <span className="text-pink-500 text-sm font-semibold">{guide.tag}</span>
              <p className="text-gray-400 text-sm mt-1">{guide.date}</p>
              <h3 className="text-lg font-semibold text-gray-800 mt-2">
                {guide.title}
              </h3>
              <p className="text-gray-600 mt-2">{guide.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
