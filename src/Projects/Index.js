import React from 'react'
import Contact from './Components/Contact'
import Facilities from './Components/Facilities'
import Admission from './Components/Admission'
import Navbar from './Components/Navbar'
import {BrowserRouter , Routes, Route} from "react-router-dom"
import Owner from './Components/Owner'
import Rules from './Components/Rules'
import Slider from './Components/Slider'

const Index = () => {
  return (
    <div>
        <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<Slider />}/>
          <Route path='/admission' element={<Admission />}/>
          <Route path='/facilites' element={<Facilities />}/>
          <Route path='/rules' element={<Rules />}/>
          <Route path='/owner' element={<Owner />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>

        </BrowserRouter>
        
        {/* <Slider /> */}
        {/* <Admission /> */}
        {/* <Rules /> */}
        {/* <Facilities /> */}
        {/* <Owner /> */}
        {/* <Contact /> */}
    </div>
  )
}

export default Index