import React, { useState } from 'react'
import './NavBar.css'

function NavBar() {
  const [isScrolled,setIsScrolled]=useState(false)
  window.onscroll=()=>{
    setIsScrolled(window.pageYOffset ==0?false:true)
    return () =>(window.onscroll=null)
  }
  console.log(isScrolled);
  return (
    <div className={isScrolled? "blackNavBar":"navbar"}>
      <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Somthing Went Wrong!" />
      <div className='leftNav'>
        <span className='leftElements'>Homepage</span>
        <span className='leftElements'>Series</span>
        <span className='leftElements'>Movies</span>
        <span className='leftElements'>New and Popular</span>
        <span className='leftElements'>My list</span>
      </div>
      <div className='rightNav'>
        <i className="fa-solid fa-magnifying-glass rightElements"></i>
        <span className='rightElements'>KID</span>
        <i class="fa-solid fa-bell rightElements"></i>
        <i class="fa-solid fa-user-plus rightElements"></i>
        <i class="fa-solid fa-circle-info rightElements"></i>
      </div>

    </div>
  )
}

export default NavBar
