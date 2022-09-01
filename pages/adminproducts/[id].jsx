import React from 'react' 
import Topbar from '../admincontroller/Topbar';
import Sidebar from '../admincontroller/Sidebar';
import Product from './Product';

const ProductIdList = () => {
  return (
    <>
    <Topbar/>
       <div className='sideContainer'>
           <Sidebar/>
           <Product/>
       </div>
   </>
  )
}

export default ProductIdList