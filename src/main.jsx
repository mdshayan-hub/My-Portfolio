import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';

createRoot(document.getElementById('My-Portfolio')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
