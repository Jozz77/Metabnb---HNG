import React, { useState } from 'react'
import './header.css';
import { Link } from 'react-router-dom';
import Modal from './Modal'
import header_icon from '../Assets/header-logo.svg'
import Hamburger_open from '../Assets/hamburger.svg'
import Hamburger from './Hamburger';

export default function Header() {
  const [show, setShow] = useState(false)
    return (
      <section>
      <header>
          <section className='header-1'>
            <Link to="/"><img src={header_icon} alt="Logo"/></Link> 
          </section> 

          <section className='header-2'>
          <Link to="/" className='links'>Home</Link>
          <Link to="/Place" className='links'>Place to stay</Link>
          <Link to="" className='links'>NFTs</Link>
          <Link to="" className='links'>Community</Link>
          </section> 

          <section className='header-3'>
            <button onClick={() => setShow(true)}>Connect wallet</button>
          </section>
      </header>

      <div className='header-mobile'>
        <Link to="/"><img src={header_icon} className='header-mobile-logo' alt="Logo"/></Link>
        <button onClick={() => setShow(true)}>Connect wallet</button> 
        <div className='hamburger-icon'>
          <img src={Hamburger_open} alt="Logo"/>
        </div>
      </div>

      <Hamburger />

      <Modal onClose={() => setShow(false)} show={show} />
      </section>
    )
  
}
