import Image from 'next/image'
import React from 'react'
import { Add, Remove } from '@material-ui/icons'

const Product = () => {
  return (
    <>
      <div className='single-product-container container'>
          <div className='single-product-wrapper'>
          <div className='row'>
            <div className='col-lg-6'>
            <div className='single-product-image-container'>
              <Image src='https://images.pexels.com/photos/1082528/pexels-photo-1082528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' width={600} height={300}  objectFit='cover'  alt='' />
            </div>
            </div> 
              <div className='col-lg-6 single-product-right-col '>
              <div className='single-product-info-container '>
                <h1 className='single-product-title'>Jeans</h1>
                <p className='single-product-desc'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel id vitae ipsum eum inventore fuga laborum distinctio! Dolore, reiciendis illo. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, vitae ea. Repellendus, ad placeat aspernatur tempora commodi perspiciatis dolorum, quas facere maiores esse veritatis architecto, corporis iusto! Voluptatum, deleniti quisquam exercitationem corrupti fugit veritatis perspiciatis quas excepturi beatae architecto officia.</p>
                <h5 className='single-product-price'> <b className='single-product-ruppee'>₹</b> 2500 </h5>

                <div className='single-product-filter-container'>
                  <div className='single-product-filter'>
                    <span className='single-produt-filter-title'>Colours</span>
                      <div className='single-product-filter-color' style={{width: '20px', height: '20px', backgroundColor: 'red', borderRadius: '50%'  , margin: '0px 5px', cursor: 'pointer' }} ></div>
                      <div className='single-product-filter-color' style={{width: '20px', height: '20px', backgroundColor: 'green', borderRadius: '50%', margin: '0px 5px', cursor: 'pointer' }}  ></div>
                      <div className='single-product-filter-color' style={{width: '20px', height: '20px', backgroundColor: 'blue', borderRadius: '50%', margin: '0px 5px', cursor: 'pointer' }}  ></div>
                      <div className='single-product-filter-color' style={{width: '20px', height: '20px', backgroundColor: 'pink', borderRadius: '50%', margin: '0px 5px', cursor: 'pointer'  }}  ></div>
                  </div>
                  <div className='single-product-filter'>
                  <span className='single-produt-filter-title'>Size</span>
                 <select name="" id="">
                 <option value="" >Size</option>
                        <option value="">XS</option>
                        <option value="">S</option>
                        <option value="">M</option>
                        <option value="">L</option>
                        <option value="">XL</option>
                 </select>
                  </div>
                </div>
                  <div className='single-product-add-container'>
                    <div className='single-product-amount-container'>
                     <Add/>
                      <span className='single-product-amount-qty'>1</span>
                      <Remove/>
                    </div>
                      <button className='single-product-add-btn'>Add To Cart</button>
                  </div>
              </div>
              </div>

          </div>
           
            
          </div>
      </div>
    </>
  )
}

export default Product