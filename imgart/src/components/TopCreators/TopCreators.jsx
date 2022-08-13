import styled from "styled-components/macro";
import "./TopCreators.css";
const StyledP = styled.p`
    color: #FFFFFF;
    font-family: DM Mono;
    text-align: left;
${({ Fsize, Display, Valign}) => {
    return `
        font-size: ${Fsize}px;
        display: ${Display};
        vertical-align: ${Valign};
  `;
  }};
`;
const P = ({
    children,
    FSize,
    Display,
    Valign
})=>{
    return (
        <StyledP 
            Fsize={FSize} 
            Display={Display} 
            Valign={Valign}
        >
            {children}
        </StyledP>
    )
}
export const TopCreator = ({src, author, price}) => {
    return (
       <div className="top-creator"> 
        <img className="NFT-image" src={src} alt="NFT"></img>
        <div className="right-block">
            <P FSize={20} Display={"block"} Valign={"super"}> {author} </P>
            <img className="right-block__price-icon-img" src="Ellipse 6.png" alt="price-icon"></img>
            <P FSize={15} Display={"inline"} Valign={"super"}> {price} ICX </P>
        </div>
       </div> 
    )
}


