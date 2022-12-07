import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react'
import { CatBreed, CatImageInfo } from '../types'

interface ContextProps {
  activeCatImage?: CatImageInfo | CatBreed
  setActiveCatImage: Dispatch<SetStateAction<CatImageInfo | undefined>>
}

interface ContextProviderProps {
  children: ReactNode
}

export const CatContext = createContext<ContextProps>({
  activeCatImage: undefined,
  setActiveCatImage: () => {},
})

export const CatContextProvider = ({ children }: ContextProviderProps) => {
  const [activeCatImage, setActiveCatImage] = useState<
    CatImageInfo | undefined
  >()

  return (
    <CatContext.Provider value={{ activeCatImage, setActiveCatImage }}>
      {children}
    </CatContext.Provider>
  )
}
