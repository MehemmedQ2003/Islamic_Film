import axios from 'axios'

const API_URL = 'http://localhost:5174/movies'

export const fetchMovies = async () => {
  try {
    const response = await axios.get(API_URL)
    return response.data
  } catch (error) {
    console.error('Error fetching movies:', error)
    throw error
  }
}

export const createMovie = async (movieData) => {
  try {
    const response = await axios.post(API_URL, movieData)
    return response.data
  } catch (error) {
    console.error('Error creating movie:', error)
    throw error
  }
}

export const updateMovie = async (id, movieData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, movieData)
    return response.data
  } catch (error) {
    console.error('Error updating movie:', error)
    throw error
  }
}

export const deleteMovie = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`)
    return { success: true }
  } catch (error) {
    console.error('Error deleting movie:', error)
    throw error
  }
}