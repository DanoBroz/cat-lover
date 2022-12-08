import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LayoutContainer } from './containers/LayoutContainer'
import { Breeds, Favorites, Random } from './pages'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 12000,
        refetchOnWindowFocus: false,
        retry: false,
      },
    },
  })

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route element={<LayoutContainer />}>
            <Route
              path='/'
              element={<Random />}
            />
            {['/breed', '/breed/:activeImageId'].map((path) => (
              <Route
                path={path}
                element={<Breeds />}
              />
            ))}
            <Route
              path='favorite'
              element={<Favorites />}
            />
          </Route>
        </Routes>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
