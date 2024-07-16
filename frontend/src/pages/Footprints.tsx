import  { FunctionComponent } from "react";
import styled, { createGlobalStyle } from "styled-components";

import FHeader from "@/components/FootprintsHeader";
import UpcomingEventsContentWrapper from "@/components/reports";

import Collage from "../assets/images/collage.png";
import ImageGallery from "@/components/ImageGallery";
import Blog from "@/components/Blog"; // Import the Blog component
import { SuccessStories } from "@/components/SuccessStories";

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
  box-shadow: 15px 15px 30px rgb(25, 25, 25),
             -15px -15px 30px rgb(60, 60, 60);
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

const StyledParagraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #666;
  padding : 0 10vw;
  margin-bottom: 2rem;
  text-align: center;

`;



const Events: FunctionComponent = () => {

  const collage = [Collage];

  return (
    <EventsWrapper className="blur-fade">
      <GlobalStyle /> {/* Apply global styles */}
      <FHeader />
      <br />
      <br />
      <div className="flex w-full justify-center items-center mx-10 h-full">
        <SuccessStories/>
      
    </div> {/* Add SuccessStoriesWrapper here */}
      <br />
      <br />
      <EventsContainer>
        <EventsTitle>Reports</EventsTitle>
        <StyledParagraph>
          Spread Happiness Foundation helps unprivileged students by providing educational materials, and assisting migrant workers during the lockdown by providing them with basic essentials.
        </StyledParagraph>
        <UpcomingEventsContentWrapper />
      </EventsContainer>
      <br />
      <br />
      <ImageGallery images={collage} title="Moments Captured" />
      <br />
      <Blog />
      <br />
    </EventsWrapper>
  );
};

export default Events;
