function Contact() {
  return (
    <div className="bg-gradient-to-b from-teal-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h1 className="text-5xl font-extrabold text-center text-teal-700 mb-12 animate-fadeIn">
          Contact Us
        </h1>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-xl transform hover:scale-105 transition duration-500 animate-fadeInSlow">
          <form className="space-y-6">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-lg font-semibold text-gray-800">Your Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="mt-1 block w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 transition duration-300 ease-in-out transform focus:scale-105"
              />
            </div>
            
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-lg font-semibold text-gray-800">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="mt-1 block w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 transition duration-300 ease-in-out transform focus:scale-105"
              />
            </div>

            {/* Message Textarea */}
            <div>
              <label htmlFor="message" className="block text-lg font-semibold text-gray-800">Your Message</label>
              <textarea
                id="message"
                placeholder="Write your message here..."
                rows="4"
                className="mt-1 block w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 transition duration-300 ease-in-out transform focus:scale-105"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition duration-300 transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
