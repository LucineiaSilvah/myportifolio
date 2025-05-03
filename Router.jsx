import {BrowserRouter,Routes, Route } from "react-router-dom"

import Header from "./src/components/Header"
import Home from "./src/pages/Home"
import Resumo from "./src/pages/Resumo"
import Experiencias from "./src/pages/Experiencias"
import Contato from "./src/pages/Contato"
import Footer from "./src/components/Footer/Footer"

export const Router = ()=>{
  return(
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>

        <Route path="/resumo" element={<Resumo/>}/>

        <Route path="/experiencias" element={<Experiencias/>}/>
        
        <Route path="/contato" element={<Contato/>}/>
      </Routes>
<Footer/>
    </BrowserRouter>
  )
}