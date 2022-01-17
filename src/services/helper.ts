import JsSHA from 'jssha'
import access from '../../access.json'

const AppID = access.AppID
const AppKey = access.AppKey

export const getAuthorizationHeader = () => {
  const GMTString = new Date().toUTCString()
  const ShaObj = new JsSHA('SHA-1', 'TEXT')
  ShaObj.setHMACKey(AppKey, 'TEXT')
  ShaObj.update('x-date: ' + GMTString)
  const HMAC = ShaObj.getHMAC('B64')
  const Authorization = `hmac username="${AppID}", algorithm="hmac-sha1", headers="x-date", signature="${HMAC}"`
  return {
    Authorization: Authorization,
    'X-Date': GMTString,
  }
}
