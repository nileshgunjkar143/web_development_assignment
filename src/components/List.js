import React, { useEffect, useState } from 'react'
import LCard from './LCard';
import './List.css'
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function List() {
    const [data,setData] = useState([]);
    const [currentpage,setCurrentpage] = useState('59b3f0b0100000e30b236b7e');
    const [error,setError] =useState(null)
    const [page,setPage] = useState(true)
    

    const handleChange = (event, value) => {
      setPage(true)
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
        setPage(false)
    }

    useEffect(() => {
      if(page){
        updateData();
        setPage(false)
      }
    },[updateData])

    const sortArrayA = type => {
      const types = {
        views: 'views',
        likes: 'likes',
        shares: 'shares',
      };
      const sortProperty = types[type];
      const sorted = [...data].sort((a, b) => a[sortProperty] - b[sortProperty]);
      setData(sorted);
    };
    const sortArrayD = type => {
      const types = {
        views: 'views',
        likes: 'likes',
        shares: 'shares',
      };
      const sortProperty = types[type];
      const sorted = [...data].sort((a, b) => b[sortProperty] - a[sortProperty]);
      setData(sorted);
    };

  return (
    <div id='main'>
    <span>Sort By </span>
      <Box >
      <FormControl sx={{ minWidth: 100 ,marginTop:1}} >
        <InputLabel >ASC</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
          onChange={(e) => sortArrayA(e.target.value)}
        >
          <MenuItem value="views">Views</MenuItem>
          <MenuItem value="likes">Likes</MenuItem>
          <MenuItem value="shares">Shares</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ minWidth: 100,marginTop:1 }} >
        <InputLabel >DES</InputLabel>
        <Select onChange={(e) => sortArrayD(e.target.value)}>
          <MenuItem value="views">Views</MenuItem>
          <MenuItem value="likes">Likes</MenuItem>
          <MenuItem value="shares">Shares</MenuItem>
        </Select>
      </FormControl>
    </Box>
    {error}
        <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        {data.map((element,index) => {
            return (
              <div key={index}>
                <LCard
                    name={element.event_name} 
                    date={element.event_data}
                    view={element.views}
                    like={element.likes}
                    share={element.shares}
                    img={element.thumbnail_image}
                />
                </div>
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