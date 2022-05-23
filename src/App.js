
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import RequireAuth from './Pages/Login/RequireAuth';
import Purchase from './Pages/Products/Purchase';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'> 
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/purchase" element={<RequireAuth>
      <Route path="" element={<Purchase/>} />
      </RequireAuth>} />
    </Routes>
    </div>

  );
}

export default App;
