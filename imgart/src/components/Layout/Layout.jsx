import { Header } from "../Header";
import { Footer } from "../Footer";
import styled from "styled-components";
const LayoutStyled = styled.div`
  background-color: #8BB6E0;
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
