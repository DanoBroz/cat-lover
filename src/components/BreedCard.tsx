import type { CardProps, CatBreed } from '../types'
import { PortalWithState } from 'react-portal'
import { MouseEvent, useState } from 'react'
import { BreedModal } from './BreedModal'
import { useNavigate } from 'react-router-dom'

export const BreedCard = (props: CardProps<CatBreed>) => {
  const { index, cardProps } = props

  const fallbackPictureUrl =
    'https://kidsdrawing.net/blog/wp-content/uploads/2020/11/cat_logo2.jpg'

  const navigate = useNavigate()

  return (
    cardProps && (
      <div
        style={{
          backgroundImage: `url(${cardProps.image?.url || fallbackPictureUrl})`,
        }}
        className={`bg-cover item-${index} relative overflow-hidden rounded-lg border border-blue-200 bg-center bg-no-repeat hover:cursor-pointer`}
        key={cardProps.id}
        onClick={(e: MouseEvent) => {
          e.stopPropagation()
          navigate(`/breed/${cardProps.image?.id}`)
        }}
      >
        <span className='absolute inset-0 top-auto bg-Blue-100 px-2 py-1'>
          {cardProps.name}
        </span>
      </div>
    )
  )
}
