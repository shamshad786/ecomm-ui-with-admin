import React from 'react'
import Image from 'next/image'

import { Add, Remove,DeleteOutline } from '@material-ui/icons'

const CartComp = () => {
  return (  
    <>
       <div className='cart-main-div-container'>
            <div className='cart-wrapper-div container'>
                <h1 className='cart-title-el'>Cart Items</h1>
                <div className='cart-top-div'>
                    <div className='row'>
                        <div className='col-lg-8  cart-to-left-all-content-div'>
                            <div className='cart-top-left-container-div'>
                               <div className='cart-inner-left-div'>
                                   <button>Continue Shopping</button>
                                   <div className='cart-total-wishlist-div'>
                                   <p>Number Total Items(2)</p>
                                   <p>Your Wish List(0)</p>
                                   </div>
                               </div>

        <div className='cart-top-middle-left-items-div shadow-sm'>
                <div className='cart-top-middle-inner-left-item-div'>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <div className='cart-product-item-div'>
                                <Image src={'https://images.pexels.com/photos/884979/pexels-photo-884979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} layout='fill'  alt=''  objectFit='cover' />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='cart-div-product-info'>
                                <p> <b>Product:</b> White Women Shirt  </p>
                                <p><b>ID:</b> 9654122872331</p>
                                <div id='cart-product-info-color'></div>
                                <p><b>Size:</b> 37.6</p>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='cart-product-qty-price-div '>
                                    <div className='cart-qty-add-dec'>
                                    <Add/>
                                <span className='single-product-amount-qty'>1</span>
                                <Remove/> 
                                <DeleteOutline id='cart-product-delete' />
                                    </div>

                                    <div className='cart-product-price-div'>
                                            <p><b>₹ </b> 1980</p>   
                                    </div>
                            </div>
                            <hr/>
                        </div>
                    </div>
                </div>
                <div className='cart-top-middle-inner-left-item-div'>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <div className='cart-product-item-div'>
                                <Image src={'https://images.pexels.com/photos/884979/pexels-photo-884979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} layout='fill'  alt=''  objectFit='cover' />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='cart-div-product-info'>
                                <p> <b>Product:</b> White Women Shirt  </p>
                                <p><b>ID:</b> 9654122872331</p>
                                <div id='cart-product-info-color'></div>
                                <p><b>Size:</b> 37.6</p>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='cart-product-qty-price-div '>
                                    <div className='cart-qty-add-dec'>
                                    <Add/>
                                <span className='single-product-amount-qty'>1</span>
                                <Remove/> 
                                <DeleteOutline id='cart-product-delete' />
                                    </div>

                                    <div className='cart-product-price-div'>
                                            <p><b>₹ </b> 1980</p>   
                                    </div>
                            </div>
                            <hr/>
                        </div>
                    </div>
                </div>
                <div className='cart-top-middle-inner-left-item-div'>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <div className='cart-product-item-div'>
                                <Image src={'https://images.pexels.com/photos/884979/pexels-photo-884979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} layout='fill'  alt=''  objectFit='cover' />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='cart-div-product-info'>
                                <p> <b>Product:</b> White Women Shirt  </p>
                                <p><b>ID:</b> 9654122872331</p>
                                <div id='cart-product-info-color'></div>
                                <p><b>Size:</b> 37.6</p>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='cart-product-qty-price-div '>
                                    <div className='cart-qty-add-dec'>
                                    <Add/>
                                <span className='single-product-amount-qty'>1</span>
                                <Remove/> 
                                <DeleteOutline id='cart-product-delete' />
                                    </div>
                                    <div className='cart-product-price-div'>
                                            <p><b>₹ </b> 1980</p>   
                                    </div>
                            </div>
                            <hr/>
                        </div>
                    </div>
                </div>
        </div>
        </div>
</div>
<div className='col-lg-4'>
    <div className='cart-top-right-container-div shadow-sm'>
        <div className='checkout-right-inner-div'>
            <h1 id='checkout-heading' >Checkout Details</h1>
            <div className='checkout-subdetail-and-price'>
                <p>Subtotal</p>
                <p> ₹ 1980</p>  
            </div>
            <div className='checkout-subdetail-and-price'>
                <p>Estimate Shipping</p>
                <p> ₹ 50</p>  
            </div>
            <div className='checkout-subdetail-and-price'>
                <p>Discount</p>
                <p> ₹ -90</p>  
            </div>
            <div className='checkout-subdetail-and-price'>
                <h3>Total</h3>
                <h3> ₹ 1940</h3>
                
            </div>
            <div className='cart-right-bottom-payment-div'>
            <select className='payment-cart-now-btn'   name="" id="">
                <option value="">Select Payment Mode</option>
                <option value="">C.O.D</option>
                <option value="">Pay Now</option>
            </select>

            <button id='order-now-btn' >Order Now</button>
            </div>


            </div>
        </div>
    </div>
</div>
</div>
</div>
</div>
    </>
  )
}

export default CartComp