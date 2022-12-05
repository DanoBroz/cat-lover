import { RandomResponse } from './types'
import axios from 'axios'
import { getRestApiConfig } from './config'
import { RandomImage } from '../types'

export const getRandom = async ({ pageParam = 1 }): Promise<RandomResponse> => {
  const restApiConfig = getRestApiConfig()
  const requestUrl = new URL(
    `/v1/images/search?limit=10&page=${pageParam}`,
    restApiConfig.baseUrl
  ).href
  const response = await axios.get<RandomImage[]>(
    requestUrl,
    restApiConfig.apiConfig
  )
  return { nextPage: pageParam, data: response.data }
}
