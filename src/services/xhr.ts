import axios from 'axios'
import { getAuthorizationHeader } from './helper'

interface Ioptions {
  method: Method
  url: string
  data?: string | null
  params?: string | null
}

const xhr = async ({
  method = 'GET',
  url = '/',
  data = null,
  params = null,
} :Ioptions) => {
  const BASE_URL = 'https://ptx.transportdata.tw/MOTC/'
  const targetUrl = BASE_URL + url
  // const arr: Array<number | string | boolean> = [1, 2, 3, 4, '2', true]
  function sum(arr:Array<number> = [123]) {
    // let args: number[] = arguments;
    console.log(arguments)
}
sum([12391230])

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
