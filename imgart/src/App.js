import './App.css';
import {NFT} from './components/NFT/NFT';

function App() {
  return (
    <div className="App">
      <NFT src={"image.png"} name = {"Crazy Apes"} avt={"avt.png"} author ={"hx45...250e"} price = {"3.90"}></NFT>
    </div>
  );
}

export default App;
