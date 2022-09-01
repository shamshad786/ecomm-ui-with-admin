import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import Image from 'next/image';
import { DeleteOutline } from '@material-ui/icons';
import {userRows} from '../admincontroller/dummyData'
import Link from 'next/link';

const Userhome = () => {

    const [data, setData] = useState(userRows);

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
      field: 'user',
       headerName: 'User',
        width: 200,
        renderCell: (params)=>{
            return (
                <div className='userListUsers'>
                <Image className='usernameProfile' src={params.row.avatar} width='32' height='32' objectFit='cover'  alt=''/>
               <p className='userListuserName'>{params.row.username}</p>
                </div>
            )
        }
 },
  { 
      field: 'email',
       headerName: 'E-mail',
        width: 200
    },
  {
    field: 'status',
    headerName: 'Status',
    width: 120,
  },
  {
    field: 'transactions',
    headerName: 'Transaction Volume',
    width: 160,
  },
  {
    field: 'action',
    headerName: 'Action',
    width: 150,
    renderCell: (params)=>{
        return(
            <>
            <Link href={`/adminusers/${params.row.id}`}>
                <a>
            <button className='userListEdit'>Edit</button>
                </a>
            </Link>
            <DeleteOutline  className='userListDelete' onClick={()=> handleDelete(params.row.id)} />
            </>
        )
    }
  },
];

  return (
   <>
       <div className='userList'>
       <DataGrid
        rows={data}
        columns={columns}
        pageSize={11}
        rowsPerPageOptions={[11]}
        checkboxSelection
        disableSelectionOnClick
      />
       </div>
   </>
  )
}

export default Userhome