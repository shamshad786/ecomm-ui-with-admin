import React from 'react'

const Newproduct = () => {


    const addProductHandler = (e) =>{
            e.preventDefault();
            console.log('Add Product Created')
    }
    
  return (
    <>
        <div className='newProdutc-Home'>
            <h1 className="addProductTitle">New Product</h1>
            <form className="addproductForm" onSubmit={addProductHandler}>
                <div className="addProductItem">
                    <label >Image</label>
                    <input type="file" id='file' />
                </div>
                <div className="addProductItem">
                    <label >Name</label>
                    <input type="text" placeholder='Apple iPhone' />
                </div>
                <div className="addProductItem">
                    <label >Stock</label>
                    <input type="text" placeholder='45' />
                </div>
                <div className="addProductItem">
                    <label >Active</label>
                    <select name='active' id='active'>
                        <option value="not selected">Select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className='addProductButon' type='submit'  >Create</button>
            </form>
        </div>
    </>
  )
} 

export default Newproduct