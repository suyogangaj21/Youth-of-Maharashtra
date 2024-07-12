// src/pages/Home.tsx

import React from 'react';
import styled, { keyframes } from 'styled-components';
import maharashtraMap from '/images/map.jpg'; // Adjust the path to your image

import missionImage from '/images/map.jpg'; // Adjust the path to your image
import AOS from 'aos';
import 'aos/dist/aos.css';
import StatsSection from '@/components/StatsSection';
import AboutUs from '@/components/AboutUs';

AOS.init();

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const MissionSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f4f4f4;
  padding: 50px 20px;
  animation: ${fadeIn} 1s ease-in-out;
`;

const MissionImage = styled.div`
  background-image: url(${missionImage});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 300px;
  margin-bottom: 20px;
  border-radius: 10px;
`;

const MissionContent = styled.div`
  max-width: 800px;
  text-align: center;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

const MissionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #3b3a63;
`;

const MissionText = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #333;
`;

const InteractiveButton = styled.button`
  background-color: #3b3a63;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2c2a4a;
  }
`;

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #E9F5ED;
`;

const MapContainer = styled.div`
  background-image: 
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), /* Black gradient */
    url(${maharashtraMap}); /* Your background image */
  background-size: cover; /* Cover the entire container */
  background-position: center; /* Center the background image */
  background-attachment: fixed; /* Make the background image fixed */
  color: #fff; /* Text color on top of the image */
  min-height: 100vh; /* Minimum viewport height */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
`;

const JoinButton = styled.button`
  background-color: rgba(0, 0, 0, 0.5); /* Black with 80% transparency */
  color: #fff;
  border: none;
  padding: 15px 30px;
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 1); /* Darker on hover */
  }
`;

const Footer = styled.footer`
  background-color: #3b3a63;
  color: #fff;
  padding: 20px 0;
  text-align: center;
  width: 100%;
`;

const Home: React.FC = () => {
  const carouselMedia = [
    { type: 'image', src: '/assets/images/carousel1.jpg', alt: 'Image 1', description: 'Description 1' },
    { type: 'image', src: '/assets/images/carousel2.jpg', alt: 'Image 2', description: 'Description 2' },
    { type: 'image', src: '/assets/images/carousel3.jpg', alt: 'Image 3', description: 'Description 3' },
    { type: 'image', src: '/assets/images/carousel1.jpg', alt: 'Image 1', description: 'Description 1' },
    { type: 'image', src: '/assets/images/carousel2.jpg', alt: 'Image 2', description: 'Description 2' },
    { type: 'image', src: '/assets/images/carousel3.jpg', alt: 'Image 3', description: 'Description 3' },
    { type: 'image', src: '/assets/images/carousel1.jpg', alt: 'Image 1', description: 'Description 1' },
    { type: 'image', src: '/assets/images/carousel2.jpg', alt: 'Image 2', description: 'Description 2' },
    { type: 'image', src: '/assets/images/carousel3.jpg', alt: 'Image 3', description: 'Description 3' },
  ];

  const carouselVideos = [
    { src: '/assets/videos/v1.mp4', title: 'Video 1', description: 'Video Description 1' },
    { src: '/assets/videos/v2.mp4', title: 'Video 2', description: 'Video Description 2' },
    { src: '/assets/videos/v3.mp4', title: 'Video 3', description: 'Video Description 3' },
    { src: '/assets/videos/v1.mp4', title: 'Video 1', description: 'Video Description 1' },
    { src: '/assets/videos/v2.mp4', title: 'Video 2', description: 'Video Description 2' },
    { src: '/assets/videos/v3.mp4', title: 'Video 3', description: 'Video Description 3' },
    { src: '/assets/videos/v1.mp4', title: 'Video 1', description: 'Video Description 1' },
    { src: '/assets/videos/v2.mp4', title: 'Video 2', description: 'Video Description 2' },
    { src: '/assets/videos/v3.mp4', title: 'Video 3', description: 'Video Description 3' },
  ];

  const handleJoinUsClick = () => {
    window.location.href = '/join-us';
  };

  return (
    <HomePageContainer>
      <MapContainer>
        <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>Youth of Maharashtra</h1>
        <p style={{ fontSize: '1.5rem', maxWidth: '600px', lineHeight: '1.6' }}>Connecting Youth Of Maharashtra For A Better Future.</p>
        <JoinButton onClick={handleJoinUsClick}>Join Us</JoinButton>
      </MapContainer>
      <AboutUs />
      <MissionSection data-aos="fade-up">
        <MissionImage />
        <MissionContent>
          <MissionTitle>Our Mission</MissionTitle>
          <MissionText>
            Our mission is to connect the youth of Maharashtra for a better future. We aim to empower and inspire the next generation through community initiatives, educational programs, and innovative projects that foster growth and development.
          </MissionText>
          <InteractiveButton onClick={() => alert('Learn more about our mission!')}>Learn More</InteractiveButton>
        </MissionContent>
      </MissionSection>

      <StatsSection />

      <Footer />
    </HomePageContainer>
  );
};

export default Home;
