// import React from "react";
// import Navbar from "../Common/Navbar";
// import Hero from "./Hero";
// import MoreBlog from "./MoreBlog";
// import GetTuchWithUs from "../../Landing_page/GetTuchWithUs2";
// import Footer from "../Common/Footer";
// import BestBlog from "./BestBlog";
// import axios from "axios";
// import { useEffect,useState } from "react";
// const Blogs = () => {

//   const [data, setData] = useState([]);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://157.173.222.81:1337/api/blogs?populate=*", {
//           headers: {
//             Authorization: `Bearer ${import.meta.env.VITE_STRAPI}`
//           }
//         });
//         if (response.status === 200) {
//           console.log('status is:',response.status)
//           setData(response.data.data);
//           console.log('data is',data);
//         }
//       } catch (error) {
//         console.log('status is:',response.status)
//         console.log('ERROR OCCURED WHILE FETCHING:', error.message);
//       }
//     };
  
//     fetchData();
//   }, []);


//   return (
//     <>
//       <Navbar />
//       <Hero data={data.slice(0,3)}/>
//       <BestBlog data ={data.slice(3)}/>
//       <MoreBlog data={data.slice(3)}/>
//       <GetTuchWithUs />
//       <Footer />
//     </>
//   );
// };

// export default Blogs;


import React from "react";
import Navbar from "../Common/Navbar";
import Hero from "./Hero";
import MoreBlog from "./MoreBlog";
import GetTuchWithUs from "../../Landing_page/GetTuchWithUs2";
import Footer from "../Common/Footer";
import BestBlog from "./BestBlog";
import axios from "axios";
import { useEffect,useState } from "react";
const Blogs = () => {

  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://157.173.222.81:1337/api/blogs?populate=*");
        if (response?.status === 200) {
          console.log('status is:',response?.status)
          setData(response?.data.data);
          console.log('data is',data);
        }
      } catch (error) {
        console.log('status is:',response?.status)
        console.log('ERROR OCCURED WHILE FETCHING:', error.message);
      }
    };
  
    fetchData();
  }, []);


  return (
    <>
      <Navbar />
      <Hero data={data.slice(0,3)}/>
      <BestBlog data ={data.slice(3)}/>
      <MoreBlog data={data.slice(3)}/>
      <GetTuchWithUs />
      <Footer />
    </>
  );
};

export default Blogs;
