function Blog() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h1 className="text-5xl font-extrabold text-center text-teal-700 mb-12 animate-fadeIn">
          Blog
        </h1>

        {/* Blog Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 animate-fadeInSlow">
            <h2 className="text-2xl font-bold text-teal-700 mb-4">The Rise of Islamic Cinema</h2>
            <p className="text-gray-600 mb-4">Exploring the growing influence of Islamic films in modern cinema and their cultural impact...</p>
          </article>

          <article className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 animate-fadeInSlow">
            <h2 className="text-2xl font-bold text-teal-700 mb-4">Islamic Storytelling Through Film</h2>
            <p className="text-gray-600 mb-4">How modern filmmakers are bringing Islamic stories to life on the big screen...</p>
          </article>

          <article className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 animate-fadeInSlow">
            <h2 className="text-2xl font-bold text-teal-700 mb-4">The Impact of Islamic Cinema on Global Audiences</h2>
            <p className="text-gray-600 mb-4">Discussing the global appeal and acceptance of Islamic films across cultures...</p>
          </article>
        </div>
      </div>
    </div>
  )
}

export default Blog;
