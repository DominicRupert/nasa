import Axios from 'axios'

export const api = Axios.create({

  baseURL: 'https://api.nasa.gov/planetary/apod/',
  timeout: 8000,
 
})
