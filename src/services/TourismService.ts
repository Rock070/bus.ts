import xhr from './xhr'

export default {
  getAllSpot: ({ body }) => {
    return xhr({
      url: 'v2/Tourism/ScenicSpot',
      method: 'get',
      params: body
    })
      .catch(err => Promise.reject(err))
  },
  getCitySpot: ({ path, params }) => {
    path = [encodeURIComponent(path.city)]

    return xhr({
      url: 'v2/Tourism/ScenicSpot',
      path,
      params,
      method: 'get'
    })
      .catch(err => Promise.reject(err))
  }
}
