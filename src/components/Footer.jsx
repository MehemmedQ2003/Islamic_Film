function Footer() {
  return (
    <footer className="bg-teal-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* First Column - About Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-teal-100">Islamic Films</h3>
            <p className="text-lg text-gray-300">
              Bringing you the best in Islamic cinema and entertainment. Explore a wide range of films and documentaries.
            </p>
          </div>

          {/* Second Column - Quick Links */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-teal-100">Quick Links</h3>
            <ul className="space-y-3 text-lg">
              <li><a href="/movies" className="hover:text-teal-300 transition-colors">Movies</a></li>
              <li><a href="/about" className="hover:text-teal-300 transition-colors">About Us</a></li>
              <li><a href="/contact" className="hover:text-teal-300 transition-colors">Contact</a></li>
              <li><a href="/privacy" className="hover:text-teal-300 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Third Column - Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-teal-100">Contact Us</h3>
            <p className="text-lg text-gray-300 mb-2">Email: <a href="mailto:info@islamicfilms.com" className="hover:text-teal-300">info@islamicfilms.com</a></p>
            <p className="text-lg text-gray-300">Phone: <span className="hover:text-teal-300">+1 (555) 123-4567</span></p>
          </div>
        </div>

        {/* Bottom Footer - Copyright Section */}
        <div className="mt-12 text-center border-t border-teal-600 pt-4">
          <p className="text-lg text-gray-300">&copy; {new Date().getFullYear()} Islamic Films. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
