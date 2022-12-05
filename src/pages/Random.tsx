import { useInfiniteQuery } from '@tanstack/react-query'
import { Fragment } from 'react'

import { getRandom } from '../api/services'
import { Button } from '../components'

export const Random = () => {
  const randomQuery = useInfiniteQuery({
    queryKey: ['random'],
    queryFn: getRandom,
    getNextPageParam: (lastPage, pages) => lastPage.nextPage,
  })

  return randomQuery.isLoading && !randomQuery.isStale ? (
    <div>Loading...</div>
  ) : (
    <>
      <section className='grid grid-cols-3 gap-4'>
        {randomQuery.data?.pages.map((page, index) => (
          <Fragment key={index}>
            {page.data.map((item) => (
              <img
                className='bg-cover bg-center bg-no-repeat first:row-span-2'
                key={item.id}
                src={item.url}
                alt={`cat ${item.id}`}
              />
            ))}
          </Fragment>
        ))}
      </section>
      <Button onClick={() => randomQuery.fetchNextPage()}>load more</Button>
    </>
  )
}
