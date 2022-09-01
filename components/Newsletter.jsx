import React from 'react'
import { Send } from '@material-ui/icons'

const Newsletter = () => {
  return (
   <>
        <div className='newsletter-main-container container'>
            <h1 className='newsletter-title'>Newsletter</h1>
                <div className='newsletter-desc'>Get Timely Update From Favorite Products.</div>
                <div className='newsletter-input-container border'>
                    <input className='newsletter-input-el'  type="email" placeholder='enter your email' />
                <button className='newsletter-email-send--btn'><Send/></button>
                </div>
        </div>
   </>
  )
}

export default Newsletter