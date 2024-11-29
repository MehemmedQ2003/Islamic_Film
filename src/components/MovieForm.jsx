import { useState, useEffect } from 'react'

function MovieForm({ movie, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    title: '',
    genre: 'historical',
    description: '',
    poster: '',
    releaseYear: '',
    director: ''
  })

  useEffect(() => {
    if (movie) {
      setFormData(movie)
    }
  }, [movie])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
        />
      </div>

      <div>
        <label htmlFor="genre" className="block text-sm font-medium text-gray-700">Genre</label>
        <select
          id="genre"
          name="genre"
          value={formData.genre}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
        >
          <option value="historical">Historical</option>
          <option value="documentary">Documentary</option>
          <option value="drama">Drama</option>
          <option value="family">Family</option>
          <option value="educational">Educational</option>
        </select>
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows="3"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
        />
      </div>

      <div>
        <label htmlFor="poster" className="block text-sm font-medium text-gray-700">Poster URL</label>
        <input
          type="url"
          id="poster"
          name="poster"
          value={formData.poster}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
        />
      </div>

      <div>
        <label htmlFor="releaseYear" className="block text-sm font-medium text-gray-700">Release Year</label>
        <input
          type="number"
          id="releaseYear"
          name="releaseYear"
          value={formData.releaseYear}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
        />
      </div>

      <div>
        <label htmlFor="director" className="block text-sm font-medium text-gray-700">Director</label>
        <input
          type="text"
          id="director"
          name="director"
          value={formData.director}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
        />
      </div>

      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700"
        >
          {movie ? 'Update Movie' : 'Add Movie'}
        </button>
      </div>
    </form>
  )
}

export default MovieForm