import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { deleteFavorite, getFavorites, postFavorite } from '../api/services'

export const useFavorites = () => {
  const queryClient = useQueryClient()
  const { data, isLoading } = useQuery(['favorites'], getFavorites, {
    staleTime: 0,
  })

  const favoriteMutation = useMutation(
    (imageId: string) => postFavorite(imageId),
    {
      onSuccess: () => queryClient.invalidateQueries(['favorites']),
    }
  )

  const deleteFavoriteMutation = useMutation(
    (imageId: number) => deleteFavorite(imageId),
    {
      onSuccess: () => queryClient.invalidateQueries(['favorites']),
    }
  )
  return { data, isLoading, favoriteMutation, deleteFavoriteMutation }
}
