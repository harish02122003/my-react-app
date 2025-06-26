import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/hero/hero'
import Programs from './components/program/program'
import Tittle from './components/Tittle/Tittle'
import About from './components/About/About'
import Gallery from './components/gallery/gallery'
import Test from './components/test/test'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
function App() {
  return (
    <div>
     <Navbar/>
    <Hero/>
    <div className="container">
      <Tittle/>
      <Programs/>
      <About/>
      <Gallery/>
      <Test/>
      <Contact/>
      <Footer/>
      </div>
     
    </div>
  
  )
}

export default App