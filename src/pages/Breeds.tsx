import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { PortalWithState } from 'react-portal'
import { getBreeds } from '../api/services'
import { BreedCard, BreedModal, Button } from '../components'
import { useContext } from 'react'
import { CatContext } from '../context'
import { useEffect } from 'react'
import { ImageGridContainer } from '../containers'

export const Breeds = () => {
  const { activeImageId } = useParams()
  const { activeCatImage, setActiveCatImage } = useContext(CatContext)
  const [modalOpen, setModalOpen] = useState(false)
  const navigate = useNavigate()
  const queryClient = useQueryClient()

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
        <ImageGridContainer index={index}>
          {page.data.map((item, index) => (
            <BreedCard
              cardProps={item}
              index={index}
              onClick={() => setModalOpen(true)}
            />
          ))}
        </ImageGridContainer>
      ))}
      <Button
        className='justify-self-center disabled:cursor-not-allowed disabled:bg-gray-500'
        disabled={!breedsQuery.hasNextPage}
        onClick={() => breedsQuery.fetchNextPage()}
      >
        {breedsQuery.isFetchingNextPage ? 'loading more...' : 'load more'}
      </Button>
      <PortalWithState
        closeOnOutsideClick
        closeOnEsc
        onClose={() => navigate('/breed')}
      >
        {({ openPortal, closePortal, portal, isOpen }) => {
          modalOpen ? openPortal() : closePortal()
          stopBodyScroll(isOpen)
          return <>{portal(<BreedModal closePortal={closePortal} />)}</>
        }}
      </PortalWithState>
    </div>
  )
}
