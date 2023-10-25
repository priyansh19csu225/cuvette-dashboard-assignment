import styled from 'styled-components';
import { ChildBody, ChildInnerWrapper, ChildrenWrapper } from './ChildrenWrapper';
import ProgressBar from './ProgressBar';

const SyllabusAnalysisHeader = styled.h3`
  color: black;
`;

const ProgressBarTitle = styled.div`
  padding: 2px;
`;

const ProgressValue = styled.div`
  flex: 1;
  display: flex;
  align-self: flex-end;
  justify-content: flex-end;
  font-weight: 700;
  color : ${(props) => props.color};
`;

const FlexContainer = styled.div`
display: flex;
width: 100%;
flex-direction: column;
gap: 30px;
`

const FlexItem = styled.div`
  
  flex: 2 1;
`;

const flexItems = [
    {
        title: "HTML Tools, Forms, History",
        foregroundColor: "#438AF6",
        backgroundColor: "#ccc",
        percentage: 80,
        textcolor: "#438AF6",
    },
    {
        title: "Tags & References in HTML",
        foregroundColor: "#FF9142",
        backgroundColor: "#ccc",
        percentage: 60,
        textcolor: "#FF9142",
    },
    {
        title: "Tables & CSS Basics",
        foregroundColor: "#FB5E5E",
        backgroundColor: "#ccc",
        percentage: 24,
        textcolor: "#FB5E5E",
    },
    {
        title: "Tables & CSS Basics",
        foregroundColor: "#2EC971",
        backgroundColor: "#ccc",
        percentage: 96,
        textcolor: "#2EC971",
    },
];

function SyllabusWiseAnalysis() {
    return (
        <ChildrenWrapper>
            <ChildInnerWrapper>
                <SyllabusAnalysisHeader>Syllabus Wise Analysis</SyllabusAnalysisHeader>
                <FlexContainer>
                {flexItems.map((item, index) => (
            <ChildBody key={index}>
              <FlexItem>
                <ProgressBarTitle>{item.title}</ProgressBarTitle>
                <ProgressBar foregroundColor={item.foregroundColor} backgroundColor={item.backgroundColor} percentage={item.percentage} />
              </FlexItem>
              <ProgressValue color={item.textcolor}>{item.percentage}%</ProgressValue>
            </ChildBody>
          ))}
                </FlexContainer>
            </ChildInnerWrapper>
        </ChildrenWrapper>
    );
}

export default SyllabusWiseAnalysis;
