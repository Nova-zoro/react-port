import React from 'react'
import Common from './Common'; 
import mod from '../src/img/course15.jpg';


function About() {
  return (
    <>    
    <Common name="Welcome to About Page" imgsrc={mod} visit="/contact" btnName="Contact Now"/>
   </>
  )
}

export default About;