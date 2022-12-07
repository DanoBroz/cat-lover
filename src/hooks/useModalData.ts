import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { getBreedImages, getImageBreed } from '../api/services'

export const useModalData = () => {
  const { activeImageId } = useParams()

  const { data: imageInfo, isLoading: imageInfoLoading } = useQuery(
    ['imageBreed', activeImageId],
    () => getImageBreed(activeImageId),
    {
      keepPreviousData: true,
    }
  )

  const { data: moreImageData, isLoading: moreImageDataLoading } = useQuery(
    ['breed', imageInfo?.breeds[0].id],
    () => getBreedImages(imageInfo?.breeds[0].id),
    {
      enabled: !!imageInfo,
    }
  )

  return {
    imageInfo,
    imageInfoLoading,
    moreImageData,
    moreImageDataLoading,
  }
}
