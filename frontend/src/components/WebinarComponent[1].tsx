// src/components/Webinars.tsx

import React from "react";
import styled from "styled-components";

interface WebinarsProps {
  webinars: {
    imageUrl: string;
    description: string;
    date: string;
    time: string;
    link: string;
  }[];
}

const WebinarContainer = styled.div`
  margin-top: 3rem;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center; /* Center align text */
  width: 80vw;
  margin: 0 auto;
`;

const WebinarList = styled.div`
  display: grid;
  gap: 2rem;
`;

const WebinarCard = styled.div`
  background-color: #fff;
  border-radius: 30px; /* Rounded corners */
  box-shadow: 15px 15px 30px #bebebe, -15px -15px 30px #ffffff; /* Neumorphic shadow */
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const WebinarContent = styled.div`
  display: flex;
  flex-direction: column-reverse; /* Alternate image position */
  align-items: center;
`;

const WebinarImageStyled = styled.img`
  width: 20vw;
  max-width: 40vw;
  height: auto;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;

const WebinarDescription = styled.div`
  padding: 1rem;
  text-align: left;

`;

const WebinarTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const WebinarDateTime = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 0.5rem;
`;

const WebinarLink = styled.a`
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const WebinarsHeading = styled.h2`
  font-size: 2.5rem; /* Increase heading size */
  margin-bottom: 2rem;
  color: #333;
`;

const Webinars: React.FC<WebinarsProps> = ({ webinars }) => {
  return (
    <WebinarContainer>
      <WebinarsHeading>Webinars Conducted</WebinarsHeading>
      <WebinarList>
        {webinars.map((webinar, index) => (
          <WebinarCard key={index}>
            <WebinarContent style={{ flexDirection: index % 2 === 0 ? "row-reverse" : "row" }}>
              <WebinarImageStyled src={webinar.imageUrl} alt={webinar.description} />
              <WebinarDescription>
                <WebinarTitle>{webinar.description}</WebinarTitle>
                <WebinarDateTime>{webinar.date} - {webinar.time}</WebinarDateTime>
                <p>{webinar.description}</p>
                <WebinarLink href={webinar.link} target="_blank" rel="noopener noreferrer">
                  Join Webinar
                </WebinarLink>
              </WebinarDescription>
            </WebinarContent>
          </WebinarCard>
        ))}
      </WebinarList>
    </WebinarContainer>
  );
};

export default Webinars;
