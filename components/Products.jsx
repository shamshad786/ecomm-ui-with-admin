import React from 'react'
import Product from './Product'; 
import {popularProducts} from '../components/data';
import {ShoppingBasket} from '@material-ui/icons'

const Products = () => {
  return (
    <>
        <div className='available-title-heading  container'> 
            <>

            <h3>Available Product</h3>
            <ShoppingBasket className='available-basket' />
            </>

         </div>
        <div className='products-main-container container'>
             
            {
                popularProducts.map(item=>(
                    <Product item={item} key={item.id} />
                ))
            }
        </div>
    </>
  )
}

export default Products