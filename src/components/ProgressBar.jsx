import React from 'react';
import styled, { keyframes } from 'styled-components';

const progressBarAnimation = (percentage) => keyframes`
  0% {
    width: 0;
  }
  100% {
    width: ${percentage}%;
  }
`;

const ProgressBarWrapper = styled.div`
  width: 100%;
  background-color: ${(props) => props.backgroundColor};
  height: 12px;
 border-radius: 15px; 
`;

const ProgressBarFill = styled.div`
  height: 100%;
  border-radius: 15px; 
  background-color: ${(props) => props.foregroundColor};
  width: ${(props) => props.percentage}%;
  animation: ${(props) => progressBarAnimation(props.percentage)} 1s ease-in-out;
`;


const ProgressBar = ({ foregroundColor, backgroundColor, percentage }) => {
  return (
    <ProgressBarWrapper backgroundColor={backgroundColor}>
      <ProgressBarFill foregroundColor={foregroundColor} percentage={percentage} />
    </ProgressBarWrapper>
  );
};

export default ProgressBar;
