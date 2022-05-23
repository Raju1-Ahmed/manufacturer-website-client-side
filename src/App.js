
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Home from './Pages/Home/Home/Home';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'> 
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
    </div>

  );
}

export default App;
