// src/components/Workshops.tsx

import React from "react";
import styled from "styled-components";

interface WorkshopsProps {
  workshops: {
    imageUrl: string;
    title: string;
    date: string;
    time: string;
    description: string;
    link: string;
  }[];
}

const WorkshopContainer = styled.div`
  margin-top: 3rem;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 80vw;
  margin: 0 auto;
`;

const WorkshopList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;

const WorkshopCard = styled.div`
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 15px 15px 30px #bebebe, -15px -15px 30px #ffffff;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  overflow: hidden;
  width: 40vw;
  max-width: 400px;
`;

const WorkshopContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WorkshopImageStyled = styled.img`
  width: 100%;
  max-height: 250px;
  object-fit: cover;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;

const WorkshopDescription = styled.div`
  padding: 1rem;
  text-align: left;
`;

const WorkshopTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #333;
`;

const WorkshopDateTime = styled.p`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: #555;
`;

const WorkshopDetail = styled.p`
  font-size: 1rem;
  color: #666;
`;

const WorkshopLink = styled.a`
  font-size: 1rem;
  color: #007bff;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #0056b3;
  }
`;

const Workshops: React.FC<WorkshopsProps> = ({ workshops }) => {
  return (
    <WorkshopContainer>
      <h2>Upcoming Workshops</h2>
      <WorkshopList>
        {workshops.map((workshop, index) => (
          <WorkshopCard key={index}>
            <WorkshopContent>
              <WorkshopImageStyled src={workshop.imageUrl} alt={workshop.title} />
              <WorkshopDescription>
                <WorkshopTitle>{workshop.title}</WorkshopTitle>
                <WorkshopDateTime>{`${workshop.date} - ${workshop.time}`}</WorkshopDateTime>
                <WorkshopDetail>{workshop.description}</WorkshopDetail>
                <WorkshopLink href={workshop.link} target="_blank" rel="noopener noreferrer">
                  More Details
                </WorkshopLink>
              </WorkshopDescription>
            </WorkshopContent>
          </WorkshopCard>
        ))}
      </WorkshopList>
    </WorkshopContainer>
  );
};

export default Workshops;
