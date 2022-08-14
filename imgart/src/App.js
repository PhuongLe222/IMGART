

import CreateNFT from './containers/CreateNFT';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/create' element={<CreateNFT  />} />
    </Routes>
  );
}

export default App;
