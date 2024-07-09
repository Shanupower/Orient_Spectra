import React, { useState,useEffect } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Typography, Box, Button } from '@mui/material';
import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer';
import Aos from 'aos'
import './SelectedBlog.css'
import GetTuchWithUs from '../../Landing_page/GetTuchWithUs2';
import CircleArrow from '../Common/CircleArrow';
const months = {1:'January',2:'February',3:'March',4:'April',5:'May',6:'June',7:'July',8:'August',9:'September',10:'October',11:'November',12:'December'}

const RecentBlogs = [
  {
    id: 1,
    date: "19 JUN2024",
    title: "Recent Blog Title",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh malutpat.",
      img:"",
      
  },
  {
    id: 1,
    date: "19 JUN2024",
    title: "Recent Blog Title",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh malutpat.",
       img:""
  },
  {
    id: 2,
    date: "19 JUN2024",
    title: "Recent Blog Title",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh malutpat.",
       img:""
  },
  {
    id: 3,
    date: "19 JUN2024",
    title: "Recent Blog Title",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh malutpat.",
       img:""
  },
  {
    id: 3,
    date: "19 JUN2024",
    title: "Recent Blog Title",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh malutpat.",
       img:""
  },
 
];


// const YouMightAlsoLike = () => {
//   return (
//     <>
//       <div className='YouMightAlsoLike'>
//         <div>
//           <h2>You Might Also Like</h2>
//         </div>
//         <div className="YouMightAlsoLike-blog-main-div">
//             {RecentBlogs.map((value, id)=><>
//             <div className="YouMightAlsoLike-blog-div">
             
//                 <div className="YouMightAlsoLike-blog-date">
//                     <p>{value.date}</p>
//                     <CircleArrow 
//                         className={"CircleArrow"} />
//                 </div>
//                 <div>
//                     <h3>{value.title}</h3>
//                 </div>


//             </div>
               
//             </>)}
//         </div>
//       </div>
//     </>
//   );
// };

const YouMightAlsoLike = () => {
  return (
    <>
      <div className='YouMightAlsoLike'>
        <div>
          <h2>You Might Also Like</h2>
        </div>
        <div className="YouMightAlsoLike-blog-main-div">
          {RecentBlogs.map((value, id) => (
            <div className="YouMightAlsoLike-blog-div" key={id}>
              <div className="YouMightAlsoLike-blog-date">
                <p>{value.date}</p>
                <CircleArrow className={"CircleArrow"} />
              </div>
              <div className="YouMightAlsoLike-blog-content">
                <h3 className="YouMightAlsoLike-blog-title">{value.title}</h3>
                <p className="YouMightAlsoLike-blog-description">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};



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
      <div className='hr-tags'>
      <hr />
          <div className="remaing-blogs">
            <h3>H3 Title</h3>
            <p>19 JUN 2024</p>
          </div>
          <hr />
          <div className="remaing-blogs">
            <h3>H3 Title</h3>
            <p>19 JUN 2024</p>
          </div>

      </div>
      
      <YouMightAlsoLike />
    <GetTuchWithUs/>
    <Footer/>
    </>)
}
