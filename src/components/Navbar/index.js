import {Link, useNavigate} from 'react-router-dom'
import './index.css'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import React,{ useState } from 'react'
import {useFormData} from "../../context"


const Navbar =()=>{
  const navigate = useNavigate();
  const auth = JSON.parse(localStorage.getItem('user'));
  const {  sortedData} = useFormData();
  //console.log((auth.username)); 
  
  const onInput=(e)=>{
     console.log(e.target.value)
     sortedData(e.target.value)
  }

  const onLogOut=(e)=>{
    e.preventDefault()
    localStorage.removeItem('user');
    const auth = localStorage.getItem('user');
    if(!auth){
      navigate('/login')
    }
  }
  

    return(
      <>
       <nav className="navbar">
       <h1 className='headingNav'>eventbrite</h1>
       <input className='input' placeholder='search for events' onChange={onInput}/>
        <ul className="smUl">
         <li>Bloogy</li>
         <li>home</li>
         <li>about</li> 
         <li>Contact</li>   
        </ul>
        <ul className="lgUl">
         <li><Link to='/' style={{color: "White", textDecoration: "none"}}>Browse Events</Link></li>
         <li><Link to='/addevent' style={{color: "White", textDecoration: "none"}}>Host an event</Link></li> 
         <li><Link to='/help' style={{color: "White", textDecoration: "none"}}>Help</Link></li>   
        </ul>
        
        <Popup trigger={
          <button className='avtarBtn' >
          <img src='https://png.pngtree.com/png-vector/20190702/ourlarge/pngtree-business-man-avatar-social-responsibility-vector-png-image_1529546.jpg' className='avatar' alt='avatar'/> 
          <p className='email'>{auth.email}</p>
          </button>
        } position="bottom-left center">
        <div className="userUl">
        <ul className="userul">
         <li><img src='https://png.pngtree.com/png-vector/20190702/ourlarge/pngtree-business-man-avatar-social-responsibility-vector-png-image_1529546.jpg' className='avatar' alt='avatar'/></li>
         <li>{auth.username}</li>
         <li>{auth.email}</li> 
         <button className='logOutBtn' onClick={onLogOut}>logOut</button>   
        </ul>
        </div> 
        </Popup>
       </nav>  
      </>
    ) 
  }


export default Navbar