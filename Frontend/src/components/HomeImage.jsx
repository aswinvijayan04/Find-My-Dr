import React,{useState} from 'react'
import './homeImage.css'
import Hero from "../hero3.png"
import {Routes,Route,useNavigate} from 'react-router-dom'
import SignIn from './SignIn'
import Contact from './Contact'
import FirstAid from './FirstAid'

function HomeImage() {
  
  const navigate=useNavigate();
  return (
    <div>    
      <div className='hero' id="hero">
        <img id="heropic" src={Hero} alt=""  />
        <div style={{ textAlign: "center" }}>
            <p>We are Here to Find the Best Healthcare Near You!!!</p>
          <div style={{ display: "flex", justifyContent: "center", gap: "25px", marginTop: "40px" }}>
            <button className="btn-one" onClick={()=>navigate('/SignIn')} >Get Started</button>
            <button className="btn-two" onClick={()=>navigate('/FirstAid')}>First Aid</button>
          </div>
        </div>
      </div>         

            <Routes>
            <Route path='/SignIn' element={<SignIn/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='/FirstAid' element={<FirstAid/>}/>
          </Routes>
    </div>
  )
}

export default HomeImage
