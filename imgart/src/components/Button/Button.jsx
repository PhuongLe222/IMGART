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
  ${({ Height, Width, bgColor }) => {
    return `
        height: ${Height}px;
        width: ${Width}px;
        background-color: ${bgColor};
  `;
  }};
`;
export const Button = ({ Height, Width, bgColor, children, onClick }) => {
  return (
    <StyledButton
      onClick={onClick}
      Height={Height}
      Width={Width}
      bgColor={bgColor}
    >
      {children}
    </StyledButton>
  );
};
