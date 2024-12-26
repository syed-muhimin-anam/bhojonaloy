import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Router/router.jsx';
import AuthProviders from './context/AuthProviders.jsx';
import ThemeProvider from './context/ThemeProvider.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProviders>
      <ThemeProvider>
      <RouterProvider router={router} />
      </ThemeProvider>
    </AuthProviders>
     
  </StrictMode>,
)
