import axios from 'axios'

const xhr = ({
  method = 'GET',
  data = null,
  params = null,
  url = '/',
}) => {
  const baseUrl = 'https://jsonplaceholder.typicode.com/'
  const targetUrl = baseUrl + url
  // console.log(url, data, params, )
  // axios({
  //   method: 'post',
  //   url: '/user/12345',
  //   data: {
  //     firstName: 'Fred',
  //     lastName: 'Flintstone'
  //   }
  // });
  const options = {
    method,
    targetUrl,
    data,
    params,
  }

  // axios(options)
    .then(res => {})
    .catch(err => { })

  return 
}


export default xhr
