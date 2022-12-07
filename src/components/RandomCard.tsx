import { useContext, MouseEvent } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { CatContext } from '../context'
import type { CardProps, CatImageInfo } from '../types'

export const RandomCard = (props: CardProps<CatImageInfo>) => {
  const { index, cardProps } = props
  const { setActiveCatImage } = useContext(CatContext)
  const navigate = useNavigate()

  const handleRandomClick = (catData: CatImageInfo) => {
    setActiveCatImage(catData)
    navigate(`/breed/${catData.id}`)
  }

  return (
    <div
      key={cardProps.id}
      style={{ backgroundImage: `url(${cardProps.url})` }}
      onClick={() => handleRandomClick(cardProps)}
      className={`bg-cover item-${index} relative rounded-lg border border-blue-200 bg-center bg-no-repeat hover:cursor-pointer`}
    ></div>
  )
}
