import React from 'react';
import heroImg from '../Assets/images/business.png';
import './Hero.css'

const Hero = () => {
  return (
    <div>
        <main id='main'>
            <div className='div-h1'>
                <h1>Ensemble, construisons
                    <span className='span'>
                      un avenir plus vert pour 
                      l’agriculture et l’agroalimentaire
                    </span>
                    </h1>
                <p>
                  Grace à ELANGA connctez-vous au developpement de la RDC , investir où
                  creer un projet dans le domaine de l’agriculture et l’agroalimentaire et avoir 
                  l’assurence de rencompter des personnes ayant la même passion que vous 
                  et  prêt à investir .nvestir en toute sécurité, fiabilité et voir  ses avantages êtr
                  e rendu apre un achat es parts, un investissement où un don. agriculture ass
                  ure la vraie  ndépendance  d’une nation
                </p>
            </div>
            <div className='img'>
                <img src={heroImg} alt='hero image'/>
            </div>
        </main>
    </div>
  )
}

export default Hero