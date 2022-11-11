import React from 'react'
import './footer.css'
import Footer from '../Assets/footer-logo.svg'
import { Link } from 'react-router-dom';
<link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"></link>

export default function footer() {
  return (
    <footer>
        <section className='footer-section-1'>
          <div className='footer-1'>
              <Link to="/"><img src={Footer} alt="Logo"/></Link>
              <div className='footer-icons'>
                <i class="fa fa-facebook" aria-hidden="true"></i>
                <i class="fa fa-facebook" aria-hidden="true"></i>
                <i class="fa fa-twitter" aria-hidden="true"></i>
              </div>
          </div>

          <div className='footer-2'>
            <div className='footer-content'>
                <h4>Community</h4>
                <div className='footer-links-container'>
                    <Link to="" className='footer-links'>NFT</Link>
                    <Link to="" className='footer-links'>Tokens</Link>
                    <Link to="" className='footer-links'>Landlords</Link>
                    <Link to="" className='footer-links'>Discord</Link>
                </div>
            </div>

            <div className='footer-content'>
                <h4>Places</h4>
                <div className='footer-links-container'>
                    <Link to="" className='footer-links'>Castle</Link>
                    <Link to="" className='footer-links'>Farms</Link>
                    <Link to="" className='footer-links'>Beach</Link>
                    <Link to="" className='footer-links'>Learn more</Link>
                </div>
            </div>

            <div className='footer-content'>
                <h4>About us</h4>
                <div className='footer-links-container'>
                    <Link to="" className='footer-links'>Road map</Link>
                    <Link to="" className='footer-links'>Creators </Link>
                    <Link to="" className='footer-links'>Career</Link>
                    <Link to="" className='footer-links'>Contact us</Link>
                </div>
            </div>
          </div>
        </section>
        <section className='footer-section-2'>
            <p>&copy; 2022 Metabnb</p>
        </section>
      </footer>
  )
}
