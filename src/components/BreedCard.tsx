import type { CardProps, CatBreed } from '../types'
import { MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { CatImage } from './CatImage'

export const BreedCard = (props: CardProps<CatBreed>) => {
  const { index, cardProps } = props
  const navigate = useNavigate()

  const handleBreedClick = (e: MouseEvent) =>
    navigate(`/breed/${cardProps.image?.id}`)

  return (
    cardProps && (
      <CatImage
        imageId={cardProps.reference_image_id}
        imageUrl={cardProps.image?.url}
        className={`item-${index}`}
        key={cardProps.id}
        isBreed
        onClick={handleBreedClick}
      >
        <span className='absolute inset-0 top-auto bg-Blue-100 px-2 py-1'>
          {cardProps.name}
        </span>
      </CatImage>
    )
  )
}
