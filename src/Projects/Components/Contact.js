import React from 'react'
import "../Styles/Contact.css";
import {FaEnvelope, FaChrome ,FaAddressBook, FaPhone} from "react-icons/fa";
import Footer from "../Components/Footer";

const Contact = () => {
  return (
    <div>
        <h2 className='contact__heading'>LCS Contact information</h2>
        <div className='main__contact'>
            <h2 className='inside__head'>Contact Details</h2>
            
            <div className='contact__message'>
                <FaEnvelope className='mt-1'/>
                <p>laurelscollege@gmail.com</p>
            </div>

            <div className='contact__message'>
                <FaChrome className='mt-1'/>
                <p>www.LCSKurram.com</p>
            </div>
    
            <div className='contact__message'>
                <FaAddressBook className='mt-1'/>
                <p>tehsil lower Kurram Sadda District Kurram KPK</p>
            </div>
    
            <div className='contact__message'>
                <FaPhone className='mt-1'/>
                <p>03000571215</p>
            </div>
    
        </div>
        <br />
        <br />
        <br />

        <Footer />
    </div>
  )
}

export default Contact