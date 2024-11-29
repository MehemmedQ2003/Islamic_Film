function Services() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Section Title */}
      <h1 className="text-4xl font-extrabold mb-12 text-center text-teal-700 animate-fadeIn">
        Our Services
      </h1>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Service Cards */}
        {[
          {
            title: "Film Distribution",
            description: "Access to a wide range of Islamic movies and documentaries.",
            icon: "🎥",
          },
          {
            title: "Educational Resources",
            description: "Supporting materials for Islamic education through cinema.",
            icon: "📚",
          },
          {
            title: "Community Events",
            description: "Film screenings and discussions for community engagement.",
            icon: "🤝",
          },
        ].map((service, index) => (
          <div
            key={index}
            className="relative bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform transition-transform duration-300 hover:scale-105 hover:bg-teal-50 animate-fadeInSlow"
          >
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-teal-100 text-teal-700 rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
              <span className="text-xl">{service.icon}</span>
            </div>
            <h2 className="text-2xl font-bold mb-4 text-center text-teal-700">
              {service.title}
            </h2>
            <p className="text-gray-600 text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
