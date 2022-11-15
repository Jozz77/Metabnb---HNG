import React from 'react'
import './home.css';
import Rent_1 from './Assets/rent-1.png'
import Rent_2 from './Assets/rent-2.png'
import Rent_3 from './Assets/rent-3.png'
import Rent_4 from './Assets/rent-4.png'
import MbToken from './Assets/mbtoken.svg'
import Metamask from './Assets/metamask.svg'
import Metabnb_nfts from './Assets/metabnb-nfts.png'
import OpenSea from './Assets/opensea.svg'
import Inspiration_1 from './Assets/inspiration-1.png'
import Inspiration_2 from './Assets/inspiration-2.png'
import Inspiration_3 from './Assets/inspiration-3.png'
import Inspiration_4 from './Assets/inspiration-4.png'
import Inspiration_5 from './Assets/inspiration-5.png'
import Inspiration_6 from './Assets/inspiration-6.png'
import Inspiration_7 from './Assets/inspiration-7.png'
import Inspiration_8 from './Assets/inspiration-8.png'
import Inspiration_star from './Assets/inspiration-star.svg'



export default function Home() {
  return (
    <body className='home-body'>
      <section className='first-section'>
        <div className='Rent'>
          <h1>Rent a <span>Place</span> away from <span>Home</span> in the <span>Metaverse</span></h1>
          <p>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
          <div className='Rent-search'>
            <form>
            <input name='search' type='text' placeholder='Search for location' required />
            <input type='submit' value='Search' className='search-button' />
            </form>
          </div>
        </div>

        <div className='Rent-pics'>
          <div className='Rent-pics-1'>
            <img src={Rent_1} alt="A beautiful place"/> 
            <img src={Rent_2} alt="A beautiful place"/> 
          </div>
          <div className='Rent-pics-2'>
            <img src={Rent_3} alt="A beautiful place"/> 
            <img src={Rent_4} alt="A beautiful place"/> 
          </div>
        </div>
      </section>

      <section className='second-section'>
        <img src={MbToken} alt="MbToken-Logo"/> 
        <img src={Metamask} alt="Metamask-Logo"/> 
        <img src={OpenSea} alt="OpenSea-Logo"/> 
      </section>

      <section className='third-section'>
        <h2>Inspiration for your next adventure</h2>

        <div className='inspiration'>
          <div className='inspiration-content'>
            <img src={Inspiration_1} className='inspiration-pic' alt="Inspiration-pic"/> 
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
            <img src={Inspiration_2} className='inspiration-pic' alt="Inspiration-pic"/> 
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
            <img src={Inspiration_3} className='inspiration-pic' alt="Inspiration-pic"/> 
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
            <img src={Inspiration_4} className='inspiration-pic' alt="Inspiration-pic"/> 
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
            <img src={Inspiration_5} className='inspiration-pic' alt="Inspiration-pic"/> 
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
            <img src={Inspiration_6} className='inspiration-pic' alt="Inspiration-pic"/> 
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
            <img src={Inspiration_7} className='inspiration-pic' alt="Inspiration-pic"/> 
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
            <img src={Inspiration_8} className='inspiration-pic' alt="Inspiration-pic"/> 
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
        </div>

      </section>
      
      <section className='fourth-section'>
          <div className='nfts-content'>
            <h2>Metabnb NFTs</h2>
            <p>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
            <button>Learn more</button>
          </div>
          <div className='nfts-image'>
          <img src={Metabnb_nfts} alt="Nft_Image"/>
          </div>
      </section>
      
      
    </body>
  )
}
