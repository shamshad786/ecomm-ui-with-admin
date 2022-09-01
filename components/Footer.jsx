import React from 'react'
import Image from 'next/image'
import { Facebook, Instagram,Link, Home, ContactPhone, ShoppingBasket, Info,GavelOutlined,PriorityHigh, LocationOn,Call,Mail,BubbleChart } from '@material-ui/icons'

const Footer = () => {
  return (
  <>
    <div className='footer-main-outer-div container-fluid '>
    <div className='footer-main-div-container container'>
    <div className='row'>
      <div className='col-lg-4'>
      <div className='footer-inner-left-div'>
          <Image  src="https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=''  width={100}  height={100} objectFit='cover' />

          <p className='footer-left-desc-el'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit blanditiis similique velit quo tempora commodi facilis fuga ratione asperiores, voluptatibus vitae nam perferendis, nemo, omnis ea Read More...</p>

          <div className='footer-social-container'>
            <div className='footer-social-icon-div'>
              <Facebook/>
            </div>
            <div className='footer-social-icon-div'>
              <Instagram/>
            </div>
          </div>
          </div>
      </div>
      <div className='col-lg-4  footer-mobile-left-link-div'>
      <div className='footer-inner-center-div'>
              <h3 className='footer-center-title'>Links <Link/></h3>
              <ul className='footer-center-lists'>
                <li className='footer-center-listItem'><Home/>  Home</li>
                <li className='footer-center-listItem'><ShoppingBasket/>  Products</li>
                <li className='footer-center-listItem'><ContactPhone/>  Contact</li>
                <li className='footer-center-listItem'><Info/>  About</li>
                <li className='footer-center-listItem'><GavelOutlined/> Term & Condition.</li>
                <li className='footer-center-listItem'><PriorityHigh/> Refund/Cancellation Policy</li>
              </ul>
          </div>
      </div>
      <div className='col-lg-4 footer-mobile-right-moredetail-div'>
      <div className='footer-inner-right-div'>
              <h3 className='footer-right-title'>More Details <BubbleChart/></h3>
            <div className='footer-right-contact-items'>
            <LocationOn/>  New Delhi | India
            </div>
            <div className='footer-right-contact-items'>
           <Call/> +91 9087654321
            </div>
            <div className='footer-right-contact-items'>
             <Mail/> contact@example.com
            </div>
            <div className='footer-right-contact-items'>
             <Image  src='/images/payment.png' width={300} height={26}   alt='' />
            </div>

          </div>
      </div>
    </div>
    </div>
          <div className='footer-bottom-copyright-div  container'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nostrum animi quidem quibusdam saepe ducimus veniam iste aut, facilis quas.</div>
          </div>
    </>
  )
}

export default Footer