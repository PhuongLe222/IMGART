import './App.css';
import {NFT} from './components/NFT/NFT';
import CreateNFT from './container/CreateNFT/CreateNFT';
function App() {
  return (
    <div className="App">
      <NFT src={"image.png"} name = {"Crazy Apes"} avt={"avt.png"} author ={"hx45...250e"} price = {"3.90"}></NFT>
      <CreateNFT></CreateNFT>
    </div>
  );
}

export default App;
