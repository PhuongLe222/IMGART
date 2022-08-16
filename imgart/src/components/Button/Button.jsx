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
  ${({ Height, Width, bgColor, margin }) => {
    return `
        height: ${Height}px;
        width: ${Width}px;       
        background-color: ${bgColor};
        margin: ${margin}px;
  `;
  }};
`;
export const Button = ({
  Height,
  Width,
  bgColor,
  margin,
  children,
  onClick,
}) => {
  return (
    <StyledButton
      onClick={onClick}
      Height={Height}
      Width={Width}
      bgColor={bgColor}
      margin={margin}
    >
      {children}
    </StyledButton>
  );
};
