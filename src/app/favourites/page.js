import React from 'react'
import Favourite from './Favourite'
import Header from '../components/Header'
import Footer from '../components/Footer/Footer'

const page = () => {
  return (
    <div>
        <Header/>
        <Favourite/>
        <Footer/>
    </div>
  )
}

export default page