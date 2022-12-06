import type { CardProps, CatImage } from '../types'

export const RandomCard = (props: CardProps<CatImage>) => {
  const { index, cardProps } = props

  return (
    <div
      style={{ backgroundImage: `url(${cardProps.url})` }}
      className={`bg-cover item-${index} relative rounded-lg border border-blue-200 bg-center bg-no-repeat`}
      key={cardProps.id}
    />
  )
}
