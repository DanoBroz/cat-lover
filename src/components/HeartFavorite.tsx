import type { MouseEvent } from 'react'
import { ReactComponent as HeartFilledIcon } from '../assets/icons/heart-filled.svg'
import { ReactComponent as HeartNotFilledIcon } from '../assets/icons/heart-not-filled.svg'
import { useFavorites } from '../hooks'

export const HeartFavorite = ({ imageId }: { imageId: string }) => {
  const { data, isLoading, deleteFavoriteMutation, favoriteMutation } =
    useFavorites()

  const heartClass =
    'absolute top-2 right-2 w-6 transition-transform hover:scale-125 active:scale-90'

  const itemInFavorites = data?.find((item) => item.image_id === imageId)

  const handleMutation = (e: MouseEvent, mutation: 'post' | 'delete') => {
    e.stopPropagation()
    mutation === 'delete' && itemInFavorites
      ? deleteFavoriteMutation.mutate(itemInFavorites.id)
      : favoriteMutation.mutate(imageId)
  }

  return !isLoading ? (
    <>
      {itemInFavorites ? (
        <HeartFilledIcon
          className={heartClass}
          onClick={(e) => handleMutation(e, 'delete')}
        />
      ) : (
        <HeartNotFilledIcon
          className={heartClass}
          onClick={(e) => handleMutation(e, 'post')}
        />
      )}
    </>
  ) : null
}
