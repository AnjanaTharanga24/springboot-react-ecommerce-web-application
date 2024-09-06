import React from 'react'
import Footer from '../components/Footer'
import { FaShoppingCart } from 'react-icons/fa'
import cardImg1 from '../images/kids.png'
import ratingImg from '../images/rating.png'
import '../css/womens.css'
import Navbar from '../components/Navbar'

export default function Kids() {
  return (
    <div>
    <Navbar/>

     <div className='d-flex womens-bg '>
      <div className=' card womens-card shadow'>
         <img src={cardImg1} className='womens-item-img' height={'400px'} />
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

      <div className=' card womens-card shadow'>
         <img src={cardImg1} className='womens-item-img' height={'400px'} />
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

      <div className=' card womens-card shadow'>
         <img src={cardImg1} className='womens-item-img' height={'400px'} />
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

      <div className=' card womens-card shadow'>
         <img src={cardImg1} className='womens-item-img' height={'400px'}/>
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
