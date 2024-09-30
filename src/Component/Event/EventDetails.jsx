import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../Common/Button";
import BookEventForm from "./BookEventForm";

const EventDetail = () => {
  const { id } = useParams();
  const [event, setEvent] = useState({});
  const [bookEventForm, setBookEventForm] = useState(false);
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

  return (
    <>
      {bookEventForm && (
        <>
          <div className="book-event-form-container">
            <BookEventForm setBookEventForm={setBookEventForm} />
          </div>
        </>
      )}

      <div className="event-details-conatiner section">
        <div className="event-image">
          <img
            src={`https://strapi.orientspectra.com${event?.attributes?.Poster?.data?.attributes?.formats?.small?.url}`}
            alt="blog"
          />

          <Button
            onClick={() => setBookEventForm(true)}
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
