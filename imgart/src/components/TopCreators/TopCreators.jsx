import styled from "styled-components/macro";
import "./TopCreators.css";
import NFTpicture2 from "../../asset/image 3.png";

const StyledP = styled.p`
  color: #ffffff;
  font-family: DM Mono;
  text-align: left;
  ${({ Fsize, Display, Valign }) => {
    return `
        font-size: ${Fsize}px;
        display: ${Display};
        vertical-align: ${Valign};
  `;
  }};
`;
const P = ({ children, FSize, Display, Valign }) => {
  return (
    <StyledP Fsize={FSize} Display={Display} Valign={Valign}>
      {children}
    </StyledP>
  );
};
export const TopCreator = ({ src, author, price }) => {
  return (
    <div className="top-creator">
      <img className="NFTs-image" src={src} alt="NFT"></img>
      <div className="right-block">
        <P FSize={16} Display={"block"} Valign={"super"}>
          {" "}
          {author}{" "}
        </P>
        <img
          className="right-block__price-icon-img"
          src="Ellipse 6.svg"
          alt="price-icon"
        ></img>
        <P FSize={13} Display={"inline"} Valign={"super"}>
          {" "}
          {price} ICX{" "}
        </P>
      </div>
    </div>
  );
};
