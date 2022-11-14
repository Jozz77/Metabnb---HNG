// import React, { useEffect } from "react"
import './hamburger.css';
import { Link } from 'react-router-dom';
import Hamburger_close from '../Assets/close.svg'

const Hamburger = props => {
    if (!props.show) {
        return null
    }
  
  return (
    <section className='hamburger'>
       <div className='hamburger-comtents'>
        <img src={Hamburger_close} alt="Logo"/>
        <div className='hamburger-links'>
            <Link to="/" className='ham_links'>Home</Link>
            <Link to="/Place" className='ham_links'>Place to stay</Link>
            <Link to="" className='ham_links'>NFTs</Link>
            <Link to="" className='ham_links'>Community</Link>
        </div>
       </div>
    </section>
  )
}

export default Hamburger