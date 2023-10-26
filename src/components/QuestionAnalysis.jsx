import styled from 'styled-components';
import { ChildBody, ChildInnerWrapper, ChildrenWrapper } from './ChildrenWrapper';
import { Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from "chart.js";
import targetIcon from "../assets/target.svg";

ChartJS.register(ArcElement, Tooltip, Legend);

const QuestionAnalysisHeader = styled.h3`
  color: black;
`;

const ScoreHeader = styled.p`
font-weight: 700;
color: #438AF6;
`
const ScoreText = styled.p`
font-size: 0.87rem;
`
const DoughNutContainer = styled.div`
height: 200px;
width: 200px;
margin: auto;
position: relative
`

const ImageOverLay = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
   
position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  max-width: 100%;
  max-height: 100%;
`

function QuestionAnalysis({ score }) {
    
    const data = {
        labels: ['Correct', 'Incorrect'],
        datasets: [
            {
                backgroundColor: [
                    '#438AF6',
                    'rgba(67,138,246,0.1)',
                ],
                hoverBackgroundColor: [
                    '#438AF6',
                    'rgba(67,138,246,0.1)',
                ],
                data: [score, 15-score]
            }
        ]
    }


    return (
        <ChildrenWrapper>
            <ChildInnerWrapper>
                <ChildBody>
                    <QuestionAnalysisHeader>Question Analysis</QuestionAnalysisHeader>
                    <ScoreHeader>
                        {score < 10 ? `${"0"}${score}` : score} / 15
                    </ScoreHeader>
                </ChildBody>
                <ScoreText>

                    <b>
                        You scored {score} question correct out of 15.
                    </b>&nbsp;
                    {score < 15 && (

                        "However it still needs some improvements"
                    )

                    }
                </ScoreText>
                <DoughNutContainer>

                    <Doughnut
                        data={data}
                        options={{
                            plugins: {
                                legend: {
                                    display: false
                                },
                            }
                        }}

                    />

                    <ImageOverLay src={targetIcon} alt="Center Image" />

                </DoughNutContainer>

            </ChildInnerWrapper>
        </ChildrenWrapper>
    );
}

export default QuestionAnalysis;
