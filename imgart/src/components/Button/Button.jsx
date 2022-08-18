import styled from "styled-components/macro";
const StyledButton = styled.button`
  border-radius: 5px;
  background-color: #f9e7de;
  border: none;
  color: #cc5252;
  &:hover {
    background-color: #f3b95f;
  }
  ${({ Height, Width, Margin, FontFamily, FontSize }) => {
    return `
        height: ${Height}px;
        width: ${Width}px;
        margin: ${Margin};
        font-family: ${FontFamily};
        font-size: ${FontSize};
  `;
  }};
`;
export const Button = ({ Height, Width, children, onClick, Margin, FontFamily, FontSize }) => {
  return (
    <StyledButton 
      onClick={onClick} 
      Height={Height} 
      Width={Width} 
      Margin={Margin} 
      FontFamily={FontFamily} 
      FontSize={FontSize}
    >
      {children}
    </StyledButton>
  );
};
