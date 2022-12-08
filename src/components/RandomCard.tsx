import { useNavigate } from 'react-router-dom'
import type { CardProps, CatImageInfo } from '../types'
import { CatImage } from './CatImage'

export const RandomCard = (props: CardProps<CatImageInfo>) => {
  const { index, cardProps } = props
  const navigate = useNavigate()

  const handleRandomClick = (catData: CatImageInfo) => {
    navigate(`/breed/${catData.id}`)
  }

  return (
    <CatImage
      key={cardProps.id}
      imageId={cardProps.id}
      imageUrl={cardProps.url}
      onClick={() => handleRandomClick(cardProps)}
      className={`item-${index}`}
    />
  )
}
