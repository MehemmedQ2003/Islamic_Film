import { useState, useEffect } from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';
import MovieCard from '../components/MovieCard';
import SearchBar from '../components/SearchBar';
import FilterSection from '../components/FilterSection';
import MovieForm from '../components/MovieForm';
import Modal from '../components/Modal';
import { fetchMovies, createMovie, updateMovie, deleteMovie } from '../utils/api';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    loadMovies();
  }, []);

  useEffect(() => {
    let result = movies;

    if (searchTerm) {
      result = result.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedGenre !== 'all') {
      result = result.filter((movie) => movie.genre === selectedGenre);
    }

    setFilteredMovies(result);
  }, [searchTerm, selectedGenre, movies]);

  const loadMovies = async () => {
    try {
      const data = await fetchMovies();
      setMovies(data);
      setFilteredMovies(data);
    } catch (error) {
      console.error('Error loading movies:', error);
    }
  };

  const handleCreateMovie = async (movieData) => {
    try {
      await createMovie(movieData);
      await loadMovies();
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error creating movie:', error);
    }
  };

  const handleUpdateMovie = async (movieData) => {
    try {
      await updateMovie(selectedMovie.id, movieData);
      await loadMovies();
      setIsModalOpen(false);
      setSelectedMovie(null);
    } catch (error) {
      console.error('Error updating movie:', error);
    }
  };

  const handleDeleteMovie = async (id) => {
    if (window.confirm('Are you sure you want to delete this movie?')) {
      try {
        await deleteMovie(id);
        await loadMovies();
      } catch (error) {
        console.error('Error deleting movie:', error);
      }
    }
  };

  const handleEdit = (movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMovie(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8 animate-fadeIn">
        <h1 className="text-4xl font-bold text-teal-700">Islamic Movies</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center px-4 py-2 bg-teal-600 text-white rounded-lg shadow-lg hover:bg-teal-700 hover:shadow-xl transform transition-transform duration-300 hover:scale-105"
        >
          <PlusIcon className="h-5 w-5 mr-2" />
          Add Movie
        </button>
      </div>

      {/* Filter & Search */}
      <div className="flex flex-col md:flex-col gap-6 mb-8 animate-fadeInSlow">
        <div className="md:w-full bg-teal-50 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-teal-700 mb-4">Filters</h2>
          <FilterSection selectedGenre={selectedGenre} onGenreChange={setSelectedGenre} />
        </div>
        <div className="md:w-full">
          <h1 className="text-5xl font-bold text-teal-700 mb-4">Search</h1>
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        </div>
      </div>

      {/* Movies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {filteredMovies.length ? (
          filteredMovies.map((movie) => (
            <div
              key={movie.id}
              className="bg-white p-4 rounded-lg shadow-md transform transition-transform duration-300 hover:shadow-xl hover:scale-105 animate-fadeInSlow"
            >
              <MovieCard movie={movie} onEdit={handleEdit} onDelete={handleDeleteMovie} />
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500 text-lg">
            No movies found. Try adjusting your filters or search term.
          </p>
        )}
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={selectedMovie ? 'Edit Movie' : 'Add New Movie'}
      >
        <MovieForm
          movie={selectedMovie}
          onSubmit={selectedMovie ? handleUpdateMovie : handleCreateMovie}
          onCancel={handleCloseModal}
        />
      </Modal>
    </div>
  );
}

export default Movies;
