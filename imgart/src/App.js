import './App.css';

import HomePage from './containers/HomePage';

import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage></HomePage>}></Route>
      <Route path='/product-detail' ></Route>
      <Route path='/create-NFT' ></Route>
    </Routes>

  );
}

export default App;
