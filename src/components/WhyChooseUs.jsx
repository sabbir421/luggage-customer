export default function WhyChooseUs({area}) {
  const features = [
    {
      icon: "🌍", // Unicode emoji
      title: "Available in +10,000 spots around the world.",
    },
    {
      icon: "🔒", // Unicode emoji
      title: "2,000€ luggage protection",
    },
    {
      icon: "🔄", // Unicode emoji
      title:
        "100% free cancellation: cancel anytime before arrival and get a full refund.",
    },
    {
      icon: "⏰", // Unicode emoji
      title: "Customer service available 24/7",
    },
    {
      icon: "📱", // Unicode emoji
      title: "Quick online booking process with the Nannybag app",
    },
    {
      icon: "👥", // Unicode emoji
      title: "+1M users, and over 2M luggage stored with our service",
    },
  ];

  return (
    <div className="bg-gray-100 py-16 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          Why is Luggage Keeperes the best luggage storage in {area} ?
        </h2>
        <p className="mt-4 text-gray-600">
          As a convenient, affordable, and fully insured service, Luggagekeepers is a
          platform that connects you with local hotels and stores with extra
          space to store your luggage. By entrusting your bag or suitcase to
          luggagekeepers in {area}, you are choosing:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center space-x-4 bg-white shadow-lg rounded-lg p-6"
          >
            <div className="text-2xl">{feature.icon}</div> {/* Display emoji */}
            <p className="text-gray-700 font-medium">{feature.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
