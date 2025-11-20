import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
import { Router } from '../Router.jsx'
import bg from '../public/bg-pixel.jpg'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div  style={{background:`url(${bg})no-repeat center /cover`}}>

    <Router />
    </div>
  </StrictMode>,
)
