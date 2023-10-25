import styled from "styled-components";
import cuvettelogo  from "../assets/logo.svg";
import profileImage from "../assets/profileimage.svg";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 75px;
  padding: 0px 40px;
  margin: 0px;
  border-bottom: 1px solid #EBF0F5;
  
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
 
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: left;
`;

const Logo = styled.img`
  
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
 
`;

const Link = styled.a`
textDecorationLine: none;
`

const UnorderedList = styled.ul`
    display: flex;
    align-items: center;
    grid-gap: 30px;
    gap: 30px;
`

const MenuItem = styled.li`
display: flex;
    align-items: center;
`

const Profile = styled.div`
display: flex;
    align-items: center;
    padding: 10px;
    outline: none;
    cursor: pointer;
    grid-gap: 15px;
    gap: 15px;
    background-color: #fff;
    border: 1.5px solid #ebf0f5;
    border-radius: 8px;
    position: relative;
    min-width: 140px;
`
const ProfileImage = styled.img`
width: 30px;
    height: 30px;
    border-radius: 50%;
`

const ProfileName = styled.div`
font-weight: 700;
font-size: .9rem;
`

function Header() {

  return (
    <Container>
      <Wrapper>
          <Left>
        <Link href="/">
            <Logo src={cuvettelogo} alt="Logo" />   
        </Link>
          </Left>
        <Right>
          <UnorderedList>
            <MenuItem>
            <Profile>
            <ProfileImage src={profileImage} alt="profileImage" />
            <ProfileName>
              Siddharth Jain
            </ProfileName>
            </Profile>
            </MenuItem>
          </UnorderedList>
        </Right>
      </Wrapper>
    </Container>

  )
}

export default Header