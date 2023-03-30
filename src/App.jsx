import React from 'react'

import Home from './components/Home'
import Header from './components/Header'
import Nav from './components/Nav'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'
import Skills from './components/Skills'


export function App() {
  return(
    <div className="bg-black bg-no-repeat bg-cover overflow-hidden">
      <Header />
      <Home />
      <Nav />
      <About />
      <Skills />
      <Work />
      <Contact />
      <div className="h-[4000px]"></div>
    </div>
  )
}


