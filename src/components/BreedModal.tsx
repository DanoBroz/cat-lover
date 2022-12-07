import { PortalFunctionParams } from 'react-portal'
import { useNavigate } from 'react-router-dom'
import { ImageGridContainer } from '../containers'
import { useFavorites, useModalData } from '../hooks'
import { BreedDetails } from './BreedDetails'
import { CatImage } from './CatImage'
import { ReactComponent as CrossIcon } from '../assets/icons/cross.svg'

type BreedModalProps = Partial<PortalFunctionParams>

export const BreedModal = (props: BreedModalProps) => {
  const { closePortal } = props

  const { imageInfo, moreImageData, moreImageDataLoading } = useModalData()

  const { favoriteMutation } = useFavorites()

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
        <CrossIcon
          className='absolute top-6 right-6 transition-transform hover:scale-125 hover:cursor-pointer active:scale-95'
          onClick={closePortal}
        />
        <div className='m-5 mx-auto max-w-[688px]'>
          <div className='grid grid-cols-2 gap-4 pb-6'>
            <CatImage
              imageId={imageInfo?.id}
              imageUrl={imageInfo?.url}
              className='h-[336px] w-[336px]'
              onClick={() => favoriteMutation.mutate(imageInfo?.id!)}
            />
            {imageInfo && <BreedDetails imageInfo={imageInfo} />}
          </div>
          <div>
            {moreImageDataLoading ? (
              'Loading other breed images...'
            ) : (
              <>
                <h3 className='pb-2 font-semibold'>More breed images</h3>
                <ImageGridContainer style={{ direction: 'rtl' }}>
                  {moreImageData
                    ?.filter((image) => image.id !== imageInfo?.id)
                    .map((image, index) => (
                      <CatImage
                        imageId={image.id}
                        imageUrl={image?.url}
                        onClick={() => navigate(`/breed/${image.id}`)}
                        className={`item-${index}`}
                        key={image.id}
                      />
                    ))}
                </ImageGridContainer>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
