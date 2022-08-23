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
  cursor: pointer;
  ${({ Height, Width, Margin, FontFamily, FSize, bgColor, FWeight }) => {

    return `
        height: ${Height};
        width: ${Width};
        margin: ${Margin};
        font-family: ${FontFamily};
        font-size: ${FSize};
        font-weight: ${FWeight};
        background-color: ${bgColor};
  `;
  }};
`;

export const Button = ({ Height, Width, children, onClick, Margin, FontFamily, FSize, FWeight,  bgColor }) => {
  return (
    <StyledButton 
      onClick={onClick} 
      Height={Height} 
      Width={Width} 
      Margin={Margin} 
      FontFamily={FontFamily} 
      FSize={FSize}
      FWeight={FWeight}
      bgColor={bgColor}
    >
      {children}
    </StyledButton>
  );
};