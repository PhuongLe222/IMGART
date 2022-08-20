import styled from "styled-components/macro";
const StyledButton = styled.button`
  border-radius: 5px;
  background-color: #f9e7de;
  border: none;
  color: #cc5252;
  &:hover {
    background-color: #f3b95f;
  }
  ${({ Height, Width, Margin, fontSize, fontWeight, lineHeight }) => {
    return `
        height: ${Height}px;
        width: ${Width}px;
        margin: ${Margin};
        font-size: ${fontSize}px;
        font-weight: ${fontWeight}px;
        line-height: ${lineHeight}px;
  `;
  }};
`;
export const Button = ({
  Height,
  Width,
  children,
  onClick,
  Margin,
  fontSize,
  fontWeight,
  lineHeight,
}) => {
  return (
    <StyledButton
      onClick={onClick}
      Height={Height}
      Width={Width}
      Margin={Margin}
      fontSize={fontSize}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
    >
      {children}
    </StyledButton>
  );
};
