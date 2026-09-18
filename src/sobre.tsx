import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppSobre from './AppSobre'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppSobre />
  </StrictMode>,
)
