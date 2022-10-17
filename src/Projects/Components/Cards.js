import React from 'react'
import {FaFacebook, FaFacebookMessenger, FaWhatsapp} from "react-icons/fa";
import "../Styles/Cards.css";

const Cards = ({imgSrc, name , title}) => {
  return (
    <div className='owner__card'>
        <img src={imgSrc} className="h-[300px] w-[350px]" alt='' />
        <div className='bg-gray-300 h-[93px] w-full'>
        <h2 className='text-center text-2xl text-bold'>{name}</h2>
        <p>{title}</p>

        <div className='owner__icons'>
          <FaFacebook />
          <FaFacebookMessenger />
          <FaWhatsapp />
        </div>
  
        </div>
    </div>
  )
}

export default Cards