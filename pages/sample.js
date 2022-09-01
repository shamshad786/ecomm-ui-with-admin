import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Image from 'next/image';

const Sample = () => {


    const [data,setData] = useState([]);


    //const dataUrl = 'http://localhost:5001/api/posts';

    const fetchData = async() =>{

        const res = await axios.get('http://localhost:5001/api/posts');
        console.log(res.data.response);
        setData(res.data.response);
    }
    
    useEffect(()=>{

            fetchData();
    },[])

    const PublicFolder =  "http://localhost:5001/images/"

  return (
    <div style={{textAlign:'center'}} >
            <div>
                <h4>This data come from nodejs rest api from mongoDb</h4>
            </div>
            <div>

                {
                    data.map((d)=>{
                        return(
                            <div key={d._id}>
                                <h3>{d.title}</h3>
                                <h5>{d.username}</h5>
                                <p>{d.desc}</p>
                                <Image src={PublicFolder + d.photo} alt='' width={200} height={200} />
                            </div>
                        )
                    })
                }

            </div>
    </div>
  )
}

export default Sample