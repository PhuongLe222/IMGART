import './App.css';
import { Routes, Route } from 'react-router-dom'
import Aboutus from './containers';
function App() {
  return (
    <Routes>
      <Route path='/about-us' element={<Aboutus/>}/>
    </Routes>

  );
}

export default App;
