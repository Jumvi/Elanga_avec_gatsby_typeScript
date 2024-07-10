import { Link } from 'gatsby'
import React from 'react'
import Hero from './Hero';
import logo from '../Assets/images/logoEla.png';
import './Navebar.css'

const Navbar = () => {
  return (
   
        <header>
            <div id='logo'> 
                <Link to='/'><img src={logo} alt='logo' /></Link>
                
            </div>
            <nav>
                <Link className='link' to='/creation-compte'>Projets</Link>
                <Link className='link' to='/creation-compte'>Contribuer</Link>
                <button className='nav-btn1'>Créer un compte</button>
                <button className='nav-btn2'>Connexion</button>
            </nav>
        </header>
    
  )
}

export default Navbar