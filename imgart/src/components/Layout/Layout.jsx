import { Header } from "../Header";
import { Footer } from "../Footer";
import styled from "styled-components";
const LayoutStyled = styled.div`
  background-color: #8bb6e0;
  margin-top: 90px;
`;

export const PrimaryLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <LayoutStyled>{children}</LayoutStyled>
      <Footer />
    </div>
  );
};
