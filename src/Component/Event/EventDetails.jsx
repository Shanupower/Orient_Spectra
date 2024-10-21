import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../Common/Button";
import BookEventForm from "./BookEventForm";
import HeroLeadFormPopUp from "../../Landing_page/HeroLeadFormPopUp";
import { useMediaQuery } from "@mui/material";

const EventDetail = () => {
  const { id } = useParams();
  const [event, setEvent] = useState({});
  const [bookEventForm, setBookEventForm] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const isMd = useMediaQuery("(max-width:1024px)");

  const api = `https://strapi.orientspectra.com/api/events/${id}?populate=*`;
  const FetchEventDetails = async () => {
    try {
      const response = await axios.get(api);

      if (response.status === 200) {
        setEvent(response?.data?.data);
      } else {
        console.error("something went wrong !");
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    FetchEventDetails();
  }, []);
  console.log(event);


  const closePopup = () => {
    setIsOpen(false); 
  };
  return (
    <>
      {isOpen &&  (
        <div role="dialog" aria-hidden={!isOpen}>
        <HeroLeadFormPopUp closePopup={closePopup} />
        </div> 
      )
        }
      {/* {bookEventForm && (
        <>
          <div className="book-event-form-container">
            <BookEventForm setBookEventForm={setBookEventForm} />
          </div>
        </>
      )} */}

      <div className="event-details-conatiner section">
        <div className="event-image">
          {isMd ? (
            <img
            src={`https://strapi.orientspectra.com${event?.attributes?.Thumbnail?.data[0]?.attributes.url}`}
            alt="" />
          ):(
            <img
            src={`https://strapi.orientspectra.com${event?.attributes?.Poster?.data?.attributes?.formats?.large?.url}`}
            alt="blog"
          />
          )}
          

          <Button
            onClick={() => setIsOpen(true)}
            text="Book Your Pass"
            arrow="true"
            className="eventBookButton"
          />
        </div>
        <div className="eventDetailsCard">
          <h1>{event?.attributes?.Headline}</h1>
          <span>{event?.attributes?.Date_of_the_event}</span>
        </div>
        <div className="event-card-full-details">
          <div dangerouslySetInnerHTML={{ __html: event?.attributes?.Text }} />
        </div>
      </div>
    </>
  );
};

export default EventDetail;
