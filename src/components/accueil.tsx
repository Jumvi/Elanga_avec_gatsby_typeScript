import React from 'react'
import Header from './header'
import Navbar from './Navbar'
import Hero from './Hero'
import ProjetCard from './projetCardList'

const Accueil = () => {
  return (
    <div>
      <Navbar/>
      <div>
        <Hero/>
      </div>
      <div>
        <ProjetCard/>
      </div>
    </div>
  )
}

export default Accueil