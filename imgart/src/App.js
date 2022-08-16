import './App.css';
import HomePage from './containers/HomePage';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage></HomePage>}></Route>
    </Routes>
  );
}

export default App;
