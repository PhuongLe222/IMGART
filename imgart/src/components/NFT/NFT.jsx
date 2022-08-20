import styled from "styled-components/macro";
import "./NFT.css";
import { Link } from "react-router-dom";

const StyledP = styled.p`
  color: #ffffff;
  font-family: DM Mono;
  font-style: normal;
  line-height: 13px;
  ${({ Fsize, PLeft, Display, Valign }) => {
    return `
        font-size: ${Fsize}px;
        padding-left: ${PLeft}px;
        display: ${Display};
        vertical-align: ${Valign};
  `;
  }};
`;
const P = ({ children, FSize, PLeft, Display, Valign }) => {
  return (
    <StyledP Fsize={FSize} PLeft={PLeft} Display={Display} Valign={Valign}>
      {children}
    </StyledP>
  );
};
export const NFT = ({ src, name, avt, author, price, link }) => {
  console.log(link);
  return (
    <Link to={link ? link : ""}>
      <div className="NFT">
        <img className="NFT-image" src={src} alt="NFT"></img>
        <img class="avatar" src={avt} alt="avatar"></img>
        <P FSize={18} PLeft={30} Display={"block"} Valign={"super"}>
          {name}
        </P>
        <P FSize={15} PLeft={30} Display={"block"} Valign={"super"}>
          {" "}
          Created by {author}{" "}
        </P>
        <span>
          <img class="logo-coin" src="Ellipse 6.png" alt="logo IconX"></img>
          <span>
            <P FSize={16} PLeft={0} Display={"inline"} Valign={"super"}>
              {" "}
              {price} ICX{" "}
            </P>
          </span>
        </span>
      </div>
    </Link>
  );
};
