import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App'
import { Wizard } from './components/Wizard'
import { BeforeYouBeginPage } from './pages/BeforeYouBeginPage'
import { PrivacyPage } from './pages/PrivacyPage'
import { DeletionPage } from './pages/DeletionPage'
import { ValidationPage } from './pages/ValidationPage'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        { index: true, element: <Wizard /> },
        { path: 'before-you-begin', element: <BeforeYouBeginPage /> },
        { path: 'privacy', element: <PrivacyPage /> },
        { path: 'deletion', element: <DeletionPage /> },
        { path: 'validation', element: <ValidationPage /> },
      ],
    },
  ],
  {
    basename: '/sessionreplayvalidator',
  },
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
