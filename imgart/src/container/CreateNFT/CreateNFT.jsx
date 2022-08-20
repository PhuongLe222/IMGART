import "./CreateNFT.css";
import { Button } from "../../components/Button/Button";
import { TopCreator } from "../../components/TopCreators/TopCreators";

const CreateNFT = () => {
  let NFTitem = [
    {
      src: "image 3.png",
      author: "hx4568...42b35e",
      price: "19,400.50",
    },
    {
      src: "image 3.png",
      author: "hx4568...42b35e",
      price: "19,400.50",
    },
    {
      src: "image 3.png",
      author: "hx4568...42b35e",
      price: "19,400.50",
    },
    {
      src: "image 3.png",
      author: "hx4568...42b35e",
      price: "19,400.50",
    },
    {
      src: "image 3.png",
      author: "hx4568...42b35e",
      price: "19,400.50",
    },
  ];
  return (
    <div>
      <div className="left">
        <p className="title">Create & Sell Your NFTs</p>
        <div className="upload">
          <img className="picture" src="upload.png" alt="UploadPicture" />
          <p className="textUpload">Upload</p>
          <div className="framedes">
            <p className="desUpload">
              {" "}
              Upload your work, customize your NFTs with properties, stats, and
              unlockable content.
            </p>
          </div>
        </div>
        <div className="btn-connect">
          <Button
            Height={"61"}
            Width={"260"}
            FSize={"25px"}
            FontFamily={"Sniglet"}
            FWeight={400}
          >
            Connect
          </Button>
        </div>
      </div>
      <div className="right">
        <p className="title-TopCreators">Top Creators of the week</p>
        <ul className="list-TopCreators">
          {NFTitem.map((item) => (
            <li>
              <TopCreator
                src={item.src}
                author={item.author}
                price={item.price}
              ></TopCreator>
            </li>
          ))}
        </ul>
        <div className="btn-watchMore">
          <Button Height={61} Width={260} FSize={"25px"} FontFamily={"Sniglet"}>
            Watch More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateNFT;
