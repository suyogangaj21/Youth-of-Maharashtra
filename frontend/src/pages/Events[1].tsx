import { FunctionComponent } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "@/components/Header";
import Webinars from "@/components/WebinarComponent[1]";

import Web1 from "../assets/images/cards.webp";

import afterWebinarsImage1 from "../assets/images/ypar.png";
import afterWebinarsImage2 from "../assets/images/yconclave.png";
import afterWebinarsImage3 from "../assets/images/yfest.png";
import ImageGallery from "@/components/ImageGallery[1]";
import UpcomingEventsContentWrapper from "@/components/UpcomingEvents[1]";

import Workshops from "@/components/WorkShops[1]";
import PastEventsContentWrapper from "@/components/PastEventsContentWrapper[1]";

// Global styles for the entire application
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #E9F5ED; /* Cream background color */
    font-family: 'Inter', sans-serif; /* Example font family */
    color: #333; /* Example text color */
  }
`;

const EventsWrapper = styled.div`
  width: 100%;
  &.blur-fade {
    /* Additional styles */
    animation: blurFade 1s ease-in-out;
  }
`;

const EventsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #ffffff; /* White background color */
  border: 1px solid #ccc;
  border-radius: 8px;
  border-radius: 30px;
  background: #white;
  box-shadow: 15px 15px 30px rgb(25, 25, 25), -15px -15px 30px rgb(60, 60, 60);
`;

const EventsTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  background: linear-gradient(135deg, #6d83f2, #a1c4fd);
  -webkit-background-clip: text;
  -webkit-text-fill-color: black;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
`;

const webinars = [
  {
    imageUrl: Web1,
    description: "Description of webinar 1",
    date: "2024-08-01",
    time: "10:00 AM",
    link: "https://example.com/webinar1",
  },
  {
    imageUrl: Web1,
    description: "Description of webinar 2",
    date: "2024-08-15",
    time: "02:00 PM",
    link: "https://example.com/webinar2",
  },
  // Add more webinars as needed
];

const Events: FunctionComponent = () => {
  const workshops = [
    {
      imageUrl: Web1,
      title: "Workshop Title 1",
      date: "2024-08-15",
      time: "14:00 - 16:00",
      description: "Description of Workshop 1",
      link: "https://example.com/workshop1",
    },
    {
      imageUrl: Web1,
      title: "Workshop Title 2",
      date: "2024-08-20",
      time: "10:00 - 12:00",
      description: "Description of Workshop 2",
      link: "https://example.com/workshop2",
    },
    // Add more workshops as needed
  ];

  const galleryImages = [
    afterWebinarsImage1,
    afterWebinarsImage2,
    afterWebinarsImage3,
  ];

  return (
    <EventsWrapper className="blur-fade">
      <GlobalStyle /> {/* Apply global styles */}
      <Header />
      <br />
      <br />
      <EventsContainer>
        <EventsTitle>Upcoming Events</EventsTitle>
        <UpcomingEventsContentWrapper />
      </EventsContainer>
      <br />
      <br />
      <PastEventsContentWrapper />
      <br />
      <br />
      {/* Example of passing props to Webinars component */}
      <Webinars webinars={webinars} />
      <br />
      <br />
      <Workshops workshops={workshops} /> {/* Pass workshops prop here */}
      <br />
      <ImageGallery images={galleryImages} />
      <br />
      <br />
    </EventsWrapper>
  );
};

export default Events;
