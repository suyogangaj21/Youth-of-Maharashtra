import React, { FunctionComponent } from "react";
import styled from "styled-components";

export type HeaderType = {
  className?: string;
};

const FrameChild = styled.div`
  height: 29.688rem;
  width: 90rem;
  position: relative;
  display: none;
  max-width: 100%;
  z-index: 0;
`;

const VectorParent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 8.181rem;
  height: 8.181rem;
`;

const ResourcesInner = styled.div`
  align-self: stretch;
  height: 15.563rem;
  position: relative;
`;

const ResourcesContent = styled.div`
  height: 20.875rem;
  width: 9.75rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const ActivitiesHeld = styled.h1`
  margin: 0;
  position: relative;
  font-size: 3.938rem;
  letter-spacing: 0.01em;
  line-height: 120%;
  font-weight: 700;
  font-family: Inter;
  white-space: nowrap;
  z-index: 1;
  color: #000;
  text-align: center;
  transition: transform 0.3s ease-in-out;
  @media screen and (max-width: 768px) {
    font-size: 3rem;
    text-align: left;
    padding-left: 2rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 2rem;
    padding-left: 1rem;
  }
`;

const ActivitiesTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0 4.937rem;
  max-width: 100%;
  box-sizing: border-box;
  @media screen and (max-width: 768px) {
    justify-content: flex-start;
    padding-left: 2rem;
  }
  @media screen and (max-width: 480px) {
    padding-left: 1rem;
  }
`;

const IfYouWant = styled.span``;

const Span = styled.span`
  color: #1f9943;
  white-space: pre-wrap;
`;

const IfYouWantToJoinForSuchB = styled.span`
  font-weight: 500;
`;

const IfYouWantToJoinForSuchB1 = styled.p`
  margin: 0;
`;

const JoinUs1 = styled.b`
  font-family: Inter;
  color: #1f9943;
`;

const By = styled.span`
  color: #000;
`;

const Span1 = styled.span`
  color: #1f9943;
`;

const ProvidingNecessary = styled.span`
  white-space: pre-wrap;
`;

const JoinUsByProvidingNecessar = styled.p`
  margin: 0;
`;

const IfYouWantContainer = styled.div`
  align-self: stretch;
  height: 3.563rem;
  position: relative;
  font-size: 1.25rem;
  letter-spacing: 0.01em;
  line-height: 130%;
  text-align: center;
  display: inline-block;
  z-index: 2;
  color: #000;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
    text-align: left;
  }
`;

const Activities = styled.div`
  width: 37.063rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1.437rem;
  max-width: 100%;
  @media screen and (max-width: 768px) {
    width: auto;
    padding: 0 1rem;
  }
`;

const RectangleParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  padding: 0.437rem 1.312rem 8.375rem;
  box-sizing: border-box;
  position: relative;
  max-width: 100%;
  font-size: 3rem;
  overflow-x: hidden; /* Prevent horizontal overflow */
  background-color: #e0e0e0; /* Light grey background */
  backdrop-filter: blur(10px); /* Blur effect */
  border-radius: 30px; /* Rounded corners */
  box-shadow: 15px 15px 30px #bebebe, -15px -15px 30px #ffffff; /* Neumorphic shadow */
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2), 0 0 20px 0 rgba(0, 0, 0, 0.5); /* Black shadow towards the bottom */
  }
  @media screen and (max-width: 1100px) {
    flex-wrap: wrap;
    
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding-bottom: 5.438rem;
  }
  @media screen and (max-width: 480px) {
    padding-bottom: 3rem;
    margin-left: none;
  }
`;

const HeaderRoot = styled.header`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  max-width: 100%;
  text-align: center;
  font-family: Inter;
  background-color: #E9F5ED;
`;

const Header: FunctionComponent<HeaderType> = ({ className = "" }) => {
  return (
    <HeaderRoot className={className}>
      <RectangleParent>
        <FrameChild />
        <ResourcesContent>
          <ResourcesInner>
            <VectorParent />
          </ResourcesInner>
        </ResourcesContent>
        <Activities>
          <ActivitiesTitle>
            <ActivitiesHeld>EVENTS CENTRE</ActivitiesHeld>
          </ActivitiesTitle>
          <IfYouWantContainer>
            <IfYouWantToJoinForSuchB1>
              <IfYouWantToJoinForSuchB>
                <IfYouWant>
                  If you want to participate in below event you can 
                </IfYouWant>
                <Span>{` `}</Span>
              </IfYouWantToJoinForSuchB>
            </IfYouWantToJoinForSuchB1>
            <JoinUsByProvidingNecessar>
              <Span>
                <JoinUs1>Join Us</JoinUs1>
              </Span>
              <IfYouWantToJoinForSuchB>
                <Span>{` `}</Span>
                <By>by</By>
                <Span1>{` `}</Span1>
                <ProvidingNecessary>
                  providing necessary information.
                </ProvidingNecessary>
              </IfYouWantToJoinForSuchB>
            </JoinUsByProvidingNecessar>
          </IfYouWantContainer>
        </Activities>
      </RectangleParent>
    </HeaderRoot>
  );
};

export default Header;
