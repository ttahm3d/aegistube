import styled from "styled-components";

const Page = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContainer = styled.div`
  width: min(100vw - 5rem, 95em);
  margin: 0 auto;
`;

export { Page, MainContainer };
