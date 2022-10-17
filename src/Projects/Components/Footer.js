import React from 'react'
import "../Styles/Footer.css";
import { FaFacebook, FaFacebookMessenger, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
        <div className="Footer">
            <div className='left h-[200px] w-[350px]'>
                <h2>About Us</h2>
                <p className='text-white'>Laurels College of Sciences was Established in 2022 in District Kurram</p><br />
                <div className='flex flex-wrap text-5xl'>
                <a href='https://www.facebook.com/hasnain.hasnainbangash'><FaFacebook className='hover:text-white'/></a> &nbsp;
                <FaFacebookMessenger className='hover:text-white'/>&nbsp;
                <FaWhatsapp className='hover:text-white'/>&nbsp;
                </div>
            </div>

            <div className='right h-[200px] w-[350px]'>
                <h2>Connect Details</h2>
                <p>laurelscollege@gmail.com</p>
                <p>https://laurelscollege.netlify.app/</p>
                <p>tehsil lower Kurram Sadda District Kurram KPK</p>
                <p>03000571215</p>
            </div>
        </div>
        <div className='footer__last'>
            <p className='text-slate-400 text-center justify-center'>All Rights Reserved. © 2022 Laurels College of Sciences District Kurram (LCS) Design By : Impact Software Company</p>
        </div>        
    </div>
  )
}

export default Footer