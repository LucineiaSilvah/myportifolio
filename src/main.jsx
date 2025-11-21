import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();
import { Router } from '../Router.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div style={{ overflow: 'hidden'}} >

    <Router />
    </div>
  </StrictMode>,
)
