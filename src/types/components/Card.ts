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

export interface CardConfig<CardType> {
  index: number
  cardProps: CardType
}

export type CardProps<CardType> = CardConfig<CardType> &
  ComponentPropsWithoutRef<'div' | 'a'>
