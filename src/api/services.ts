import type {
  DeleteFavoriteResponse,
  PaginationResponse,
  PostFavoriteResponse,
} from './types'
import axios from 'axios'
import { getRestApiConfig } from './config'
import { CatBreed, CatImage, CatImageInfo, FavoriteItem } from '../types'

export const getRandom = async ({
  pageParam = 0,
}): Promise<PaginationResponse<CatImageInfo>> => {
  const restApiConfig = getRestApiConfig()

  const requestUrl = new URL(
    `/v1/images/search?limit=10&has_breeds=true&page=${pageParam}`,
    restApiConfig.baseUrl
  ).href

  const { data } = await axios.get<CatImageInfo[]>(
    requestUrl,
    restApiConfig.apiConfig
  )

  return { nextPage: pageParam, data }
}

export const getBreeds = async ({
  pageParam = 0,
}): Promise<PaginationResponse<CatBreed>> => {
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

export const getBreedImages = async (breedId?: string): Promise<CatImage[]> => {
  const restApiConfig = getRestApiConfig()

  const requestUrl = new URL(
    `v1/images/search?breed_ids=${breedId}&limit=10`,
    restApiConfig.baseUrl
  ).href

  const { data } = await axios.get<CatImage[]>(
    requestUrl,
    restApiConfig.apiConfig
  )

  return data
}

export const getImageBreed = async (
  breedId?: string
): Promise<CatImageInfo> => {
  const restApiConfig = getRestApiConfig()

  const requestUrl = new URL(`v1/images/${breedId}`, restApiConfig.baseUrl).href

  const { data } = await axios.get<CatImageInfo>(
    requestUrl,
    restApiConfig.apiConfig
  )

  return data
}

export const getFavorites = async (): Promise<FavoriteItem[]> => {
  const restApiConfig = getRestApiConfig()

  const requestUrl = new URL(
    `v1/favourites?sub_id=my-user-34`,
    restApiConfig.baseUrl
  ).href

  const { data } = await axios.get<FavoriteItem[]>(
    requestUrl,
    restApiConfig.apiConfig
  )

  return data
}

export const postFavorite = async (
  imageId: string
): Promise<PostFavoriteResponse> => {
  const restApiConfig = getRestApiConfig()

  const requestUrl = new URL(`v1/favourites`, restApiConfig.baseUrl).href

  const body = {
    image_id: imageId,
    sub_id: 'my-user-34',
  }

  const { data } = await axios.post<PostFavoriteResponse>(
    requestUrl,
    body,
    restApiConfig.apiConfig
  )

  return data
}

export const deleteFavorite = async (
  imageId: number
): Promise<DeleteFavoriteResponse> => {
  const restApiConfig = getRestApiConfig()

  const requestUrl = new URL(`v1/favourites/${imageId}`, restApiConfig.baseUrl)
    .href

  const { data } = await axios.delete<DeleteFavoriteResponse>(
    requestUrl,
    restApiConfig.apiConfig
  )

  return data
}
