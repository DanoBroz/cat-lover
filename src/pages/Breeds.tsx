import { useInfiniteQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { PortalWithState } from 'react-portal'
import { getBreeds } from '../api/services'
import { BreedCard, BreedModal, Button } from '../components'
import { useContext } from 'react'
import { CatContext } from '../context'
import { useEffect } from 'react'
import type { CatBreed } from '../types'

export const Breeds = () => {
  const { activeImageId } = useParams()
  const { activeCatImage, setActiveCatImage } = useContext(CatContext)
  const [modalOpen, setModalOpen] = useState(false)
  const navigate = useNavigate()

  const [activeBreed, setActiveBreed] = useState<CatBreed | undefined>()

  const fallbackPictureUrl =
    'https://kidsdrawing.net/blog/wp-content/uploads/2020/11/cat_logo2.jpg'

  const breedsQuery = useInfiniteQuery({
    queryKey: ['breeds'],
    queryFn: getBreeds,
    getNextPageParam: (lastPage) => lastPage.nextPage + 1,
  })

  useEffect(() => {
    !!activeImageId ? setModalOpen(true) : setModalOpen(false)
  }, [activeCatImage, activeImageId])

  const stopBodyScroll = (isModalOpen: boolean) => {
    isModalOpen
      ? document.body.classList.add('overflow-hidden')
      : document.body.classList.remove('overflow-hidden')
  }

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
              onClick={() => setModalOpen(true)}
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
      <PortalWithState
        closeOnOutsideClick
        closeOnEsc
        onClose={() => {
          //   setModalOpen(false)
          //   setActiveCatImage(undefined)
          navigate('/breed')
        }}
      >
        {({ openPortal, closePortal, portal, isOpen }) => {
          modalOpen ? openPortal() : closePortal()
          stopBodyScroll(isOpen)
          return (
            <>
              {portal(
                <BreedModal
                  catImageId={activeImageId!}
                  fallbackPicture={fallbackPictureUrl}
                  closePortal={closePortal}
                />
              )}
            </>
          )
        }}
      </PortalWithState>
    </div>
  )
}
