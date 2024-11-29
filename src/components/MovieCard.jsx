import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline'

function MovieCard({ movie, onEdit, onDelete }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden">
      <img 
        src={movie.poster} 
        alt={movie.title} 
        className="w-full h-96 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{movie.title}</h3>
        <p className="text-gray-600 mb-2">{movie.genre}</p>
        <p className="text-sm text-gray-500 mb-2">{movie.description}</p>
        <div className="text-sm text-gray-600 mb-4">
          <p>Director: {movie.director}</p>
          <p>Year: {movie.releaseYear}</p>
        </div>
        <div className="flex justify-end space-x-2">
          <button
            onClick={() => onEdit(movie)}
            className="p-2 text-blue-600 hover:bg-blue-50 rounded-full"
          >
            <PencilIcon className="h-5 w-5" />
          </button>
          <button
            onClick={() => onDelete(movie.id)}
            className="p-2 text-red-600 hover:bg-red-50 rounded-full"
          >
            <TrashIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default MovieCard