import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import Index from './pages/Index'
import Copyrigth from './pages/copyrigth'
import ErrorPage from './components/ErrorPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        errorElement: <ErrorPage />
      },
      {
        path: '/copyrigth',
        element: <Copyrigth />,
        errorElement: <ErrorPage />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
