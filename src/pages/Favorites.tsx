import { useQuery } from '@tanstack/react-query'
import { MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { getFavorites } from '../api/services'
import { ReactComponent as FilledHeartIcon } from '../assets/icons/heart-filled.svg'
import { CatImage } from '../components'
import { ImageGridContainer, ScrollbarContainer } from '../containers'
import { useFavorites } from '../hooks'

export const Favorites = () => {
  const favoritesQuery = useQuery(['favorites'], getFavorites, {
    staleTime: 200,
  })

  const { deleteFavoriteMutation } = useFavorites()

  const deleteItem = (e: MouseEvent, itemId: number) => {
    e.stopPropagation()
    deleteFavoriteMutation.mutate(itemId)
    favoritesQuery.refetch()
  }

  const navigate = useNavigate()

  return favoritesQuery.isLoading ? (
    <div>Loading...</div>
  ) : (
    <ScrollbarContainer className='grid gap-4'>
      {favoritesQuery.data?.length ? (
        <ImageGridContainer>
          {favoritesQuery.data?.map((item) => (
            <CatImage
              key={item.id}
              imageId={item.image_id}
              imageUrl={item.image.url}
              onClick={() => navigate(`/breed/${item.image_id}`)}
              className='h-40 w-40'
            >
              <FilledHeartIcon
                className='absolute top-2 right-2 w-6 transition-transform hover:scale-125 active:scale-90'
                onClick={(e) => deleteItem(e, item.id)}
              />
            </CatImage>
          ))}
        </ImageGridContainer>
      ) : (
        <h2 className='text-xl'>Looks like you're more of a dog person...</h2>
      )}
    </ScrollbarContainer>
  )
}
