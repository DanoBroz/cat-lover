import { useQuery } from '@tanstack/react-query'
import { getFavorites } from '../api/services'
import { RandomCard } from '../components'

export const Favorites = () => {
  const favoritesQuery = useQuery({
    queryKey: ['favorites'],
    queryFn: getFavorites,
  })

  return favoritesQuery.isLoading ? (
    <div>Loading...</div>
  ) : (
    <div className='grid gap-4'>
      <section className='grid grid-cols-[repeat(4,_160px)] grid-rows-[grid-cols-[repeat(8,_160px)]] gap-4'>
        {favoritesQuery.data?.map((item, index) => (
          <div
            key={item.id}
            style={{ backgroundImage: `url(${item.image.url})` }}
            // onClick={() => handleRandomClick(cardProps)}
            className={`relative h-40 w-40 rounded-lg border border-blue-200 bg-cover bg-center bg-no-repeat hover:cursor-pointer`}
          ></div>
        ))}
      </section>
    </div>
  )
}
