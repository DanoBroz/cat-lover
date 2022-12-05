import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LayoutContainer } from './containers/LayoutContainer'
import { Random } from './pages'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

function App() {
  const client = new QueryClient()

  return (
    <QueryClientProvider client={client}>
      <Router>
        <Routes>
          <Route element={<LayoutContainer />}>
            <Route
              path='/'
              element={<Random />}
            />
          </Route>
        </Routes>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
