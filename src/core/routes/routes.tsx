import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from '../../shared/components/Layout'
import FormPage from '../../pages/FormPage/FormPage'
import ResultsPage from '../../pages/ResultsPage/ResultsPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <FormPage />,
      },
      {
        path: '/results',
        element: <ResultsPage />,
      },
    ],
  },
])

const AppRoutes = () => {
  return <RouterProvider router={router} />
}

export default AppRoutes
