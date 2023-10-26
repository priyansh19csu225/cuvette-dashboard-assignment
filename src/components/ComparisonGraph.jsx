import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
} from "chart.js";

import annotationPlugin from "chartjs-plugin-annotation";
import { ChildBody, ChildInnerWrapper, ChildrenWrapper } from './ChildrenWrapper';
import styled from 'styled-components';
import spikeIcon from "../assets/spike.svg";


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  annotationPlugin
);

const dataPoints = [
  1, 2, 3, 4, 5, 6, 7, 8, 10, 10, 10, 12, 15, 20, 25, 30, 35, 40, 44, 47, 50,
  54, 56, 58, 60, 62, 63, 64, 65, 65, 65, 65, 65, 64, 63, 62, 60, 59, 58, 56, 55, 53, 52, 50, 49, 47,
  44, 40, 35, 30, 25, 20, 15, 12, 10, 10, 10, 10, 10, 12, 15, 20, 25, 30, 35, 40, 44, 47, 49, 50,
  52, 53, 55, 56, 56, 56, 56, 56, 55, 53, 52, 50, 49, 47, 44, 40, 35, 30, 25, 20, 15, 12, 10, 8, 7, 6, 5, 3, 2, 1
];

let percentArray = [];

for (let i = 0; i <= 100; i++) {
  percentArray.push(i + '%');
}

const ranges = [0, 20, 40, 60, 80, 100];

const ComparisonGraph = ({ score, avg }) => {
  let xMin = 0;
  let xMax = 0;

  for (let i = 0; i < ranges.length - 1; i++) {
    if (score >= ranges[i] && score < ranges[i + 1]) {
      xMin = ranges[i];
      xMax = ranges[i + 1];
      break;
    }
  }

  const data = {
    labels: percentArray,
    datasets: [
      {
        label: 'Your Score',
        pointRadius: 6,
        pointBackgroundColor: '#438AF6',
        data: [{ x: `${score}%`, y: dataPoints[score] }],
      },
      {
        label: 'Average Score',
        pointRadius: 6,
        pointBackgroundColor: '#FF9142',
        data: [{ x: `${avg}%`, y: dataPoints[avg] }],
      },
      {
        label: 'Graph',
        fill: false,
        lineTension: 0.3,
        backgroundColor: '#C8D6E5',
        borderColor: '#C8D6E5',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: '#C8D6E5',
        pointBackgroundColor: '#C8D6E5',
        pointBorderWidth: 1,
        pointHoverRadius: 6,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 0,
        pointHitRadius: 10,
        data: dataPoints,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      annotation: {
        annotations: {
          verticalLine: {
            type: 'line',
            xMin: score,
            xMax: score,
            borderColor: 'rgba(200,214,229,1)',
            borderWidth: 2,
            borderDash: [5, 5],
          },
          box1: {
            type: "box",
            xMin: xMin,
            xMax: xMax,
            yMin: 0,
            yMax: 100,
            backgroundColor: 'rgba(200,214,229,0.1)',
            borderColor: 'rgba(200,214,229,0.1)'
          },
          verticalLine2: {
            type: 'line',
            xMin: avg,
            xMax: avg,
            borderColor: 'rgba(255,145,66,1)',
            borderWidth: 2,
            borderDash: [5, 5],
          },
        }
      },
      tooltip: {
        displayColors: false,
        callbacks: {
          title: function (tooltipItems, data) {
            return `${tooltipItems[0].label} Percentile`;
          },
          label: function (tooltipItem, data) {
          
            if (tooltipItem.parsed.x === score && tooltipItem.datasetIndex === 2)
              return 'Your Score';
            else if (tooltipItem.parsed.x === avg && tooltipItem.datasetIndex === 2)
              return 'Average Score';
            else return '';
          },
          labelTextColor: function () {
            return "#ccc"
          }
        }
      }
    },
    scales: {
      y: {
        display: false
      },
      x: {
        ticks: {
          callback: (val, index) => {
            return index % 20 === 0 ? val : undefined;
          },
        },
      },
    },
  };

  const ComparisonText = styled.p`
font-size: 0.87rem;
`

const ImageContainer = styled.div`
position: relative;

flex:1;

`

const Image = styled.img`
position:absolute;
top:0;
padding:12px;
border-radius:50%;
background-color: #EBF0F5;
right:0;
bottom:0;
margin: auto;
`

  return (
    <ChildrenWrapper>
      <ChildInnerWrapper>
        <ChildBody>
          <div style={{flex:2}}>
            <h3 style={{ color: "black", paddingBottom: 30 }}>Comparison Graph</h3>
            <ComparisonText>
              <b>
                You scored {score}% percentile
              </b>&nbsp;
              {score < avg && (
                `which is lower than the average percentile ${avg}% of all the engineers who took this assessment`
              )}
            </ComparisonText>
          </div>
          <ImageContainer>
            <Image src={spikeIcon} alt="image" />
          </ImageContainer>
        </ChildBody>
        <Line data={data} options={options} height="100px" width="300px" />
      </ChildInnerWrapper>
    </ChildrenWrapper>
  );
};

export default ComparisonGraph;
