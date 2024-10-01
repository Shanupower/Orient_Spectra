import React, { useEffect, useState } from "react";
import "./event.css";
import Button from "../Common/Button";
import axios from "axios";
const BookEventForm = ({ setBookEventForm }) => {
  const [upcomingEventdata, setUpcominngEventData] = useState([]);
  const formattedDate = new Date();
  const currentDate = formattedDate.toISOString().split("T")[0];
  const fetchUpcomingEventData = async () => {
    try {
      const response = await axios.get(
        `https://strapi.orientspectra.com/api/events?filters[Date_of_the_event][$gt]=${currentDate}?sort[0]=Date_of_the_event&populate=*`
      );
      if (response?.status === 200) {
        setUpcominngEventData(response?.data.data);
      }
    } catch (error) {
      console.log("ERROR OCCURED WHILE FETCHING:", error.message);
    }
  };
  useEffect(() => {
    fetchUpcomingEventData();
  }, []);

  return (
    <>
      <div className="event-form-section">
        <h2>Join with us Now!</h2>
        <form action="">
          <input type="text" name="firstName" placeholder="First Name" />
          <input type="text" name="LastName" placeholder="Last Name" />
          <input type="email" name="email" placeholder="Email Address" />
          <input type="number" name="phone" placeholder="Phone Number" />
          <select name="upcomming_Event" id="">
            <option value="" disabled>
              Select Upcoming Event
            </option>
            {upcomingEventdata?.map((event) => (
              <option value={event?.attributes?.Headline} key={event.id}>
                {event?.attributes?.Headline}
              </option>
            ))}
          </select>
          <Button text="Submit" arrow className="handleformSubmit" />
        </form>

        <p className="cancleButton" onClick={() => setBookEventForm(false)}>
          X
        </p>
      </div>
    </>
  );
};

export default BookEventForm;
