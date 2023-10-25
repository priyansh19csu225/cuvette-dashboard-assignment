import styled from "styled-components";
import SideBar from "../components/SideBar";
import SyllabusWiseAnalysis from "../components/SyllabusWiseAnalysis";
import { ChildContainer } from "../components/ChildrenWrapper";
import HTMLCard from "../components/HTMLCard";
import QuickStatistics from "../components/QuickStatistics";

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
flex: 1.54 1;
    padding-top: 30px;
  
`

const Title = styled.span`
font-size: .875rem;
    color: #566474;
`

function SkillTest() {

    return (
        <Container>
            <SideBar />
            <PageContentContainer>
                <PageContentWrapper>
                    <MiddleSection>
                        <Title>
                            Skill Test
                        </Title>
                        <ChildContainer>
                            <HTMLCard />
                            <QuickStatistics />
                        </ChildContainer>
                    </MiddleSection>
                    <RightSection>
                        <SyllabusWiseAnalysis />
                    </RightSection>
                </PageContentWrapper>
            </PageContentContainer>
        </Container>

    )
}

export default SkillTest