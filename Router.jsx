import {BrowserRouter,Routes, Route } from "react-router-dom"

import Header from "./src/components/Header"
import Home from "./src/pages/Home"
import Resumo from "./src/pages/Resumo"
import Experiencias from "./src/pages/Experiencias"
import Contato from "./src/pages/Contato"
import Footer from "./src/components/Footer/Footer"
import btn from './src/assets/slider_17099873.png'
import { useState, useEffect } from "react";
import './src/global.css'
export const Router = ()=>{
   const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };


  return(
    <div  style={{ background: "var(--bg-color)", color: "var(--text-color)" }}>
 <img onClick={toggleTheme} className="btn" src={btn} />
          

    <BrowserRouter >
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>

        <Route path="/resumo" element={<Resumo/>}/>

        <Route path="/experiencias" element={<Experiencias/>}/>
        
        <Route path="/contato" element={<Contato/>}/>
      </Routes>
<Footer/>
    </BrowserRouter>
    </div>
  )
}