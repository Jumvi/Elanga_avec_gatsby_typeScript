import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { Link } from 'gatsby'

const Test = () => {
  return (
    <div>
        <Layout>
            <Seo title="page test"/>
            <h1>Hi je suis nouveau ici</h1>
            <p>Soyons fort</p>
            <Link to='/'> pages d'accueil</Link>
        </Layout>
    </div>
  )
}

export default Test