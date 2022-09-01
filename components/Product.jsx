import React from 'react'
import Image from 'next/image'
import {AddShoppingCart, ClassSharp} from '@material-ui/icons'
import Link from 'next/link'

const Product = ({item}) => {


  return (
    <>
    <div className='single-product-main-container'>
          <div className='inner-single-card shadow-sm'>
          <Image className='card-img'  src={item.img} width='500' height='400' objectFit='cover' alt=''   />
          <Link href={`/products/${item.id}`} passHref>
          <div className='card-inner-content'>
            <h4 className='product-heading-title'>{item.title}</h4>
            <p className='card-desc'>{item.desc}</p>
            <div className='price-qty'>
              <h5 className='card-price'>{`₹ ${item.price}`}</h5>
              <p>{`Stock: ${item.stock}`}</p>
            </div>
            <div className='genuine-choice'>Genuine Assured Product</div>
          </div>
          </Link>
            <button className='cart-btn'><AddShoppingCart/>Add</button>
          </div>
    </div>
    </>
  )
}

export default Product