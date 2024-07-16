import React, { FunctionComponent, useState } from "react";
import styled from "styled-components";
import Cards from "../assets/images/cards.webp";

export type PastEventsProps = {
  className?: string;
};

// Styled components from the reports page
const ViewGalleryButton = styled.button`
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  background: transparent;
  padding: 0;
  font-size: inherit;
  font-family: inherit;
  width: 12rem;
  height: auto;
  margin-top: auto;
  width: calc(125% / 2);
  align-self: center; /* Align center */
  color: gold;

  .circle {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: relative;
    display: block;
    margin: 0;
    width: 3rem;
    height: 3rem;
    background: #282936;
    border-radius: 1.625rem;
  }

  .icon {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    background: #fff;
  }

  .icon.arrow {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    left: 0.625rem;
    width: 1.125rem;
    height: 0.125rem;
    background: none;
  }

  .icon.arrow::before {
    position: absolute;
    content: "";
    top: -0.29rem;
    right: 0.0625rem;
    width: 0.625rem;
    height: 0.625rem;
    border-top: 0.125rem solid #fff;
    border-right: 0.125rem solid #fff;
    transform: rotate(45deg);
  }

  .button-text {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0.75rem 0;
    margin: 0 0 0 1.85rem;
    color: #white;
    font-weight: 700;
    line-height: 1.6;
    text-align: center;
    text-transform: uppercase;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 250px;
  }

  &:hover .circle {
    width: 100%;
  }

  &:hover .circle .icon.arrow {
    background: #fff;
    transform: translate(1rem, 0);
  }

  &:hover .button-text {
    color: #fff;
  }
`;

const PastEventsContentWrapperRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; /* Align items center */
  background-color: #f0f0f0;
  padding: 4rem 0;
  min-height: 50vh;
  border-radius: 10%;
`;

const SectionHeading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333;
  text-align: center;
  background: linear-gradient(135deg, #f06a6a, #f0a6a6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
`;

const PastEventsContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1200px;
  width: 100%;
`;

const PastEventFrame = styled.div<{ bgImage: string }>`
  flex: 1;
  margin: 1rem;
  min-width: 300px;
  max-width: 400px;
  height: 300px;
  background: ${({ bgImage }) => `url(${bgImage}) center/cover no-repeat`};
  position: relative;
  box-shadow: 15px 15px 30px #bebebe, -15px -15px 30px #ffffff;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 30px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7));
    border-radius: 30px;
    z-index: 0;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2), 0 0 20px 0 rgba(0, 0, 0, 0.5);
  }
`;

const PastEventContent = styled.div`
  position: relative;
  z-index: 1;
`;

const PastEventTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #fff;
  background: linear-gradient(135deg, #f06a6a, #f0a6a6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
`;

const PastEventDate = styled.p`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: #fff;
  background: linear-gradient(135deg, #f06a6a, #f0a6a6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
`;

const PastEventDescription = styled.p`
  font-size: 1rem;
  color: #ddd;
`;

const EventTable = styled.table<{ isVisible: boolean }>`
  width: 100%;
  margin-top: 2rem;
  border-collapse: collapse;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: ${({ isVisible }) => (isVisible ? "table" : "none")};
`;

const TableHeader = styled.th`
  padding: 1rem;
  text-align: left;
  background-color: #f06a6a;
  color: #fff;
  border-bottom: 2px solid #fff;
`;

const TableCell = styled.td`
  padding: 1rem;
  border-bottom: 1px solid #ccc;

  a {
    color: #007bff; /* Bootstrap blue for links */
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

interface EventProps {
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  link: string;
}

const PastEventsContentWrapper: FunctionComponent<PastEventsProps> = ({
  className = "",
}) => {
  const [showTable, setShowTable] = useState(false);

  const importantEventsData: EventProps[] = [
    {
      title: "Event 1",
      date: "2023-05-01",
      description: "Description of Event 1.",
      imageUrl: Cards, // Replace with actual image URL
      link: "/event1-details" // Replace with actual link URL
    },
    {
      title: "Event 2",
      date: "2023-06-15",
      description: "Description of Event 2.",
      imageUrl: Cards, // Replace with actual image URL
      link: "/event2-details" // Replace with actual link URL
    },
    {
      title: "Event 3",
      date: "2023-07-20",
      description: "Description of Event 3.",
      imageUrl: Cards, // Replace with actual image URL
      link: "/event3-details" // Replace with actual link URL
    },
    {
      title: "Event 4",
      date: "2023-08-10",
      description: "Description of Event 4.",
      imageUrl: Cards, // Replace with actual image URL
      link: "/event4-details" // Replace with actual link URL
    },
    {
      title: "Event 5",
      date: "2023-09-05",
      description: "Description of Event 5.",
      imageUrl: Cards, // Replace with actual image URL
      link: "/event5-details" // Replace with actual link URL
    },
    {
      title: "Event 6",
      date: "2023-10-20",
      description: "Description of Event 6.",
      imageUrl: Cards, // Replace with actual image URL
      link: "/event6-details" // Replace with actual link URL
    },
  ];

  const otherEventsData: EventProps[] = [
    {
      title: "Event 7",
      date: "2023-11-15",
      description: "Description of Event 7.",
      imageUrl: Cards, // Replace with actual image URL
      link: "/event7-details" // Replace with actual link URL
    },
    {
      title: "Event 8",
      date: "2023-12-10",
      description: "Description of Event 8.",
      imageUrl: Cards, // Replace with actual image URL
      link: "/event8-details" // Replace with actual link URL
    },
    {
      title: "Event 9",
      date: "2024-01-25",
      description: "Description of Event 9.",
      imageUrl: Cards, // Replace with actual image URL
      link: "/event9-details" // Replace with actual link URL
    },
    {
      title: "Event 10",
      date: "2024-02-20",
      description: "Description of Event 10.",
      imageUrl: Cards, // Replace with actual image URL
      link: "/event10-details" // Replace with actual link URL
    },
  ];

  return (
    <PastEventsContentWrapperRoot className={className}>
      <SectionHeading>Past Events And Workshops</SectionHeading>
      <PastEventsContent>
        {importantEventsData.map((event, index) => (
          <PastEventFrame key={index} bgImage={event.imageUrl}>
            <PastEventContent>
              <PastEventTitle>{event.title}</PastEventTitle>
              <PastEventDate>{event.date}</PastEventDate>
              <PastEventDescription>{event.description}</PastEventDescription>
            </PastEventContent>
            <ViewGalleryButton>
              <span className="circle">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">View Event</span>
            </ViewGalleryButton>
          </PastEventFrame>
        ))}
      </PastEventsContent>
      <ViewGalleryButton onClick={() => setShowTable(!showTable)}>
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">View More</span>
      </ViewGalleryButton>
      <EventTable isVisible={showTable}>
        <thead>
          <tr>
            <TableHeader>Event</TableHeader>
            <TableHeader>Date</TableHeader>
            <TableHeader>Description</TableHeader>
            <TableHeader>Link</TableHeader>
          </tr>
        </thead>
        <tbody>
          {otherEventsData.map((event, index) => (
            <tr key={index}>
              <TableCell>{event.title}</TableCell>
              <TableCell>{event.date}</TableCell>
              <TableCell>{event.description}</TableCell>
              <TableCell>
                <a href={event.link} target="_blank" rel="noopener noreferrer">
                  View Event Details
                </a>
              </TableCell>
            </tr>
          ))}
        </tbody>
      </EventTable>
    </PastEventsContentWrapperRoot>
  );
};

export default PastEventsContentWrapper;

