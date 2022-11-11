import React, { useState } from 'react'
import './header.css';
import { Link } from 'react-router-dom';
import Modal from './Modal'
import header from '../Assets/header-logo.svg'

export default function Header() {
  const [show, setShow] = useState(false)
    return (
      <section>
      <header>
          <section className='header-1'>
            <Link to="/"><img src={header} alt="Logo"/></Link> 
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
      <Modal onClose={() => setShow(false)} show={show} />
      </section>
    )
  
}
