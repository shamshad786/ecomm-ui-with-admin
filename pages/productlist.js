import React from 'react'
import Products  from '../components/Products'
import Newsletter from '../components/Newsletter'


const Productlist = () => {
  return (
    <>
        <div className='productlist-main-container container'>
            <h1 className='productlist-title'>Dresses</h1>
            <div className='product-list-filter-container container'>
                <div className='product-list-filter'>
                    <span className='product-list-filter-text'>
                        Filter Products: 
                    </span>
                    <select className='productlist-selected-otpions'   name="" id="">
                        <option value="" >Color</option>
                        <option value="">White</option>
                        <option value="">Black</option>
                        <option value="">Green</option>
                        <option value="">Blue</option>
                        <option value="">Yellow</option>
                        <option value="">Pink</option>
                    </select>
                    <select className='productlist-selected-otpions'  name="" id="">
                        <option value="" >Size</option>
                        <option value="">XS</option>
                        <option value="">S</option>
                        <option value="">M</option>
                        <option value="">L</option>
                        <option value="">XL</option>
                    </select>
                </div>
                <div className='product-list-filter'>
                <span className='product-list-filter-text'>
                        Sort Products: 
                    </span>
                    <select className='productlist-selected-otpions' name="" id="">
                        <option defaultValue >Newest</option>
                        <option value="">Low To High (ASC)</option>
                        <option value="">High To Low (DESC)</option>
                    </select>
                </div>
            </div>
            <Products/>
            <Newsletter/>
        </div>
    </>
  )
}

export default Productlist