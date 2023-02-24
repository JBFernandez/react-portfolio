import React from 'react'
import { Profile } from './Profile/Profile'
import Footer  from './Footer/Footer'
import './home.css'

export const Home = () => {
  return (
    <div className='home-container' >
        <Profile/>
        <Footer />      
    </div>

    )
}
