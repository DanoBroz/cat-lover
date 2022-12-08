import { ComponentPropsWithoutRef } from 'react'
import { HeartFavorite } from './HeartFavorite'

interface CatImageConfig extends ComponentPropsWithoutRef<'div'> {
  imageUrl?: string
  imageId?: string
  isBreed?: boolean
}

export const CatImage = (props: CatImageConfig) => {
  const {
    imageUrl,
    imageId,
    isBreed = false,
    className,
    children,
    ...elementProps
  } = props

  const fallbackPictureUrl =
    'https://kidsdrawing.net/blog/wp-content/uploads/2020/11/cat_logo2.jpg'

  return (
    <div
      style={{ backgroundImage: `url(${imageUrl || fallbackPictureUrl})` }}
      className={`relative rounded-lg border border-blue-200 bg-cover bg-center bg-no-repeat hover:cursor-pointer ${className}`}
      {...elementProps}
    >
      {imageId && !isBreed && <HeartFavorite imageId={imageId} />}
      {children}
    </div>
  )
}
