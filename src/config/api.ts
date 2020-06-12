import axios from 'axios'

import config from './index'

const api = axios.create({
  baseURL: config.base.base_url,
  timeout: 30000,
})

export default api
