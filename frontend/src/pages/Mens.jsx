import React from 'react'
import Footer from '../components/Footer'
import { FaShoppingCart } from 'react-icons/fa'
import Navbar from '../components/Navbar'
import cardImg1 from '../images/mens.png'
import ratingImg from '../images/rating.png'
import '../css/womens.css'

export default function Mens() {
  return (
    <div>
    <Navbar/>

     <div className='d-flex womens-bg '>
      <div className=' card womens-card shadow' style={{height:"600px"}}>
         <img src={cardImg1} className='womens-item-img' />
         <p className='card-title fs-3 mt-4'>Tropical Kimono</p>

         <div>
          <img src={ratingImg} className='rating-img'/>
         </div>

         <div className='d-flex p-4 mt-3 ms-3 '>
          <div>
          <button className='btn btn-dark '>
           <FaShoppingCart/> Add to Cart </button>
          </div>

          <div className=''>
          <p className='card-price '>$199</p>
          </div>
         </div>
      </div>

      <div className=' card womens-card shadow'  style={{height:"600px"}}>
         <img src={cardImg1} className='womens-item-img' />
         <p className='card-title fs-3 mt-4'>Tropical Kimono</p>

         <div>
          <img src={ratingImg} className='rating-img'/>
         </div>

         <div className='d-flex p-4 mt-3 ms-3 '>
          <div>
          <button className='btn btn-dark '>
           <FaShoppingCart/> Add to Cart </button>
          </div>

          <div className=''>
          <p className='card-price '>$199</p>
          </div>
         </div>
      </div>

      <div className=' card womens-card shadow'  style={{height:"600px"}}>
         <img src={cardImg1} className='womens-item-img' />
         <p className='card-title fs-3 mt-4'>Tropical Kimono</p>

         <div>
          <img src={ratingImg} className='rating-img'/>
         </div>

         <div className='d-flex p-4 mt-3 ms-3 '>
          <div>
          <button className='btn btn-dark '>
           <FaShoppingCart/> Add to Cart </button>
          </div>

          <div className=''>
          <p className='card-price '>$199</p>
          </div>
         </div>
      </div>

      <div className=' card womens-card shadow'  style={{height:"600px"}}>
         <img src={cardImg1} className='womens-item-img' />
         <p className='card-title fs-3 mt-4'>Tropical Kimono</p>

         <div>
          <img src={ratingImg} className='rating-img'/>
         </div>

         <div className='d-flex p-4 mt-3 ms-3 '>
          <div>
          <button className='btn btn-dark '>
           <FaShoppingCart/> Add to Cart </button>
          </div>

          <div className=''>
          <p className='card-price '>$199</p>
          </div>
         </div>
      </div>

      
      
     </div>


    <Footer/>
  </div>
  )
}
