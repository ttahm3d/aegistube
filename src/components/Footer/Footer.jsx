import styled from "styled-components";
import { MainContainer } from "../../styles/utils";
import AegisTube from "../../assets/AegisTube.svg";

export default function () {
  return (
    <Footer className="p-y-2">
      <MainContainer>
        <Logo>
          <img src={AegisTube} alt="logo" />
        </Logo>
      </MainContainer>
    </Footer>
  );
}

const Footer = styled.footer`
  box-shadow: 0 0 4px ${(props) => props.theme.colors.gray3};
  margin-top: auto;
`;

const Logo = styled.div``;
