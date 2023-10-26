import { ChildBody, ChildInnerWrapper, ChildrenWrapper } from './ChildrenWrapper'
import React from 'react';
import styled from 'styled-components';
import clipboardIcon from "../assets/clipboard.svg";
import correctIcon from "../assets/correct.svg";
import trophyIcon from "../assets/trophy.svg";

const ImageContainer = styled.div`
flex:1
`;

const Image = styled.img`
  padding: 12px;
  border-radius: 50%;
  background-color: #EBF0F5;
  margin: auto;
`;


const StatisticItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between; 
  align-items: center;
  width: 100%;
  margin-right: 16px;
`;

const StatisticValue = styled.h3`
  color: black;
`;

function QuickStatistics({rank,percentile,score}) {

  const formattedRank = new Intl.NumberFormat('en-US').format(rank);
  const formattedPercentile =  `${percentile || 0}%` ;
  const formattedScore = score > 9 ? `${score}/15` : `0${score}/15`; 
  const data = [
    {
      image: trophyIcon,
      text: "YOUR RANK",
      value: formattedRank,
    },
    {
      image: clipboardIcon,
      text: "PERCENTILE",
      value: formattedPercentile,
    },
    {
      image: correctIcon,
      text: "CORRECT ANSWER",
      value: formattedScore,
    },
  ];

  return (
    <ChildrenWrapper>
      <ChildInnerWrapper>
        <ChildBody>
          <h3 style={{ color: "black" }}>Quick Statistics</h3>
        </ChildBody>
        <StatisticItem>
          {data.map((record, index) => (
            <StatisticItem key={index}>
              <ImageContainer>
                <Image src={record.image} alt="picture" />
              </ImageContainer>
              <StatisticItem style={{ flexDirection: "column" , borderRight: `${index !== data.length-1 && "1px solid #EBF0F5" }`}}>
                <StatisticValue>{record.value}</StatisticValue>
                <p>{record.text}</p>
              </StatisticItem>
            </StatisticItem>
          ))}
        </StatisticItem>
      </ChildInnerWrapper>
    </ChildrenWrapper>
  );
}

export default QuickStatistics;
