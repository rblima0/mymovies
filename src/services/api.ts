import axios from 'axios'

import config from 'utils/config'

const api = axios.create({
  baseURL: config.base_url,
  timeout: 30000,
})

export default api
