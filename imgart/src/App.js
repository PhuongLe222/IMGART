
import CreateNFT from './containers/CreateNFT';
import { Routes, Route } from 'react-router-dom';
import ProductDetails from './containers/ProductDetails';
import Aboutus from './containers/AboutUs';
import HomePage from './containers/HomePage';
import NFTpicture from "./asset/image 4.svg";
import avatar from "./asset/avt.png";

function App() {
  return (
    <Routes>
      <Route path='/create' element={<CreateNFT  />} />
      <Route path='/productdetails' element={<ProductDetails src = {NFTpicture} name ={"Doodle"} author ={"hxaa0e47b35e3a2ed1321bc0c847f7404086ff75f1"} avt={avatar} price={"8.2"} />} />
      <Route path='/about-us' element={<Aboutus/>}/>
      <Route path='/' element={<HomePage></HomePage>}></Route>
    </Routes>
  );
}
export default App;
