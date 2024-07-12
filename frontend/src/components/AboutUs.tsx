// src/components/AboutUs.tsx

import React, { useEffect } from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import teamPhoto from '/images/logo.webp'; // Add your team photo

const AboutUsContainer = styled.section`
  background: linear-gradient(to right, #f8f9fa, #e8e9eb);
  color: #333;
  padding: 50px 20px;
  text-align: center;
  overflow: hidden;
`;

const AboutUsHeader = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #3b3a63;
`;

const AboutUsContent = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto 20px;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  justify-items: center;
`;

const TeamMember = styled.div<{ isCenter?: boolean }>`
  text-align: center;
  transform: ${({ isCenter }) => (isCenter ? 'scale(1.1)' : 'none')}; /* Larger scale for center photo */
  transition: transform 0.3s ease-in-out;
`;

const TeamMemberPhoto = styled.img`
  width: 100%;
  max-width: 200px;
  height: auto;
  border-radius: 50%;
  margin-bottom: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05); /* Scale up the image on hover */
  }
`;

const TeamMemberName = styled.h3`
  font-size: 1.2rem;
  margin: 10px 0;
  color: #3b3a63;
`;

const TeamMemberRole = styled.p`
  font-size: 1rem;
  color: #666;
`;

const Timeline = styled.div`
  margin-top: 50px;
  text-align: left;
`;

const TimelineItem = styled.div`
  position: relative;
  padding: 20px 0;
  border-left: 3px solid #3b3a63;
  padding-left: 30px;

  &:last-child {
    border: none;
  }
`;

const TimelineContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px); /* Lift up the item on hover */
  }
`;

const TimelineDate = styled.h4`
  font-size: 1.2rem;
  color: #3b3a63;
  margin-bottom: 10px;
`;

const TimelineText = styled.p`
  font-size: 1rem;
  color: #666;
`;

const AboutUs: React.FC = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <AboutUsContainer data-aos="fade-up">
      <AboutUsHeader>About Us</AboutUsHeader>
      <AboutUsContent>
        We are a group of passionate individuals committed to connecting the youth of Maharashtra for a better future. Our mission is to empower and support young minds through various initiatives and programs.
      </AboutUsContent>
      <TeamGrid>
        <TeamMember data-aos="fade-up" data-aos-delay="100" isCenter>
          <TeamMemberPhoto src={teamPhoto} alt="Our Team" />
          <TeamMemberName>John Doe</TeamMemberName>
          <TeamMemberRole>CEO</TeamMemberRole>
        </TeamMember>
        <TeamMember data-aos="fade-up" data-aos-delay="200">
          <TeamMemberPhoto src={teamPhoto} alt="Team Member" />
          <TeamMemberName>Jane Doe</TeamMemberName>
          <TeamMemberRole>COO</TeamMemberRole>
        </TeamMember>
        <TeamMember data-aos="fade-up" data-aos-delay="300">
          <TeamMemberPhoto src={teamPhoto} alt="Team Member" />
          <TeamMemberName>Michael Smith</TeamMemberName>
          <TeamMemberRole>CFO</TeamMemberRole>
        </TeamMember>
        {/* Add more team members as needed */}
      </TeamGrid>
      <Timeline data-aos="fade-up">
        <TimelineItem>
          <TimelineContent>
            <TimelineDate>2020</TimelineDate>
            <TimelineText>
              Our organization was founded with the mission to connect and empower the youth of Maharashtra.
            </TimelineText>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineContent>
            <TimelineDate>2021</TimelineDate>
            <TimelineText>
              We launched our first community initiative, planting over 1,000 trees in local neighborhoods.
            </TimelineText>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineContent>
            <TimelineDate>2022</TimelineDate>
            <TimelineText>
              Our educational programs reached over 10,000 young people, providing them with valuable resources and support.
            </TimelineText>
          </TimelineContent>
        </TimelineItem>
        {/* Add more timeline items as needed */}
      </Timeline>
    </AboutUsContainer>
  );
};

export default AboutUs;
