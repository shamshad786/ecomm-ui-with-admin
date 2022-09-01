import React from 'react'
import Link from 'next/link'
import Chart from '../admincontroller/Chart'
import {productData} from '../admincontroller/dummyData'
import Image from 'next/image'
import { Publish } from '@material-ui/icons'

const Product = () => {

const productUpdateHandler= (e)=>{
      e.preventDefault();
      console.log('product Update works');
}

  return (
   <div className='Product-main-home'>
       <div className="productTitleContainer">
         <h1 className="productTitle">Product</h1>
          <Link href='/newproduct'>
            <a>
              <button className="productAddButton">Create</button>
            </a>
          </Link>
       </div>

       <div className="productTop">
         <div className="productTopLeft">
        <Chart data={productData} dataKey='Sales' title='Sales Performance' grid />
         </div>
         <div className="productTopRight shadow-sm">
           <div className="productInfoTop">
            <Image className='productInfoImg' src="https://images.pexels.com/photos/226474/pexels-photo-226474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" width={50} height={50} objectFit='cover'  alt=''/>
            <span className="productName">Apple iPhone</span>
           </div>
           <div className="productInfoBottom">
             <div className="productInfoItem">
               <span className="productInfoKey">id:</span>
               <span className="productInfoValue">20</span>
             </div>
             <div className="productInfoItem">
               <span className="productInfoKey">sales:</span>
               <span className="productInfoValue">245</span>
             </div>
             <div className="productInfoItem">
               <span className="productInfoKey">active:</span>
               <span className="productInfoValue">45</span>
             </div>
             <div className="productInfoItem">
               <span className="productInfoKey">in stock:</span>
               <span className="productInfoValue">no</span>
             </div>
           </div>
         </div>
       </div>
       <div className="productBottom shadow-sm">
         <form className="productForm" onSubmit={productUpdateHandler}>
           <div className="productFormLeft">
             <label>Product Name</label>
             <input type="text" placeholder='Apple iPhone' required />
             <label>In Stock</label>
             <select name="inStock" id="inStock">
               <option value="not selected">Select</option>
               <option value="yes">Yes</option>
               <option value="no">No</option>
             </select>
             <label>Active</label>
             <select name="active" id="active">
               <option value="not selected">Select</option>
               <option value="yes">Yes</option>
               <option value="no">No</option>
             </select>
           </div>
           <div className="productFormRight">

          <div className="productUpload">
            <Image className='productUploadImg' src="https://images.pexels.com/photos/226474/pexels-photo-226474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" width='100px' height='100px' objectFit='cover'  alt=''/>
            <label htmlFor="file">
              <Publish className='produtImgUploadBtn' />
            </label>
            <input type="file" id='file' style={{display: 'none'}} />
          </div>
            <button className="productButton" type='submit'>Update</button>
           </div>
         </form>
       </div>
   </div>
  )
}

export default Product