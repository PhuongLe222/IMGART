import styled from "styled-components/macro";
const StyledButton = styled.button`
  border-radius: 5px;
  background-color: #f9e7de;
  border: none;
  margin: 30px;
  color: #cc5252;
  &:hover {
    background-color: #f3b95f;
  }
  ${({ Height, Width, Fsize }) => {
    return `
        height: ${Height}px;
        width: ${Width}px;
        font-size: ${Fsize}px;
  `;
  }};
`;
export const Button = ({ Height, Width, Fsize, children, onClick }) => {
  return (
    <StyledButton onClick={onClick} Height={Height} Width={Width} Fsize={Fsize}>
      {children}
    </StyledButton>
  );
};
