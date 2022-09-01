import React from 'react'
import Topbar from '../admincontroller/Topbar'
import Sidebar from '../admincontroller/Sidebar'
import ProductList from './ProductList'

const index = () => {
  return (
    <>
    <Topbar/>
       <div className='sideContainer'>
           <Sidebar/>
            <ProductList/>
       </div>
   </>
  )
}

export default index