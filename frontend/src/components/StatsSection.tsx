// src/components/StatsSection.tsx
import React from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

const StatsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e0e0e0;
  padding: 50px 20px;
`;

const StatsTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: #3b3a63;
  text-align: center;
`;

const StatsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  max-width: 1000px;
`;

const StatItem = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 200px;
  animation: fade-in 1s ease-in-out;

  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const StatNumber = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: #3b3a63;
  margin-bottom: 10px;
`;

const StatLabel = styled.p`
  font-size: 1rem;
  color: #666;
`;

const StatsSection: React.FC = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <StatsContainer data-aos="fade-up">
      <StatsTitle>Our Impact</StatsTitle>
      <StatsGrid>
        <StatItem data-aos="fade-up" data-aos-delay="100">
          <StatNumber>1500+</StatNumber>
          <StatLabel>Members</StatLabel>
        </StatItem>
        <StatItem data-aos="fade-up" data-aos-delay="200">
          <StatNumber>5000+</StatNumber>
          <StatLabel>Trees Planted</StatLabel>
        </StatItem>
        <StatItem data-aos="fade-up" data-aos-delay="300">
          <StatNumber>10000+</StatNumber>
          <StatLabel>People Educated</StatLabel>
        </StatItem>
      </StatsGrid>
    </StatsContainer>
  );
};

export default StatsSection;
