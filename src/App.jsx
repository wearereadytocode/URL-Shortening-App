import React, { useState } from 'react'
import Hero from './Components/Hero/Hero'
import NavBar from './Components/NavBar/NavBar'
import Stat from './Components/Stat/Stat'
import Cta from './Components/Cta/Cta'
import Footer from './Components/Footer/Footer'
import Link from './Components/Link/Link'
import './App.css'

function App() {
  

  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Link />
      <Stat />
      <Cta />
      <Footer />
    </div>
  )
}

export default App
