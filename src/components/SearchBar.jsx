function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="mb-6">
      <div className="relative">
        {/* Search Icon */}
        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35"
            />
          </svg>
        </span>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-12 pr-4 py-2 rounded-lg border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-300 ease-in-out text-xl"
        />
      </div>
    </div>
  );
}

export default SearchBar;
