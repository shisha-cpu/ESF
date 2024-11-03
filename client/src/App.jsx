import { useState } from 'react'
import Header from './Components/Header'
import { Home } from './Pages/Home'
import Footer from './Components/Footer'
import { Routes , Route } from 'react-router-dom'
import { Product } from './Pages/Product'
import { About } from './Pages/About'
import { Contact } from './Pages/Contact'

function App() {


  return (
    <>
    <Header />

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<Product />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    <Footer />

    </>
  )
}

export default App
