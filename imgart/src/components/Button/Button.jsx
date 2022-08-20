import styled from "styled-components/macro";
const StyledButton = styled.button`
  border-radius: 5px;
  background-color: #f9e7de;
  border: none;
  color: #cc5252;
  &:hover {
    background-color: #f3b95f;
  }
  ${({ Height, Width, Margin, FontFamily, FSize, lineHeight, FWeight }) => {
    return `
        height: ${Height}px;
        width: ${Width}px;
        margin: ${Margin};
        font-family: ${FontFamily};
        font-size: ${FSize};
        font-weight: ${FWeight};
        line-height: ${lineHeight};
  `;
  }};
`;
export const Button = ({ Height, Width, children, onClick, Margin, FontFamily, FSize, FWeight, lineHeight }) => {
  return (
    <StyledButton 
      onClick={onClick} 
      Height={Height} 
      Width={Width} 
      Margin={Margin} 
      FontFamily={FontFamily} 
      FSize={FSize}
      FWeight={FWeight}
      lineHeight={lineHeight}
    >
      {children}
    </StyledButton>
  );
};
