import axios from 'axios'
import { API_URL } from '../constants/env'
import storageUser from '../constants/storageUser'

const axiosClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

axiosClient.interceptors.request.use(async (config) => {
  if (sessionStorage.getItem(storageUser.TOKEN))
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${sessionStorage.getItem(
      storageUser.TOKEN
    )}`
  if (localStorage.getItem(storageUser.TOKEN))
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${localStorage.getItem(
      storageUser.TOKEN
    )}`
  return config
})

axiosClient.interceptors.response.use(
  (response) => (response && response.data ? response.data : response),
  (error) => Promise.reject(error)
)

export default axiosClient
