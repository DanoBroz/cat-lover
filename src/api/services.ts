import axios from 'axios'
import { getRestApiConfig } from './config'

export const getRandom = async (): Promise<string | undefined> => {
  const restApiConfig = getRestApiConfig()
  const requestUrl = new URL('/v1/images/search', restApiConfig.baseUrl).href
  const response = await axios.get(requestUrl, restApiConfig.apiConfig)
  return response.data
}
