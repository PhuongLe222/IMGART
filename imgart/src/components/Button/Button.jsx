import styled from "styled-components/macro";
const StyledButton = styled.button`

border-radius: 5px;
background-color: #F9E7DE;
border: none;
margin: 30px;
color: #CC5252;
&:hover {
    background-color: #F3B95F;
}
${({Height, Width}) => {
    return `
        height: ${Height}px;
        width: ${Width}px;
  `;
  }};
`;
export const Button = ({
    Height,
    Width,
    children,
    onClick,
}) => {
    return (
        <StyledButton
            onClick = {onClick}
            Height = {Height}
            Width = {Width}
        >
            {children}
        </StyledButton>
    );
};