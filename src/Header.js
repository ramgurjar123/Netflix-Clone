import React, { useState } from 'react'
import ram from "./img/WhatsApp Image 2023-04-26 at 12.52.36 PM (1).jpeg"
import raj from "./img/WhatsApp Image 2023-04-26 at 12.52.36 PM.jpeg"
import './header.css'

function Header() {
  let [header, setheader] = useState(false)
  window.onscroll = () => {
    // if(window.screenY>150){
    //   setheader(true)
    // }
    // else setheader(false)
    ///////////////////////
    setheader(window.scrollY > 150 ? true : false)
  }
  return (
    <header className={header ? "dark" : ""}>
      <div className='left'>
        <img src={ram} alt='ram'></img>
      </div>
      <div className='right'>
        <img src={raj} alt='raj'></img>
      </div>
    </header>
  )
}

export default Header