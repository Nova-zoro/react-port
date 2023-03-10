import React from 'react';
import { NavLink } from 'react-router-dom';
import mod from '../src/img/course15.jpg';
import './index.css';



function Common(props) {
  return (
    <>    
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
           <div className="col-10 mx-auto">
           <div className="row">
            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">        
                <h1>{props.name}<target className="brand-name">Gigantic Rebirth</target></h1>                
                <h2 className='my-3'>
                  We are team of talented devlopers
                </h2>
              <div className='mt-3'>
                <NavLink  className="btn-get-started">
                  {props.btnName}
                </NavLink>
              </div>               
            </div>             
            <div className="col-lg-6 order-1 order-lg-2 header-img">
              <img src={mod} className="img-fluid animated" alt='home img'/>
            </div>
            </div>
           </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Common;