import styled from "styled-components";
import { MainContainer } from "../../styles/utils";
import AegisTube from "../../assets/AegisTube.svg";

export default function () {
  return (
    <Header>
      <MainContainer>
        <Navbar>
          <Logo>
            <img src={AegisTube} alt="logo" />
          </Logo>
          <LoginBtn>Login</LoginBtn>
        </Navbar>
      </MainContainer>
    </Header>
  );
}

const Header = styled.header`
  box-shadow: 0 0 4px ${(props) => props.theme.colors.gray6};
  padding: 0.75rem 0;
`;

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div``;

const LoginBtn = styled.button`
  background-color: ${(props) => props.theme.colors.orange4};
  border: 1px solid ${(props) => props.theme.colors.orange6};
  color: ${(props) => props.theme.colors.orange11};
  outline: 2px solid transparent;
  outline-offset: 2px;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;

  :hover {
    background-color: ${(props) => props.theme.colors.orange5};
  }
`;
