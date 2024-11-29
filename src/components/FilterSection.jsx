function FilterSection({ selectedGenre, onGenreChange }) {
  const genres = [
    { id: 'all', name: 'All Genres' },
    { id: 'historical', name: 'Historical' },
    { id: 'documentary', name: 'Documentary' },
    { id: 'drama', name: 'Drama' },
    { id: 'family', name: 'Family' },
    { id: 'educational', name: 'Educational' }
  ]

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Filter by Genre</h2>
      <div className="space-y-4">
        {genres.map(genre => (
          <label key={genre.id} className="flex items-center space-x-3">
            <input
              type="radio"
              name="genre"
              value={genre.id}
              checked={selectedGenre === genre.id}
              onChange={(e) => onGenreChange(e.target.value)}
              className="hidden"
            />
            <span
              className={`w-5 h-5 border-2 rounded-full flex items-center justify-center 
                ${selectedGenre === genre.id ? 'bg-teal-600 border-teal-600' : 'bg-white border-gray-400'}
                transition-all duration-200 ease-in-out cursor-pointer`}
            >
              {selectedGenre === genre.id && (
                <span className="w-3 h-3 bg-white rounded-full"></span>
              )}
            </span>
            <span className="text-lg font-medium text-gray-700">{genre.name}</span>
          </label>
        ))}
      </div>
    </div>
  )
}

export default FilterSection;
