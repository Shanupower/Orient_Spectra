import React, { useState,useEffect } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Typography, Box, Button } from '@mui/material';
import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer';
import Aos from 'aos'

const months = {1:'January',2:'February',3:'March',4:'April',5:'May',6:'June',7:'July',8:'August',9:'September',10:'October',11:'November',12:'December'}

export default function BlogBody() {
    const location = useLocation();
    const { data } = location.state || {}
    console.log(data)
    const { attributes } = data;
    useEffect(()=>{
        Aos.init({
          duration: 2000,
          once:false
        })
      },[])


      const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.getDate()+' '+months[date.getMonth()]+' '+date.getFullYear();
      };
    
    
      let date = formatDate(attributes.Date);

      let imgURL = `http://157.173.222.81:1337${attributes.Headline_image.data.attributes.formats.thumbnail.url}`
  return (<>
    <Navbar/>
    {/* <div>BlogBody</div> */}
    <Container maxWidth="md" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <Box textAlign="center">
          <Typography variant="h1" gutterBottom>
            {attributes.Title}
          </Typography>
        </Box>
        <Box textAlign="center" my={2}>
          <Typography variant="h6" sx={{color:'#fff',textAlign:'left'}} color="textSecondary">
            {date[0]} • {date[1]}
          </Typography>
          <Typography variant="h6" sx={{color:'#fff',textAlign:'right'}} color="textSecondary">
            
          </Typography>
        </Box>
        
        {/* <Box my={4} display="flex" justifyContent="center">
          <Box 
            style={{ 
              width: '100%', 
              height: '300px', 
              
              backgroundColor: '#E0E0E0', 
              borderRadius: '8px', 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center' 
            }}
          >
            <Typography variant="subtitle1" color="textSecondary">
              No image available
            </Typography>
          </Box>
        </Box> */}
        <Box my={4} display="flex" justifyContent="center">
  <Box 
    style={{ 
      width: '100%', 
      height: '300px', 
      backgroundColor: '#E0E0E0', 
      borderRadius: '8px', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      overflow: 'hidden' // Ensure the image stays within the box boundaries
    }}
  >
    {imgURL ? (
      <img 
        src={imgURL} 
        alt="Displayed" 
        style={{ 
          width: '100%', 
          height: '100%', 
          objectFit: 'cover' // Cover ensures the image covers the box dimensions while maintaining aspect ratio
        }} 
      />
    ) : (
      <Typography variant="subtitle1" color="textSecondary">
        No image available
      </Typography>
    )}
  </Box>
</Box>
        <Typography variant="body1" paragraph>
          {attributes.text}
        </Typography>
      </Container>

    
    <Footer/>
    </>)
}
