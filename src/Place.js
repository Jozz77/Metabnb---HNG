import React from 'react'
import { Link } from 'react-router-dom';
import './place.css';
import Inspiration_star from './Assets/inspiration-star.svg'
import Place_1 from './Assets/place-1.png'
import Place_2 from './Assets/place-2.png'
import Place_3 from './Assets/place-3.png'
import Place_4 from './Assets/place-4.png'
import Place_5 from './Assets/place-5.png'
import Place_6 from './Assets/place-6.png'
import Place_7 from './Assets/place-7.png'
import Place_8 from './Assets/place-8.png'
import Place_9 from './Assets/place-9.png'
import Place_10 from './Assets/place-10.png'
import Place_11 from './Assets/place-11.png'
import Place_12 from './Assets/place-12.png'
import Place_13 from './Assets/place-13.png'
import Place_14 from './Assets/place-14.png'
import Place_15 from './Assets/place-15.png'
import Place_16 from './Assets/place-16.png'
import Location_icon from './Assets/location-icon.svg'


export default function Place() {
  return (
    <body className='place-body'>
      <section className='place-section-1'>
        <div className='place-name'>
          <Link to='/place' className='places'>Resturant</Link>
          <Link to='/place' className='places'>Cottage</Link>
          <Link to='/place' className='places'>Castle</Link>
          <Link to='/place' className='places'>fantast city</Link>
          <Link to='/place' className='places'>beach</Link>
          <Link to='/place' className='places'>Carbins</Link>
          <Link to='/place' className='places'>Off-grid</Link>
          <Link to='/place' className='places'>Farm</Link>
        </div>
        
        <div className='location-input'>
          <input type='text' placeholder='Location' />
          <img src={Location_icon}  alt="Location-Logo"/>
        </div>
      </section>
      
      <section className='place-section-1-mobile'>
        <select>
          <option className='places-mobile'>Resturant</option>
          <option className='places-mobile'>Cottage</option>
          <option className='places-mobile'>Castle</option>
          <option className='places-mobile'>fantast city</option>
          <option className='places-mobile'>beach</option>
          <option className='places-mobile'>Carbins</option>
          <option className='places-mobile'>Off-grid</option>
          <option className='places-mobile'>Farm</option>
        </select>
        <div className='location-input'>
          <input type='text' placeholder='Location' />
          <img src={Location_icon}  alt="Location-Logo"/>
        </div>
      </section>

      <section className='place-inspiration'>
          <div className='inspiration-content'>
            <img src={Place_1} className='inspiration-pic' alt="Inspiration-pic"/> 
            <div className='desert'>
              <p className='p-1'>Desert king</p>
              <p>1MBT per night</p>
            </div>
            <div className='km'>
              <p>2345km away</p>
              <p>available for 2weeks stay</p>
            </div>
            <div className='inspiration-rating'>
              <img src={Inspiration_star} alt="Rating-Logo"/>
              <img src={Inspiration_star} alt="Rating-Logo"/>
              <img src={Inspiration_star} alt="Rating-Logo"/>
              <img src={Inspiration_star} alt="Rating-Logo"/>
              <img src={Inspiration_star} alt="Rating-Logo"/>
            </div>
          </div>

          <div className='inspiration-content'>
            <img src={Place_2} className='inspiration-pic' alt="Logo"/> 
            <div className='desert'>
              <p className='p-1'>Desert king</p>
              <p>1MBT per night</p>
            </div>
            <div className='km'>
              <p>2345km away</p>
              <p>available for 2weeks stay</p>
            </div>
            <div className='inspiration-rating'>
              <img src={Inspiration_star} alt="Rating-Logo"/>
              <img src={Inspiration_star} alt="Rating-Logo"/>
              <img src={Inspiration_star} alt="Rating-Logo"/>
              <img src={Inspiration_star} alt="Rating-Logo"/>
              <img src={Inspiration_star} alt="Rating-Logo"/>
            </div>
          </div>

          <div className='inspiration-content'>
            <img src={Place_3} className='inspiration-pic' alt="Inspiration-pic"/> 
            <div className='desert'>
              <p className='p-1'>Desert king</p>
              <p>1MBT per night</p>
            </div>
            <div className='km'>
              <p>2345km away</p>
              <p>available for 2weeks stay</p>
            </div>
            <div className='inspiration-rating'>
              <img src={Inspiration_star} alt="Rating-Logo"/>
              <img src={Inspiration_star} alt="Rating-Logo"/>
              <img src={Inspiration_star} alt="Rating-Logo"/>
              <img src={Inspiration_star} alt="Rating-Logo"/>
              <img src={Inspiration_star} alt="Rating-Logo"/>
            </div>
          </div>

          <div className='inspiration-content'>
            <img src={Place_4} className='inspiration-pic' alt="Inspiration-pic"/> 
            <div className='desert'>
              <p className='p-1'>Desert king</p>
              <p>1MBT per night</p>
            </div>
            <div className='km'>
              <p>2345km away</p>
              <p>available for 2weeks stay</p>
            </div>
            <div className='inspiration-rating'>
              <img src={Inspiration_star} alt="Rating-Logo"/>
              <img src={Inspiration_star} alt="Rating-Logo"/>
              <img src={Inspiration_star} alt="Rating-Logo"/>
              <img src={Inspiration_star} alt="Rating-Logo"/>
              <img src={Inspiration_star} alt="Rating-Logo"/>
            </div>
          </div>

          <div className='inspiration-content'>
            <img src={Place_5} className='inspiration-pic' alt="Inspiration-pic"/> 
            <div className='desert'>
              <p className='p-1'>Desert king</p>
              <p>1MBT per night</p>
            </div>
            <div className='km'>
              <p>2345km away</p>
              <p>available for 2weeks stay</p>
            </div>
            <div className='inspiration-rating'>
              <img src={Inspiration_star} alt="Rating-Logo"/>
              <img src={Inspiration_star} alt="Rating-Logo"/>
              <img src={Inspiration_star} alt="Rating-Logo"/>
              <img src={Inspiration_star} alt="Rating-Logo"/>
              <img src={Inspiration_star} alt="Rating-Logo"/>
            </div>
          </div>

          <div className='inspiration-content'>
            <img src={Place_6} className='inspiration-pic' alt="Inspiration-pic"/> 
            <div className='desert'>
              <p className='p-1'>Desert king</p>
              <p>1MBT per night</p>
            </div>
            <div className='km'>
              <p>2345km away</p>
              <p>available for 2weeks stay</p>
            </div>
            <div className='inspiration-rating'>
              <img src={Inspiration_star} alt="Rating-Logo"/>
              <img src={Inspiration_star} alt="Rating-Logo"/>
              <img src={Inspiration_star} alt="Rating-Logo"/>
              <img src={Inspiration_star} alt="Rating-Logo"/>
              <img src={Inspiration_star} alt="Logo"/>
            </div>
          </div>

          <div className='inspiration-content'>
            <img src={Place_7} className='inspiration-pic' alt="Inspiration-pic"/> 
            <div className='desert'>
              <p className='p-1'>Desert king</p>
              <p>1MBT per night</p>
            </div>
            <div className='km'>
              <p>2345km away</p>
              <p>available for 2weeks stay</p>
            </div>
            <div className='inspiration-rating'>
              <img src={Inspiration_star} alt="Rating-Logo"/>
              <img src={Inspiration_star} alt="Rating-Logo"/>
              <img src={Inspiration_star} alt="Rating-Logo"/>
              <img src={Inspiration_star} alt="Rating-Logo"/>
              <img src={Inspiration_star} alt="Rating-Logo"/>
            </div>
          </div>

          <div className='inspiration-content'>
            <img src={Place_8} className='inspiration-pic' alt="Inspiration-pic"/> 
            <div className='desert'>
              <p className='p-1'>Desert king</p>
              <p>1MBT per night</p>
            </div>
            <div className='km'>
              <p>2345km away</p>
              <p>available for 2weeks stay</p>
            </div>
            <div className='inspiration-rating'>
              <img src={Inspiration_star} alt="Rating-Logo"/>
              <img src={Inspiration_star} alt="Rating-Logo"/>
              <img src={Inspiration_star} alt="Rating-Logo"/>
              <img src={Inspiration_star} alt="Rating-Logo"/>
              <img src={Inspiration_star} alt="Rating-Logo"/>
            </div>
          </div>

          <div className='inspiration-content'>
            <img src={Place_9} className='inspiration-pic' alt="Inspiration-pic"/> 
            <div className='desert'>
              <p className='p-1'>Desert king</p>
              <p>1MBT per night</p>
            </div>
            <div className='km'>
              <p>2345km away</p>
              <p>available for 2weeks stay</p>
            </div>
            <div className='inspiration-rating'>
              <img src={Inspiration_star} alt="Rating-Logo"/>
              <img src={Inspiration_star} alt="Rating-Logo"/>
              <img src={Inspiration_star} alt="Rating-Logo"/>
              <img src={Inspiration_star} alt="Rating-Logo"/>
              <img src={Inspiration_star} alt="Rating-Logo"/>
            </div>
          </div>

          <div className='inspiration-content'>
            <img src={Place_10} className='inspiration-pic' alt="Inspiration-pic"/> 
            <div className='desert'>
              <p className='p-1'>Desert king</p>
              <p>1MBT per night</p>
            </div>
            <div className='km'>
              <p>2345km away</p>
              <p>available for 2weeks stay</p>
            </div>
            <div className='inspiration-rating'>
              <img src={Inspiration_star} alt="Rating-Logo"/>
              <img src={Inspiration_star} alt="Rating-Logo"/>
              <img src={Inspiration_star} alt="Rating-Logo"/>
              <img src={Inspiration_star} alt="Rating-Logo"/>
              <img src={Inspiration_star} alt="Rating-Logo"/>
            </div>
          </div>

          <div className='inspiration-content'>
            <img src={Place_11} className='inspiration-pic' alt="Inspiration-pic"/> 
            <div className='desert'>
              <p className='p-1'>Desert king</p>
              <p>1MBT per night</p>
            </div>
            <div className='km'>
              <p>2345km away</p>
              <p>available for 2weeks stay</p>
            </div>
            <div className='inspiration-rating'>
              <img src={Inspiration_star} alt="Rating-Logo"/>
              <img src={Inspiration_star} alt="Rating-Logo"/>
              <img src={Inspiration_star} alt="Rating-Logo"/>
              <img src={Inspiration_star} alt="Rating-Logo"/>
              <img src={Inspiration_star} alt="Rating-Logo"/>
            </div>
          </div>

          <div className='inspiration-content'>
            <img src={Place_12} className='inspiration-pic' alt="Inspiration-pic"/> 
            <div className='desert'>
              <p className='p-1'>Desert king</p>
              <p>1MBT per night</p>
            </div>
            <div className='km'>
              <p>2345km away</p>
              <p>available for 2weeks stay</p>
            </div>
            <div className='inspiration-rating'>
              <img src={Inspiration_star} alt="Rating-Logo"/>
              <img src={Inspiration_star} alt="Rating-Logo"/>
              <img src={Inspiration_star} alt="Rating-Logo"/>
              <img src={Inspiration_star} alt="Rating-Logo"/>
              <img src={Inspiration_star} alt="Rating-Logo"/>
            </div>
          </div>

          <div className='inspiration-content'>
            <img src={Place_13} className='inspiration-pic' alt="Inspiration-pic"/> 
            <div className='desert'>
              <p className='p-1'>Desert king</p>
              <p>1MBT per night</p>
            </div>
            <div className='km'>
              <p>2345km away</p>
              <p>available for 2weeks stay</p>
            </div>
            <div className='inspiration-rating'>
              <img src={Inspiration_star} alt="Rating-Logo"/>
              <img src={Inspiration_star} alt="Rating-Logo"/>
              <img src={Inspiration_star} alt="Rating-Logo"/>
              <img src={Inspiration_star} alt="Rating-Logo"/>
              <img src={Inspiration_star} alt="Rating-Logo"/>
            </div>
          </div>

          <div className='inspiration-content'>
            <img src={Place_14} className='inspiration-pic' alt="Inspiration-pic"/> 
            <div className='desert'>
              <p className='p-1'>Desert king</p>
              <p>1MBT per night</p>
            </div>
            <div className='km'>
              <p>2345km away</p>
              <p>available for 2weeks stay</p>
            </div>
            <div className='inspiration-rating'>
              <img src={Inspiration_star} alt="Rating-Logo"/>
              <img src={Inspiration_star} alt="Rating-Logo"/>
              <img src={Inspiration_star} alt="Rating-Logo"/>
              <img src={Inspiration_star} alt="Rating-Logo"/>
              <img src={Inspiration_star} alt="Rating-Logo"/>
            </div>
          </div>

          <div className='inspiration-content'>
            <img src={Place_15} className='inspiration-pic' alt="Inspiration-pic"/> 
            <div className='desert'>
              <p className='p-1'>Desert king</p>
              <p>1MBT per night</p>
            </div>
            <div className='km'>
              <p>2345km away</p>
              <p>available for 2weeks stay</p>
            </div>
            <div className='inspiration-rating'>
              <img src={Inspiration_star} alt="Rating-Logo"/>
              <img src={Inspiration_star} alt="Rating-Logo"/>
              <img src={Inspiration_star} alt="Rating-Logo"/>
              <img src={Inspiration_star} alt="Rating-Logo"/>
              <img src={Inspiration_star} alt="Rating-Logo"/>
            </div>
          </div>

          <div className='inspiration-content'>
            <img src={Place_16} className='inspiration-pic' alt="Inspiration-pic"/> 
            <div className='desert'>
              <p className='p-1'>Desert king</p>
              <p>1MBT per night</p>
            </div>
            <div className='km'>
              <p>2345km away</p>
              <p>available for 2weeks stay</p>
            </div>
            <div className='inspiration-rating'>
              <img src={Inspiration_star} alt="Rating-Logo"/>
              <img src={Inspiration_star} alt="Rating-Logo"/>
              <img src={Inspiration_star} alt="Rating-Logo"/>
              <img src={Inspiration_star} alt="Rating-Logo"/>
              <img src={Inspiration_star} alt="Rating-Logo"/>
            </div>
          </div>
        </section>
    </body>
  )
}
