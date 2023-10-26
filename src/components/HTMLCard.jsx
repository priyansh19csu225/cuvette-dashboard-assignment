import styled from "styled-components";
import htmlIcon from "../assets/html.svg";
import { ChildBody, ChildInnerWrapper, ChildrenWrapper } from "./ChildrenWrapper";


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

function HTMLCard({openDialog}) {

  
  return (
   
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
                <UpdateBtn onClick={openDialog}>
                    Update
                </UpdateBtn>
                </ChildRight>
            </ChildBody>
        </ChildInnerWrapper>
    </ChildrenWrapper>
   
   
  )
}

export default HTMLCard