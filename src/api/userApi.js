import axiosClient from './axiosClient'
import URL from '../constants/api'

const login = (data) => axiosClient.post(URL.loginUrl, data)

export default { login }
