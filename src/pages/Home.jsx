function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-teal-700 mb-6 animate-fadeIn">
          Welcome to Islamic Films
        </h1>
        <p className="text-xl text-gray-600 mb-8 animate-fadeInSlow">
          Discover meaningful stories that inspire and educate
        </p>
      </section>

      {/* Cards Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {[
          {
            title: "Featured Films",
            description: "Explore our collection of carefully selected Islamic movies.",
          },
          {
            title: "New Releases",
            description: "Stay updated with the latest Islamic cinema.",
          },
          {
            title: "Coming Soon",
            description: "Preview upcoming releases and exclusive content.",
          },
        ].map((card, index) => (
          <div
            key={card.title}
            className={`bg-teal-50 p-6 rounded-xl shadow-md hover:shadow-lg transform transition-transform duration-300 hover:scale-105 animate-cardFade delay-${index * 150}`}
          >
            <h2 className="text-2xl font-bold text-teal-800 mb-4">
              {card.title}
            </h2>
            <p className="text-gray-600">{card.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Home;
