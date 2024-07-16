import { FunctionComponent } from "react";
import styled from "styled-components";
import Cards from "../assets/images/cards.webp";
export type UpcomingEventsProps = {
  className?: string;
};

const UpcomingEventsContentWrapperRoot = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #silver; /* Cream background color */
  padding: 4rem 0;
  min-height: 50vh; /* Ensure component covers entire viewport */
  border-radius: 10%;
`;

const UpcomingEventsContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1200px;
  width: 100%;
`;

const EventFrame = styled.div<{ bgImage: string }>`
  flex: 1;
  margin: 1rem;
  min-width: 300px;
  max-width: 400px;
  height: 300px;
  background: ${({ bgImage }) => `url(${bgImage}) center/cover no-repeat`};
  position: relative;
  box-shadow: 15px 15px 30px #bebebe, -15px -15px 30px #ffffff; /* Neumorphic shadow */
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 30px; /* Rounded corners */
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.7)
    );
    border-radius: 30px; /* Match the border-radius of the EventFrame */
    z-index: 0;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2), 0 0 20px 0 rgba(0, 0, 0, 0.5); /* Black shadow towards the bottom */
  }
`;

const EventContent = styled.div`
  position: relative;
  z-index: 1; /* Ensure content is above the gradient overlay */
`;

const EventTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #fff;
  background: linear-gradient(135deg, #6d83f2, #a1c4fd);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
`;

const EventDate = styled.p`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: #fff;
  background: linear-gradient(135deg, #6d83f2, #a1c4fd);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
`;

const EventDescription = styled.p`
  font-size: 1rem;
  color: #ddd;
`;

const RegisterButton = styled.button`
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
  margin-top: auto; /* Push the button to the bottom of the event frame */
  width: calc(125% / 2); /* One-third width of EventFrame */
  align-self: flex-start; /* Align to the left */
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
    width: 100%; /* Full width on smaller screens */
    max-width: 250px; /* Limit maximum width to maintain button size */
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

interface EventProps {
  title: string;
  date: string;
  description: string;
  imageUrl: string;
}

const UpcomingEventsContentWrapper: FunctionComponent<UpcomingEventsProps> = ({
  className = "",
}) => {
  const eventsData: EventProps[] = [
    {
      title: "Event 1",
      date: "2024-08-01",
      description: "Description of Event 1.",
      imageUrl: Cards, // Replace with actual image URL
    },
    {
      title: "Event 2",
      date: "2024-08-15",
      description: "Description of Event 2.",
      imageUrl: Cards, // Replace with actual image URL
    },
    {
      title: "Event 3",
      date: "2024-09-05",
      description: "Description of Event 3.",
      imageUrl: Cards, // Replace with actual image URL
    },
  ];

  return (
    <UpcomingEventsContentWrapperRoot className={className}>
      <UpcomingEventsContent>
        {eventsData.map((event, index) => (
          <EventFrame key={index} bgImage={event.imageUrl}>
            <EventContent>
              <EventTitle>{event.title}</EventTitle>
              <EventDate>Date: {event.date}</EventDate>
              <EventDescription>{event.description}</EventDescription>
              <RegisterButton>
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">Register Now</span>
              </RegisterButton>
            </EventContent>
          </EventFrame>
        ))}
      </UpcomingEventsContent>
    </UpcomingEventsContentWrapperRoot>
  );
};

export default UpcomingEventsContentWrapper;
