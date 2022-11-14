// import React, { useEffect } from "react"
import './hamburger.css';
import { Link } from 'react-router-dom';
import React, { useEffect } from "react"
import Hamburger_close from '../Assets/close.svg'

const Hamburger = props => {
    //   if (!props.show) {
    //     return null
    // }
    // const closeOnEscapeKeyDown = (e) => {

    // }
    useEffect(() =>{
    }, [])
  return (
    <section className={`hamburger ${props.show ? 'show' : ''}`} onClick={props.onClose}>
       <div className='hamburger-contents' onClick={e => e.stopPropagation()}>
        <div className='hamburger-close'>
            <img src={Hamburger_close} alt="Logo" onClick={props.onClose} />
        </div>
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