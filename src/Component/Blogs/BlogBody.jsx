import React, { useState, useEffect } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Typography, Box } from '@mui/material';
import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer';
import Aos from 'aos';
import './SelectedBlog.css';
import GetTuchWithUs from '../../Landing_page/GetTuchWithUs2';
import CircleArrow from '../Common/CircleArrow';

const months = { 1: 'January', 2: 'February', 3: 'March', 4: 'April', 5: 'May', 6: 'June', 7: 'July', 8: 'August', 9: 'September', 10: 'October', 11: 'November', 12: 'December' };


const YouMightAlsoLike = ({ RecentBlogs }) => {
  const navigate = useNavigate();
  
  const handleNavigate = (post) => {
    navigate('/content', { state: { data: post } });
  };

  return (
    <div className='YouMightAlsoLike'>
      <div>
        <h2>You Might Also Like</h2>
      </div>
      <div className="YouMightAlsoLike-blog-main-div">
        {RecentBlogs?.map((value, id) => (
          <div className="YouMightAlsoLike-blog-div" key={id}>
            <div className="YouMightAlsoLike-blog-date">
              <p>{value.date}</p>
              <CircleArrow className={"CircleArrow"} onClick={() => handleNavigate(value)} />
            </div>
            <div className="YouMightAlsoLike-blog-content">
              <h3 className="YouMightAlsoLike-blog-title">{value?.title}</h3>
              <p className="YouMightAlsoLike-blog-description">{value?.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default function BlogBody() {
  const location = useLocation();
  const { data } = location?.state || {};
  const [postData, setPostData] = useState([]);
  const [randomBlogs, setRandomBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://157.173.222.81:1337/api/blogs?populate=*");
        if (response?.status === 200) {
          setPostData(response?.data.data);
        }
      } catch (error) {
        console.log('ERROR OCCURED WHILE FETCHING:', error.message);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (postData.length > 0) {
      const getRandomBlogs = () => {
        let shuffled = postData?.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 6).map(blog => ({
          date: formatDate(blog?.attributes?.Date),
          title: blog.attributes?.Title,
          description: blog.attributes?.Description
        }));
      };

      setRandomBlogs(getRandomBlogs());
    }
  }, [postData]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.getDate() + ' ' + months[date.getMonth() + 1] + ' ' + date.getFullYear();
  };

  const { attributes } = data;

  useEffect(() => {
    Aos.init({
      duration: 2000,
      once: false
    });
  }, []);

  let date = formatDate(attributes?.Date);

  let imgURL = `http://157.173.222.81:1337${attributes?.Headline_image.data.attributes.formats.thumbnail.url}`;

  return (
    <>
      <Navbar />
      <Container maxWidth="md" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <Box textAlign="center">
          <Typography variant="h1" gutterBottom>
            {attributes?.Title}
          </Typography>
        </Box>
        <Box textAlign="center" my={2}>
          <Typography variant="h6" sx={{ color: '#fff', textAlign: 'left' }} color="textSecondary">
            {date}
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
          {attributes?.text}
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

      <YouMightAlsoLike RecentBlogs={randomBlogs} />
      <GetTuchWithUs />
      <Footer />
    </>
  );
}
