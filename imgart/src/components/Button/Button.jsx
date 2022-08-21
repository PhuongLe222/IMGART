import styled from "styled-components/macro";
const StyledButton = styled.button`
  border-radius: 5px;
  background-color: #f9e7de;
  border: none;
  color: #cc5252;
  &:hover {
    background-color: #f3b95f;
  }
  ${({ Height, Width, Margin, FSize, FWeight, lineHeight, FontFamily }) => {
    return `
        height: ${Height};
        width: ${Width};
        margin: ${Margin};
        font-size: ${FSize};
        font-weight: ${FWeight}px;
        line-height: ${lineHeight}px;
        font-family: ${FontFamily};
  `;
  }};
`;
export const Button = ({
  Height,
  Width,
  children,
  onClick,
  Margin,
  FSize,
  FWeight,
  lineHeight,
  FontFamily,
}) => {
  return (
    <StyledButton
      onClick={onClick}
      Height={Height}
      Width={Width}
      Margin={Margin}
      FSize={FSize}
      FWeight={FWeight}
      lineHeight={lineHeight}
      FontFamily={FontFamily}
    >
      {children}
    </StyledButton>
  );
};
