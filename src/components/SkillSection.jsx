import styled from "styled-components";
import htmlIcon from "../assets/html.svg";

const Container = styled.div`
margin-top: 30px;
    display: flex;
    flex-direction: column;
    grid-gap: 30px;
    gap: 30px;
`

const ChildrenWrapper = styled.div`
border-radius: 10px;
    display: flex;
    flex-direction: column;
    background-color: #f7f8fa;
`
const ChildInnerWrapper = styled.div`
width: 100%;
    background-color: #fff;
    min-width: 620px;
    border: 1px solid #ebf0f5;
   
    box-sizing: border-box;
  
    display: flex;
    flex-direction: column;
    grid-gap: 30px;
    gap: 30px;
    color: #9eaab7;
    padding: 28px;
    position: relative;
border-bottom: 1px solid #ebf0f5;
border-radius: 10px;
`
const ChildBody = styled.div`
display: flex;
    justify-content: space-between;
`
const ChildLeft = styled.div`
display: flex;
`
const ChildRight = styled.div`
display: flex;
    grid-gap: 20px;
    gap: 20px;
    justify-content: flex-end;
    align-items: center;
`

const HTMLImage = styled.img`
height: 47px;
width: 47px;

`
const HTMLContent = styled.div`
display: block;
margin-left: 16px;
`
const UpdateBtn = styled.button`
display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 20px 8px 16px;
    width: 100%;
    border: none;
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

function SkillSection() {
  return (
   <Container>
    <ChildrenWrapper>
        <ChildInnerWrapper>
            <ChildBody>
                <ChildLeft>
                <HTMLImage src={htmlIcon} alt="logo" />
                <HTMLContent>
                    <h3 style={{color: "black"}}>Hypertext Markup Language</h3>
                    <p>Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021</p>
                </HTMLContent>
                </ChildLeft>
                <ChildRight>
                <UpdateBtn>
                    Update
                </UpdateBtn>
                </ChildRight>
            </ChildBody>
        </ChildInnerWrapper>
    </ChildrenWrapper>
    <ChildrenWrapper>
        <ChildInnerWrapper>
            <ChildBody>
            <h3 style={{color: "black"}}>Quick Statistics</h3>
            </ChildBody>
        </ChildInnerWrapper>
    </ChildrenWrapper>
   </Container>
  )
}

export default SkillSection