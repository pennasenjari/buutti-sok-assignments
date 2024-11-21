import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  createBrowserRouter, 
  RouterProvider 
} from 'react-router-dom';
import FrontPage from './pages/Front';
import Contact, { loader as contactLoader } from './pages/Contact'
import ErrorPage from './pages/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <FrontPage />,
    errorElement: <ErrorPage />,
    children: [
    {
      path: '/contact/:id',
      element: <Contact />,
      loader: contactLoader
    },
  ]
  }
])

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
