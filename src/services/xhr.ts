import axios from 'axios'
import { getAuthorizationHeader } from './helper'

interface Ioptions {
  method: string
  url: string
  data?: string | null
  params?: string | null
}

const xhr = async (options: Ioptions) => {
  const {
    method = 'GET',
    url = '/',
    data = null,
    params = null,
  } = { ...options }

  const BASE_URL = 'https://ptx.transportdata.tw/MOTC/'
  const targetUrl = BASE_URL + options.url

  return await axios({
    method,
    url: targetUrl,
    data, 
    params,
    // headers: getAuthorizationHeader(),
  })
    .then(res => res.data)
    .catch(err => Promise.reject(err))
}

export default xhr
