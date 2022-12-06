import { useInfiniteQuery } from '@tanstack/react-query'

import { getBreeds } from '../api/services'
import { BreedCard, Button } from '../components'

export const Breeds = () => {
  const breedsQuery = useInfiniteQuery({
    queryKey: ['breeds'],
    queryFn: getBreeds,
    getNextPageParam: (lastPage) => lastPage.nextPage + 1,
  })

  return breedsQuery.isLoading ? (
    <div>Loading...</div>
  ) : (
    <div className='grid gap-4'>
      {breedsQuery.data?.pages.map((page, index) => (
        <section
          key={index}
          className='grid grid-cols-[repeat(4,_160px)] grid-rows-[grid-cols-[repeat(8,_160px)]] gap-4'
        >
          {page.data.map((item, index) => (
            <BreedCard
              cardProps={item}
              index={index}
            />
          ))}
        </section>
      ))}
      {breedsQuery.isFetchingNextPage && 'Loading...'}
      <Button
        className='justify-self-center'
        onClick={() => breedsQuery.fetchNextPage()}
      >
        load more
      </Button>
    </div>
  )
}
