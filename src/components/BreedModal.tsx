import { useQuery } from '@tanstack/react-query'
import { PortalFunctionParams } from 'react-portal'
import { useNavigate } from 'react-router-dom'
import { getBreedImages, getImageBreed } from '../api/services'
import { CatBreed } from '../types'
import { BreedCard } from './BreedCard'

interface BreedModalConfig {
  catImageId: string
  fallbackPicture: string
}

type BreedModalProps = BreedModalConfig & Partial<PortalFunctionParams>

export const BreedModal = (props: BreedModalProps) => {
  const { fallbackPicture, closePortal, catImageId } = props

  const { data: imageInfo, isLoading: imageInfoLoading } = useQuery(
    ['imageBreed', catImageId],
    () => getImageBreed(catImageId),
    {
      keepPreviousData: true,
    }
  )

  const { data, isLoading } = useQuery(
    ['breed', imageInfo?.breeds[0].id],
    () => getBreedImages(imageInfo?.breeds[0].id),
    {
      enabled: !!imageInfo,
    }
  )

  const navigate = useNavigate()

  return (
    <div
      className='fixed inset-0 bg-black/80 text-Blue-800'
      onClick={closePortal}
    >
      <div
        className='modal-content container sticky top-20 max-h-[70vh] overflow-y-scroll rounded-lg bg-white py-16'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='m-5 mx-auto max-w-[688px]'>
          <div className='grid grid-cols-2 gap-4 pb-6'>
            <div
              style={{
                backgroundImage: `url(${imageInfo?.url || fallbackPicture})`,
              }}
              className='h-[336px] w-[336px] overflow-hidden rounded-lg border border-blue-200 bg-cover bg-center bg-no-repeat'
            />
            <div>
              <h2 className='pb-2 text-xl font-semibold'>
                {imageInfo?.breeds[0].name}
              </h2>
              {imageInfo?.breeds[0].description && (
                <p className='pb-4'>{imageInfo?.breeds[0].description}</p>
              )}
              {imageInfo?.breeds[0].temperament && (
                <p>
                  temperament:{' '}
                  <span className='italic text-Blue-400'>
                    {imageInfo?.breeds[0].temperament}
                  </span>
                </p>
              )}
              {imageInfo?.breeds[0].origin && (
                <p>
                  Origin:{' '}
                  <span className='italic text-Blue-400'>
                    {imageInfo?.breeds[0].origin}
                  </span>
                </p>
              )}
              {imageInfo?.breeds[0].weight && (
                <p>
                  Average weight:{' '}
                  <span className='italic text-Blue-400'>
                    {imageInfo?.breeds[0].weight.metric}kg
                  </span>
                </p>
              )}
              {imageInfo?.breeds[0].life_span && (
                <p>
                  Average life span:{' '}
                  <span className='italic text-Blue-400'>
                    {imageInfo?.breeds[0].life_span} years
                  </span>
                </p>
              )}
            </div>
          </div>
          <div>
            {isLoading ? (
              'Loading other breed images...'
            ) : (
              <>
                <h3 className='pb-2 font-semibold'>More breed images</h3>
                <div
                  style={{ direction: 'rtl' }}
                  className='grid grid-cols-[repeat(4,_160px)] grid-rows-[grid-cols-[repeat(8,_160px)]] gap-4'
                >
                  {data
                    ?.filter((image) => image.id !== imageInfo?.id)
                    .map((image, index) => (
                      <div
                        style={{
                          backgroundImage: `url(${
                            image?.url || fallbackPicture
                          })`,
                        }}
                        onClick={() => navigate(`/breed/${image.id}`)}
                        className={`bg-cover item-${index} relative overflow-hidden rounded-lg border border-blue-200 bg-center bg-no-repeat hover:cursor-pointer`}
                        key={image.id}
                      />
                    ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
