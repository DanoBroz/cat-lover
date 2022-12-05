import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { getRandom } from '../api/services'

export const Random = () => {
  useEffect(() => {
    console.log(process.env.REACT_APP_API_KEY)
  }, [process.env.REACT_APP_API_KEY])
  // const randomQuery = useQuery(['random'], getRandom)

  return (
    <section className='grid grid-cols-2 gap-4'>
      <div></div>
    </section>
  )
}
