export interface PaginationResponse<ArrayType> {
  nextPage: number
  data: ArrayType[]
}

export interface PostFavoriteResponse {
  message: string
  id: number
}
