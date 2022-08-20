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

  ${({ Height, Width, Margin, FontFamily, FontSize, bgColor }) => {
    return `
        height: ${Height}px;
        width: ${Width}px;
        margin: ${Margin};
        font-family: ${FontFamily};
        font-size: ${FontSize};
        background-color: ${bgColor}
  `;
  }};
`;

export const Button = ({
  Height,
  Width,
  children,
  onClick,
  Margin,
  FontFamily,
  FontSize,
  bgColor,
}) => {
  return (
    <StyledButton
      onClick={onClick}
      Height={Height}
      Width={Width}
      Margin={Margin}
      FontFamily={FontFamily}
      FontSize={FontSize}
      bgColor={bgColor}
    >
      {children}
    </StyledButton>
  );
};
