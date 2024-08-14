import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import CardDetails from './CardDetail/CardDetails'
import Cards from './Cards/Cards'
import Footer from './footer/footer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
     <Routes>
       <Route index element={<Home />}/>
       <Route path='/Cards' element={<Cards />}/>
       <Route path='/products/:id' element={<CardDetails />}/>
     </Routes>
     <Footer/>
    </>
  )
}

export default App
