import React from "react";
import Hero from "./Hero";
import MoreBlog from "./MoreBlog";
import GetTuchWithUs from "../../Landing_page/GetTuchWithUs2";
import BestBlog from "./BestBlog";
import axios from "axios";
import { useEffect, useState } from "react";
// import { Helmet } from "react-helmet-async";
const Blogs = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://strapi.orientspectra.com/api/blogs?sort[0]=Date:desc&populate=*&fields[0]=Title&fields[1]=Date&fields[2]=Short_Description `
        );
        if (response?.status === 200) {
          setData(response.data.data);
        }
      } catch (error) {
        console.log("status is:", response?.status);
        console.log("ERROR OCCURED WHILE FETCHING:", error.message);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      {/* <Helmet>
        <title>Blog | News, Trends & Updates about Overseas Education</title>
        <meta 
          name="description" 
          content="Get all the information about top universities, programs, scholarship details, and other news updates, information and trends from around the world." />
      </Helmet> */}
      <Hero data={data.slice(0, 3)} />
      <BestBlog data={data.slice(3, 8)} />
      <MoreBlog data={data.slice(8)} />
      <GetTuchWithUs />
    </>
  );
};

export default Blogs;
