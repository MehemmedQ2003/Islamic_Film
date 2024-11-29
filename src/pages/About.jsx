function About() {
  return (
    <div className="bg-gradient-to-b from-teal-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h1 className="text-5xl font-extrabold text-teal-700 text-center mb-12 animate-fadeIn">
          About Us
        </h1>

        {/* About Content */}
        <div className="max-w-4xl mx-auto text-center">
          {/* Introduction */}
          <p className="text-xl text-gray-700 mb-8 animate-fadeInSlow">
            Islamic Films is dedicated to delivering meaningful and inspiring stories to audiences worldwide. 
            Through the power of cinema, we aim to promote Islamic values and connect people through timeless narratives.
          </p>

          {/* Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transform hover:scale-105 transition duration-300 animate-fadeInSlow">
              <h2 className="text-2xl font-semibold text-teal-700 mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To curate and produce inspiring content that educates, entertains, and upholds Islamic principles.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transform hover:scale-105 transition duration-300 animate-fadeInSlow">
              <h2 className="text-2xl font-semibold text-teal-700 mb-4">Our Vision</h2>
              <p className="text-gray-600">
                To make high-quality Islamic cinema accessible to viewers of all backgrounds and to inspire generations.
              </p>
            </div>
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="text-center mt-16">
          <a
            href="/contact"
            className="inline-block px-8 py-3 text-lg font-semibold text-white bg-teal-600 rounded-full shadow-md hover:bg-teal-700 transition duration-300 animate-bounce"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
