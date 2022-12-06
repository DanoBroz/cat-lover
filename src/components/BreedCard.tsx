import type { CardProps, CatBreed } from '../types'
import { PortalWithState } from 'react-portal'

export const BreedCard = (props: CardProps<CatBreed>) => {
  const { index, cardProps } = props

  const fallbackPictureUrl =
    'https://kidsdrawing.net/blog/wp-content/uploads/2020/11/cat_logo2.jpg'

  return (
    cardProps && (
      <PortalWithState
        closeOnEsc
        closeOnOutsideClick
      >
        {({ openPortal, closePortal, isOpen, portal }) => (
          <>
            <div
              style={{
                backgroundImage: `url(${
                  cardProps.image?.url || fallbackPictureUrl
                })`,
              }}
              className={`bg-cover item-${index} relative overflow-hidden rounded-lg border border-blue-200 bg-center bg-no-repeat hover:cursor-pointer`}
              key={cardProps.id}
              onClick={openPortal}
            >
              <span className='absolute inset-0 top-auto bg-Blue-100 px-2 py-1'>
                {cardProps.name}
              </span>
            </div>
            {portal(
              <div
                className='absolute inset-0 flex items-center justify-center bg-black/70'
                onClick={closePortal}
              >
                <div
                  className='bg-white'
                  onClick={(e) => e.stopPropagation()}
                >
                  This is more advanced Portal. It handles its own state.{' '}
                  <button onClick={closePortal}>Close me!</button>, hit ESC or
                  click outside of me.
                </div>
              </div>
            )}
          </>
        )}
      </PortalWithState>
    )
  )
}
