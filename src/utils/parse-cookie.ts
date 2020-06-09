import { IncomingMessage } from 'http'
import cookie from 'cookie'

export default function parseCookie (req: IncomingMessage) {
  const headerCookies = req.headers.cookie
  return headerCookies ? cookie.parse(headerCookies) : {}
}
