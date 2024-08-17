import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import cardImg1 from '../images/women.png'
import '../css/womens.css'
export default function Womens() {
  return (
    <div>
      <Navbar/>

       <div className='d-flex womens-bg '>
        <div className=' card womens-card'>
           <img src={cardImg1} />
           <p>Tropical Kimono</p>
        </div>
        <div className=' card womens-card'>
           <img src={cardImg1} />
           <p>Tropical Kimono</p>
        </div>
       </div>


      <Footer/>
    </div>
  )
}
