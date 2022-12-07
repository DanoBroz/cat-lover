import { useContext, MouseEvent } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { CatContext } from '../context'
import type { CardProps, CatImageInfo } from '../types'
import { CatImage } from './CatImage'

export const RandomCard = (props: CardProps<CatImageInfo>) => {
  const { index, cardProps } = props
  const { setActiveCatImage } = useContext(CatContext)
  const navigate = useNavigate()

  const handleRandomClick = (catData: CatImageInfo) => {
    setActiveCatImage(catData)
    navigate(`/breed/${catData.id}`)
  }

  return (
    <CatImage
      key={cardProps.id}
      imageId={cardProps.id}
      imageUrl={cardProps.url}
      onClick={() => handleRandomClick(cardProps)}
      className={`item-${index}`}
    ></CatImage>
  )
}
