import React from 'react' 
import Common from './Common';
import './index.css'
import mod from '../src/img/422970.jpg';

function Home() {
  return (
    <>    
      <Common name="Grow your business with" imgsrc={mod} visit="/contact" btnName="Get Started"/>
    </>
  )
}

export default Home;