import styled from "styled-components";
import dashboardIcon from "../assets/dashboard.svg";
import skillTestIcon from "../assets/skilltest.svg";
import internshipsIcon from "../assets/internships.svg";

const Container = styled.div`
flex: 1 1;
max-width: 250px;
border-right: 1px solid #ebf0f5;
height: calc(100vh - 75px);
`
const Wrapper = styled.div`
    position: sticky;
    top: 0;
    z-index: 10;
`

const PanelContainer = styled.div`
margin: 0;
    height: 100%;
    width: 100%;
    min-width: 250px;
    max-width: 260px;
    padding-top: 32px;
    display: flex;
    flex-direction: column;
`

const Link = styled.a`

`

const PanelData = styled.div`
display: flex;
    white-space: nowrap;
    width: 95%;
    font-size: 1rem;
    color: #566474;
    font-family: "DM Sans";
    text-transform: capitalize;
    align-items: center;
    cursor: pointer;
    padding: 8px 0 8px 50px;
    grid-gap: 10px;
    gap: 10px;
    margin-bottom: 3px;

    &:hover{
        width: 100%;
    background: #f7f8fa;
    border-radius: 0 100px 100px 0;
    }
`
const Image = styled.img`

`;

function SideBar() {

    return (
        <Container>
            <Wrapper>
                <PanelContainer>
                    <Link href="/">
                        <PanelData>
                            <div>
                                <Image src={dashboardIcon} alt="dashboard" />
                            </div>
                            Dashboard
                        </PanelData>
                    </Link>
                    <Link href="/">
                        <PanelData style={{
                            background: "#f7f8fa",
                            borderRadius: "0 100px 100px 0",
                            color: "#0b66ef",
                            fontWeight: 700
                        }}>
                            <div>
                                <Image src={skillTestIcon} alt="skill-test" />
                            </div>
                            Skill Test
                        </PanelData>
                    </Link>
                    <Link href="/">
                        <PanelData>
                            <div>
                                <Image src={internshipsIcon} alt="internships" />
                            </div>
                            Internships
                        </PanelData>
                    </Link>
                </PanelContainer>
            </Wrapper>
        </Container>

    )
}

export default SideBar