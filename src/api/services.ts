import type { ArrayResponse } from './types'
import axios from 'axios'
import { getRestApiConfig } from './config'
import { CatBreed, CatImage } from '../types'

export const getRandom = async ({
  pageParam = 0,
}): Promise<ArrayResponse<CatImage>> => {
  const restApiConfig = getRestApiConfig()

  const requestUrl = new URL(
    `/v1/images/search?limit=10&page=${pageParam}`,
    restApiConfig.baseUrl
  ).href

  const { data } = await axios.get<CatImage[]>(
    requestUrl,
    restApiConfig.apiConfig
  )

  return { nextPage: pageParam, data }
}

export const getBreeds = async ({
  pageParam = 0,
}): Promise<ArrayResponse<CatBreed>> => {
  const restApiConfig = getRestApiConfig()

  const requestUrl = new URL(
    `/v1/breeds?limit=10&page=${pageParam}`,
    restApiConfig.baseUrl
  ).href

  const { data } = await axios.get<CatBreed[]>(
    requestUrl,
    restApiConfig.apiConfig
  )

  return { nextPage: pageParam, data }
}
