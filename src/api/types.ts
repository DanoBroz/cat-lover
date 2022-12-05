import { RandomImage } from '../types'

export interface RandomResponse {
  nextPage: number
  data: RandomImage[]
}
