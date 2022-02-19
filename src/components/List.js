import React, { useEffect, useState } from 'react'
import LCard from './LCard';
import './List.css'
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';

function List() {
    const [data,setData] = useState([]);
    const [currentpage,setCurrentpage] = useState('59b3f0b0100000e30b236b7e');
    const [error,setError] =useState(null)
    

    const handleChange = (event, value) => {
        if(value===1){
            setCurrentpage('59b3f0b0100000e30b236b7e')
        }
        else if(value===2){
            setCurrentpage('59ac28a9100000ce0bf9c236')
        }
        else if(value===3){
            setCurrentpage('59ac293b100000d60bf9c239')
        }
      };
    const updateData = async () =>{
        await fetch(`http://www.mocky.io/v2/${currentpage}`)
        .then(res => res.json())
        .then(data => setData(data.posts))
        .catch(() => setError('technical error'))
    }

    useEffect(() => {
        updateData();
    },[updateData])

    
    
  return (
    <div id='main'>
    {error}
        <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        {data.map((element) => {
            return (
                <LCard
                    name={element.event_name} 
                    date={element.event_data}
                    view={element.views}
                    like={element.likes}
                    share={element.shares}
                    img={element.thumbnail_image}
                />
            )
        })}
        </Box>
        <Pagination 
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          margin:2
          
        }}
        count={3} shape="rounded"  onChange={handleChange} />
    </div>
  )
}

export default List