import { useInfiniteQuery } from '@tanstack/react-query'

import { getRandom } from '../api/services'
import { Button, RandomCard } from '../components'

export const Random = () => {
  const randomQuery = useInfiniteQuery({
    queryKey: ['random'],
    queryFn: getRandom,
    getNextPageParam: (lastPage) => lastPage.nextPage + 1,
  })

  return randomQuery.isLoading ? (
    <div>Loading...</div>
  ) : (
    <div className='grid gap-4'>
      {randomQuery.data?.pages.map((page, index) => (
        <section
          key={index}
          className='grid grid-cols-[repeat(4,_160px)] grid-rows-[grid-cols-[repeat(8,_160px)]] gap-4'
        >
          {page.data.map((item, index) => (
            <RandomCard
              cardProps={item}
              index={index}
            />
          ))}
        </section>
      ))}
      <Button
        className='justify-self-center'
        onClick={() => randomQuery.fetchNextPage()}
      >
        {randomQuery.isFetchingNextPage ? 'loading more...' : 'load more'}
      </Button>
    </div>
  )
}
