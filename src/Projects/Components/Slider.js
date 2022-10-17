import React,{useState, useEffect} from 'react'
import "../Styles/Slider.css";
import {FaHandPointDown,} from "react-icons/fa"
import { MainSlider } from '../Config/Data';
import img from "../Images/hasnain5.jpg";
import img1 from "../Images/hasnain.JPG";
import Cards from './Cards';
import Footer from './Footer';

const data = [ 
    { img : img, name: "Hasnain Bangash" , title: 'Bachelor of Science in Information Technology'},
    { img : img1, name: "Abdul Malik" , title: 'Bachelor of Science in Software Engnieering'},
]

const Slider = () => {
    const [Count , setCount] = useState(0);
    const value = MainSlider[Count];
  
    const ForWard = () =>{
      const next = Count + 1;
      const lent = MainSlider.length;
      if(next === lent){
        setCount(0);
      }    
      else{
        setCount(next);
      }
    }
  
    const BackWard = () =>{
      const back = Count - 1;
      const lent = MainSlider.length;
  
      if(back<0)
      {
        setCount(lent -1)
      }
      else{
        setCount(back);
      }
    }
  
    useEffect(() =>{
     const setting = setTimeout(() =>{ 
        ForWard()
      },2000);
      return () =>clearTimeout(setting)
    },[Count]);

  return (
    <div>
        <div>
        <img src={value.img} className="image__slider" alt='' />
        </div>
        <div className='flex gap-10 m-10'>
        <button onClick={BackWard}></button>
        <button onClick={ForWard}></button>
      </div>

        <div className='main'><br />
            <div className='font-bold ml-8 flex gap-3 text-lg'>Introduction <FaHandPointDown className='animate-bounce mt-2'/></div><br />
            <div className='intro__section'>
            <p className='font-semibold p-5 border-l-4 border-yellow-600 '>Keeping in mind the pathetic situation of education being imparted by the educators, Laurels College of Sciences was established with the aim to revolutionize the education system of district Kurram. At Laurels, we will strive to provide quality education at the door step. Laurels College will be unique amongst its competitors as we will focus on much broader aspects such as personality and psychological development of students. Furthermore, we will provide favorable environment for teaching and learning to take effect. Based on five core values (punctuality, discipline, respect, honesty and commitment) we will try our best to inculcate the same in our students so that they may succeed in their academic and professional careers ahead.</p>
            </div>
            
            <br />
            <div className='vision__head'>Vision <FaHandPointDown className='animate-bounce mt-2'/></div><br />
            <div className='vision__section'>
            <p className='font-semibold p-5 border-l-4 border-yellow-600'>To be the No. 1 choice of every student</p>
            </div>

            <br />
            <div className='core__values font-bold ml-8 flex gap-3 text-lg'>Mission <FaHandPointDown className='animate-bounce mt-2'/></div><br />
            <div className='core__section h-[80px] w-[87%] ml-8  bg-white'>
            <p className='font-semibold p-5 border-l-4 border-yellow-600 '>Inculcating the importance of learning in the minds of students through diligent teaching efforts in a teaching-learning conducive environment</p>
            </div>

            <br />
            <div className='core__values'>Core Values <FaHandPointDown className='animate-bounce mt-2'/></div><br />
            <div className='core__section'>
            <ul className='font-semibold p-5 border-l-4 border-yellow-600 '>
                <li>Punctuality</li>
                <li>Discipline</li>
                <li>Respect</li>
                <li>Honesty</li>
                <li>Commitment</li>
            </ul>
            </div>            

        </div>
        <br />

        <div className='images__section'>
            {data.map((it) =>{
                return <Cards imgSrc={it.img} name={it.name} title={it.title}/>
            })}
        </div>

        <br />
        <br />

        <Footer />
    </div>
  )
}

export default Slider