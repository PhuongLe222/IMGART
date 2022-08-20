import './App.css';
import { PrimaryLayout } from './components/Layout';
import { Routes, Route } from 'react-router-dom'
import ProductDetails from './containers/ProductDetails/ProductDetails';
function App() {
  return (
    <Routes>  
      <Route path='/' element={<ProductDetails src = {"image 4.svg"} name ={"Crazy Apes"} author ={"hx25178aea97711c063d5501820c9713db263e1b12"} avt={"avt.png"} price={"1.2"} />} />
    </Routes>
  );
}

export default App;
