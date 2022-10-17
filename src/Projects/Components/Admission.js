import React from 'react'
import "../Styles/Admission.css";
//import img from "../Images/victory.png";
import {FaHandPeace, FaEye, FaClinicMedical} from "react-icons/fa";
import Footer from './Footer';

const Admission = () => {
  return (
    <div>
        <div className='admission__process'>
            <h1>Admission Process.</h1>
        </div>
        <br />
        <br />
        <br />

        <div className='admission__eligible'>
            <br />
            <div className='first__div'>
            <FaHandPeace className='victory__img'/>
            <br />
            <h2 className='heading'>Eligibility</h2>
            <ul className='ml-12'>
              <li>Minimum age limit for admission in FA/F.Sc Part-I is 15 years and maximum age limit 19 years.</li>
              <li>The candidate must have passed the SSC Annual Examination in preceding session of the admission year.</li>
              <li>Students with 'E' grade or compartment in matric examination are not eligible for admission.</li>
              <li>Candidates with bad character certificate or convicted in any criminal offence by a court of law are not eligible for admission.</li>
              <li>Admission to Laurels College of Sciences remains the discretion of the Principal.</li>
              <li>The Principal reserves the right to refuse admission to any candidate without assigning any reason.</li>
            </ul>
            </div>

            <br />
            <div className='second__div'>
            <FaEye className='victory__img'/>
            <br />
            <h2 className='heading'>Procedure</h2>
            <p className='ml-10'>Candidates seeking admission in Laurels College can receive the admission forms by visiting the campus; also they can download the admission forms from the college website (website). Print the form and submit the same in the admission office.</p>
            <ul className='ml-12'>
              <li>Minimum age limit for admission in FA/F.Sc Part-I is 15 years and maximum age limit 19 years.</li>
              <li>The candidate must have passed the SSC Annual Examination in preceding session of the admission year.</li>
              <li>Students with 'E' grade or compartment in matric examination are not eligible for admission.</li>
              <li>Candidates with bad character certificate or convicted in any criminal offence by a court of law are not eligible for admission.</li>
              <li>Admission to Laurels College of Sciences remains the discretion of the Principal.</li>
              <li>The Principal reserves the right to refuse admission to any candidate without assigning any reason.</li>
            </ul>
            <p className='ml-4 font-bold text-lg'>Note: Original documents are to be produced at the time of interview.</p>
            </div>

            <br />
            <div className='second__div'>
            <FaClinicMedical className='victory__img'/>
            <br />
            <h2 className='heading'>Submission of Form</h2>
            <ul className='ml-12'>
              <li>Prospectus and Admission Form may be obtained from the admission office of Laurels College of Sciences.</li>
              <li>Application for admission must be submitted on the provided admission form attached with prospectus during Registration. Photocopy of the admission form will not be accepted.</li>
              <li>Application for admission, complete in all respects, is to be submitted in the admission office on or before the notified date during office hours.</li>
              <li>To confirm admission, successful applicants must make all the requisite payments to College, failing which their admission shall be considered cancelled.</li>
              <li>The applicants must ensure that their course-selection is correct. Students will not be allowed to change their subjects after a lapse of two weeks.</li>
              <li>Successful applicants and their parents / legal guardians shall give written undertaking to the college that any breach of discipline by the students would lead to their expulsion from the college without any prior warning or notice which cannot be challenged in any court of law.</li>
            </ul>
            </div>

        </div>
        <br />
        <br />
        <br />

        <Footer />
    </div>
  )
}

export default Admission