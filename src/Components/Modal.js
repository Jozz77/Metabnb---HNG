import React, { useEffect } from "react"
import './modal.css';
import Modal_hide from '../Assets/x.png'
import metamask_modal from '../Assets/modal-metamask.png'
import next from '../Assets/next-icon.svg'
import wallet_connect from '../Assets/modal-walletconnect.png' 


const Modal = props => {
    // if (!props.show) {
    //     return null
    // }
    // const closeOnEscapeKeyDown = (e) => {

    // }
    useEffect(() =>{
      }, [])

  return (
  <section className={`modal-body ${props.show ? 'show' : ''}`} onClick={props.onClose}>
      <div className='modal-content'onClick={e => e.stopPropagation()}>
      <div className='modal'>

        <div className='modal-1'>
          <h5>Connect Wallet</h5>
          <div className='modal-1-image'>
          <img src={Modal_hide} onClick={props.onClose} alt="Logo"/> 
          </div>
        </div>

        <hr></hr>

        <div className='modal-2'>
          <p>Choose your preferred wallet:</p>
        </div>

        <div className='modal-3'>
          <div className='modal-3-content'>
              <div className='content-flex'>
                <div className='meta-image'><img src={metamask_modal} alt="Logo"/> </div>
                <p>Metamask</p>
              </div>
              <div className='modal-next'>
                <img src={next} alt="Logo"/> 
              </div>
          </div>

          <div className='modal-3-content mod-new'>
              <div className='content-flex'>
                <div className='meta-image'><img src={wallet_connect} alt="Logo"/> </div>
                <p>WalletConnect</p>
              </div>
              <div className='modal-next'>
                <img src={next} alt="Logo"/> 
              </div>
          </div>
           
        </div>

      </div>
      </div>
    </section>
  )
}



export default Modal