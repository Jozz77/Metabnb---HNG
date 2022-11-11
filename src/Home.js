import React from 'react'
import './home.css';
import Rent_1 from './Assets/rent-1.png'
import Rent_2 from './Assets/rent-2.png'
import Rent_3 from './Assets/rent-3.png'
import Rent_4 from './Assets/rent-4.png'


export default function Home() {
  return (
    <body className='home-body'>
      <section className='first-section'>
        <div className='Rent'>
          <h1>Rent a Place away from Home in the Metaverse</h1>
          <p>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
          <div>
            <input name='search' type='text' placeholder='Search for location' required />
            <button type='submit'>Search</button>
          </div>
        </div>

        <div>
          <div>
          <img src={Rent_1} alt="Logo"/> 
          <img src={Rent_2} alt="Logo"/> 
          </div>
        </div>
      </section>
    </body>
  )
}
