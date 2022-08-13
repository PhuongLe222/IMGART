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
  ${({ Height, Width }) => {
    return `
        height: ${Height}px;
        width: ${Width}px;
  `;
  }};
`;
export const Button = ({ Height, Width, children, onClick }) => {
  return (
    <StyledButton onClick={onClick} Height={Height} Width={Width}>
      {children}
    </StyledButton>
  );
};
