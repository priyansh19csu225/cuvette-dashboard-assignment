import styled from "styled-components";
import SideBar from "../components/SideBar";
import SyllabusWiseAnalysis from "../components/SyllabusWiseAnalysis";
import { ChildContainer } from "../components/ChildrenWrapper";
import HTMLCard from "../components/HTMLCard";
import QuickStatistics from "../components/QuickStatistics";
import QuestionAnalysis from "../components/QuestionAnalysis";
import ComparisonGraph from "../components/ComparisonGraph";
import { Dialog } from "../components/Dialog";
import { useState } from "react";
import htmlIcon from "../assets/html.svg";
import arrowIcon from "../assets/arrow.svg";

const Container = styled.div`
width: 100%;
display: flex;
grid-gap: 30px;
gap: 30px;
min-height: 85vh;
height: 100%;
padding-right: 40px;
`

const PageContentContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
`
const PageContentWrapper = styled.div`
display: flex;
grid-gap: 30px;
gap: 30px;
`
const MiddleSection = styled.div`
flex: 3.3 1;
padding-top: 30px;
`
const RightSection = styled.div`
display: flex;
    flex-direction: column;
    flex: 1.54 1;
    padding-top: 30px;
    gap: 30px;
  
`

const Title = styled.span`
font-size: .875rem;
    color: #566474;
`

const UpdateDialogHeading = styled.div`
display:flex;
width:100%;
justify-content:space-between;
align-items:center;
padding-bottom: 30px;
`
const UpdateDialogImage = styled.img`
width:24px;
`

const UpdateDialogBody = styled.div`
padding: 30px 0;
gap: 30px;
display: grid;
`
const DynamicInputWrapper = styled.div`
display:flex;
justify-content: space-between;
align-items:center;
width:100%;
`
const BlockElement = styled.div`
display:flex;
gap: 10px;
align-items: center;
color: #566474
`
const CircularNumber = styled.div`
width: 24px;
    height: 24px;
    background-color: #142683;
    color: white;
    border-radius: 50%;
    text-align: center;
    font-size: 1rem;
`

const DynamicText = styled.p`
font-size: 1rem;
`

const DynamicInputBar = styled.input`
width: 144px;
padding:10px;
border: 3px solid #142683;
color: #142683;
font-weight: 700;
border-radius: 4px;
`

function SkillTest() {
    const [isDialogOpen, setDialogOpen] = useState(false);
    const [isUpdated,setIsUpdated] = useState(false);
    const openDialog = () => {
        setIsUpdated(false);
        setDialogOpen(true);
    }
    const closeDialog = () => setDialogOpen(false);

  
    const [prevData, setPrevData] = useState({
        rank: 12890,
        percentile: 37,
        score: 7,
      });
    
      const [data, setData] = useState({
        rank: prevData.rank,
        percentile: prevData.percentile,
        score: prevData.score,
      });

    
  const dynamicInputs = [
    {
      text: "rank",
      value: data.rank,
    },
    {
      text: "percentile",
      value: data.percentile,
    },
    {
      text: "score",
      value: data.score,
    },
  ];

  const handleInputChange = (event, index) => {
    const updatedData = { ...data };
    updatedData[dynamicInputs[index].text] = event.target.value;
    if(updatedData.score>15) updatedData.score=15;
    if(updatedData.percentile>100) updatedData.percentile=100;
    setData(updatedData);
  };

  const handleUpdate = () => {
    setPrevData(data);
    setIsUpdated(true);
    closeDialog();
  };

  const handleCancel = () => {
  
  closeDialog();
  }

  const UpdateBtn = styled.button`
display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 20px 8px 16px;
    border: 1px solid #142683;
    font-size: 1rem;
    border-radius: 5px;
    font-weight: 700;
    cursor: pointer;
    font-style: normal;
    margin: 3px;
    transition: .1s;
    white-space: nowrap;
    background-color: #142683;
    color: #fff;

    &:hover{
        background-color: #1e38c1;
    }
    &:active{
        transform: translateY(2px);
    }
`
const CancelBtn = styled.button`
display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 20px 8px 16px;
    border: 1px solid #142683;
    font-size: 1rem;
    border-radius: 5px;
    font-weight: 700;
    cursor: pointer;
    font-style: normal;
    margin: 3px;
    transition: .1s;
    white-space: nowrap;
    background-color: #fff;
    color: #142683;

    &:hover{
        background-color: #ccc;
    }
    &:active{
        transform: translateY(2px);
    }

`
           

    return (
<>
        <Container>
            <SideBar />
            <PageContentContainer>
                <PageContentWrapper>
                    <MiddleSection>
                        <Title>
                            Skill Test
                        </Title>
                        <ChildContainer>
                            <HTMLCard openDialog={openDialog}/>
                            <QuickStatistics
                  score={isUpdated ? data.score : prevData.score}
                  percentile={isUpdated ? data.percentile : prevData.percentile}
                  rank={isUpdated ? data.rank : prevData.rank}
                />
                <ComparisonGraph
                  percentile={isUpdated ? data.percentile : prevData.percentile}
                  avg={69}
                />
                        </ChildContainer>
                    </MiddleSection>
                    <RightSection>
                        <SyllabusWiseAnalysis />
                        <QuestionAnalysis
                  score={isUpdated ? data.score : prevData.score} />
                    </RightSection>
                </PageContentWrapper>
            </PageContentContainer>
        </Container>
                     
      <Dialog open={isDialogOpen} onClose={closeDialog}>
        <UpdateDialogHeading>
        <h1>Update Scores</h1>
        <UpdateDialogImage src={htmlIcon} alt="html-image"/>
        </UpdateDialogHeading>
       <hr style={{color:"#EBF0F5"}}></hr>
        <UpdateDialogBody>
        {dynamicInputs.map((input, index) => (
            <DynamicInputWrapper key={index}>
              <BlockElement>
                <CircularNumber>{index + 1}</CircularNumber>
                <DynamicText>Update your <b>{input.text}</b></DynamicText>
              </BlockElement>
              <DynamicInputBar
                value={input.value}
                onChange={(event) => handleInputChange(event, index)}
                type="number"
                min="0"
              />
            </DynamicInputWrapper>
          ))}
        </UpdateDialogBody>
        <hr style={{color:"#EBF0F5"}}></hr>
        <div style={{display:"flex", justifyContent:'flex-end' , margin: '20px 30px 0px 0px'}}>
            <CancelBtn onClick={handleCancel}>
                Cancel
            </CancelBtn>
            <UpdateBtn onClick={handleUpdate}>
                 Save
                 <img src={arrowIcon} alt="save" style={{marginLeft:"4px"}}></img>
                 </UpdateBtn>
        </div>
      </Dialog>

       </>
    )
}

export default SkillTest