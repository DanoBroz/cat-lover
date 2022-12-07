import { ComponentPropsWithoutRef } from 'react'

export interface CatImage {
  id: string
  url?: string
  width: number
  height: number
}

interface Weight {
  imperial: string
  metric: string
}

export interface CatBreed {
  id: string
  weight: Weight
  name: string
  temperament: string
  origin: string
  description: string
  life_span: string
  reference_image_id: string
  image?: CatImage
}

export interface CatImageInfo extends CatImage {
  breeds: CatBreed[]
}

export interface CardConfig<CardType> {
  index: number
  cardProps: CardType
}

export type CardProps<CardType> = CardConfig<CardType> &
  ComponentPropsWithoutRef<'div'>

export interface FavoriteItem {
  id: number
  user_id: string
  image_id: string
  sub_id: string
  created_at: string
  image: {
    id: string
    url: string
  }
}
