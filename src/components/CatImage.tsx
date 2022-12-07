import { ComponentPropsWithoutRef } from 'react'

interface CatImageConfig extends ComponentPropsWithoutRef<'div'> {
  imageUrl?: string
}

export const CatImage = (props: CatImageConfig) => {
  const { imageUrl, className, children, ...elementProps } = props
  const fallbackPictureUrl =
    'https://kidsdrawing.net/blog/wp-content/uploads/2020/11/cat_logo2.jpg'

  return (
    <div
      style={{ backgroundImage: `url(${imageUrl || fallbackPictureUrl})` }}
      className={`relative rounded-lg border border-blue-200 bg-cover bg-center bg-no-repeat hover:cursor-pointer ${className}`}
      {...elementProps}
    >
      {children}
    </div>
  )
}
