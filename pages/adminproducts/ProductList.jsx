import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import Image from 'next/image';
import { DeleteOutline } from '@material-ui/icons';
import {productRows} from '../admincontroller/dummyData'
import Link from 'next/link';

const ProductList = () => {

const [data, setData] = useState(productRows);


const handleDelete = (id)=>{
    console.log(id);
    const newFilterData  = data.filter(item => item.id !== id);
    setData(newFilterData);
}


const columns = [
    { field: 'id',
     headerName: 'ID',
      width: 90
   },
    { 
        field: 'product',
         headerName: 'Product',
          width: 200,
          renderCell: (params)=>{
              return (
                  <div className='ProductListItem'>
                  <Image className='productListImg' src={params.row.img} width='32' height='32' objectFit='cover'  alt=''/>
                 <p className='userListuserName'>{params.row.name}</p>
                  </div>
              )
          }
   },
    { 
        field: 'stock',
         headerName: 'Stock',
          width: 200
      },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params)=>{
          return(
              <>
              <Link href={`/adminproducts/${params.row.id}`}>
                  <a>
              <button className='productListEdit'>Edit</button>
                  </a>
              </Link>
              <DeleteOutline  className='productListDelete' onClick={()=> handleDelete(params.row.id)} />
              </>
          )
      }
    },
  ];
  

  return (
    <div className='product-list-home'>
       <DataGrid
        rows={data}
        columns={columns}
        pageSize={11}
        rowsPerPageOptions={[11]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  ) 
}

export default ProductList