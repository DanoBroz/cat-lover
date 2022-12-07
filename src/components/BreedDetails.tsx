import type { CatImageInfo } from '../types'
import { BreedText } from './BreedText'

interface BreedDetailsProps {
  imageInfo: CatImageInfo
}

export const BreedDetails = ({ imageInfo }: BreedDetailsProps) => {
  return (
    <div>
      <h2 className='pb-2 text-xl font-semibold'>
        {imageInfo?.breeds[0].name}
      </h2>
      {imageInfo?.breeds[0].description && (
        <p className='pb-4'>{imageInfo?.breeds[0].description}</p>
      )}
      <BreedText
        labelText='Temperament'
        textContent={imageInfo?.breeds[0].temperament}
      />
      <BreedText
        labelText='Origin'
        textContent={imageInfo?.breeds[0].origin}
      />
      <BreedText
        labelText='Average weight'
        textContent={imageInfo?.breeds[0].weight.metric}
        appendText='kg'
      />
      <BreedText
        labelText='Average life span'
        textContent={imageInfo?.breeds[0].life_span}
        appendText='years'
      />
    </div>
  )
}
