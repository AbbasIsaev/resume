import {trimRightSlash} from '../utils/utils'

const HOST = trimRightSlash(process.env.REACT_APP_API_HOST || '')
const NODE_ENV = process.env.NODE_ENV || 'development'

export const DEBUG = NODE_ENV === 'development'
export const API_URL = `${HOST}/api/v1`