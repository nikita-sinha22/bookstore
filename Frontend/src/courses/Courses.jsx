import React from 'react'
import Navbar from '../components/Navbar'
import Course from '../components/Course'
import Footer from '../components/Footer'


function course() {
   return (
      <>
         <Navbar />
         <div className='min-h-screen'>
         <Course />
         </div>
         <Footer />
      </>
   );
}

export default course