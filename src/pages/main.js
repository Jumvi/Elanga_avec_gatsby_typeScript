import React from 'react'
import Header from '../components/Header'

const Main = () => {
    const salutation = 'hello, je suis nouveau ici';
  return (
    <div>
        <h1>
            <Header title={salutation}/>
        </h1>
    </div>
  )
}

export default Main