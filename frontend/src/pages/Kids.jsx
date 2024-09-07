import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import { FaShoppingCart } from 'react-icons/fa'
import cardImg1 from '../images/kids.png'
import ratingImg from '../images/rating.png'
import '../css/womens.css'
import Navbar from '../components/Navbar'
import axios from 'axios'

export default function Kids() {

   const [kids,setKids] = useState([])

   useEffect(()=>{
      getKidsItems()
   },[])

   const getKidsItems = async() =>{
      try {
         const response = await axios.get(`http://localhost:8080/sellers/items/kids`)
         setKids(response.data)
         console.log(response.data)
      } catch (error) {
         console.log(error)
      }
   }
  return (
    <div>
    <Navbar/>

     <div className='d-flex womens-bg '>

      {kids.map((items,index) =>(
          <div key={index} className=' card womens-card shadow'>
          <img src={cardImg1} className='womens-item-img' height={'400px'} />
          <p className='card-title fs-3 mt-4'>{items.name}</p>
 
          <div>
           <img src={ratingImg} className='rating-img'/>
          </div>
 
          <div className='d-flex p-4 mt-3 ms-3 '>
           <div>
           <button className='btn btn-dark '>
            <FaShoppingCart/> Add to Cart </button>
           </div>
 
           <div className=''>
           <p className='card-price '>${items.price}</p>
           </div>
          </div>
       </div>
      ))}

      
      
     </div>


    <Footer/>
  </div>
  )
}
