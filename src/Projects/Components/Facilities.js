import React from 'react'
import "../Styles/Facilities.css";
import first from "../Images/first.PNG";
import second from "../Images/second.PNG";
import third from "../Images/third.PNG";
import four from "../Images/four.PNG";
import Footer from "../Components/Footer";

const Facilities = () => {
  return (
    <div>
        <h2 className='facilities__head'>Laurel's Facilities</h2>
        <br />
        <br />
        <div className='main__container'>
            <div className='left__side'>
                <img src={first} className='imgSrc' alt='' />
            </div>
            <div className='right__side'>
                <h2 className='text-center font-bold text-3xl'>Computer Laboratories</h2>
                <p className='tracking-wider p-7 text-lg'>The Computer Laboratories are equipped with the latest computers, printers, multimedia and other presentation equipment for the personal and academic growth of students.</p>
            </div>


            <div className='h-72 w-[500px] pl-7 bg-gray-100'>
                <h2 className='font-bold text-3xl pt-4 hover:text-orange-400'>Medical Cover</h2>
                <p className='font-medium tracking-wide pt-7'>Suitable first aid facility is available for prompt medical cover to students at Laurels College. In case of emergency or serious problem, the students are being taken to the nearby hospital on college transport under the supervision of a staff member.</p>
            </div>
            <div className='left__side'>
                <img src={second}  alt='' />
            </div>

            <div className='left__side'>
                <img src={third}  alt='' />
            </div>
            <div className='right__side'>
                <h2 className='font-bold text-3xl pt-4 pl-4 hover:text-orange-400'>Science Laboratories</h2>
                <p className='font-medium tracking-wide pt-7 pl-5'>Very well-equipped laboratories for Physics, Chemistry, Biology, and Computer Science are available which provide students hands-on practice during their practical lab work.</p>
            </div>
            
            <div className='h-72 w-[500px] pl-7 bg-gray-100'>
                <h2 className='font-bold text-3xl pt-6 hover:text-orange-400'>Tuck Shop</h2>
                <p className='font-medium tracking-wider pt-10 pl-5'>LCS has a tcuk shop for students if they need something they can easily get their required thing from the shop</p>
            </div>
            <div className='left__side'>
                <img src={four}  alt='' />
            </div>

        </div>
        <br />
        <br />
        <br />

        <Footer />
    </div>
  )
}

export default Facilities