import { useMutation, useQuery } from '@tanstack/react-query'
import { MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { deleteFavorite, getFavorites } from '../api/services'
import { ReactComponent as FilledHeartIcon } from '../assets/icons/heat-filled.svg'

export const Favorites = () => {
  const favoritesQuery = useQuery({
    queryKey: ['favorites'],
    queryFn: getFavorites,
  })

  const deleteMutation = useMutation((imageId: number) =>
    deleteFavorite(imageId)
  )

  const deleteItem = (e: MouseEvent, itemId: number) => {
    e.stopPropagation()
    deleteMutation.mutate(itemId)
    favoritesQuery.refetch()
  }

  const navigate = useNavigate()

  return favoritesQuery.isLoading ? (
    <div>Loading...</div>
  ) : (
    <div className='grid gap-4'>
      {favoritesQuery.data?.length ? (
        <section className='grid grid-cols-[repeat(4,_160px)] grid-rows-[grid-cols-[repeat(8,_160px)]] gap-4'>
          {favoritesQuery.data?.map((item, index) => (
            <div
              key={item.id}
              style={{ backgroundImage: `url(${item.image.url})` }}
              onClick={() => navigate(`/breed/${item.image_id}`)}
              className={`relative h-40 w-40 rounded-lg border border-blue-200 bg-cover bg-center bg-no-repeat hover:cursor-pointer`}
            >
              <FilledHeartIcon
                className='absolute top-2 right-2 w-6 transition-transform hover:scale-125 active:scale-90'
                onClick={(e) => deleteItem(e, item.id)}
              />
            </div>
          ))}
        </section>
      ) : (
        <h2 className='text-xl'>Looks like you're more of a dog person...</h2>
      )}
    </div>
  )
}
