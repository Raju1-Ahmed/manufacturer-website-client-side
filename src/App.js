
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import RequireAuth from './Pages/Login/RequireAuth';
import ServiceDetails from './Pages/Products/ServiceDetails';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyCard from './Pages/Dashboard/MyCard';
import AllUsers from './Pages/Dashboard/AllUsers';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route path="/dashboard/myCard" element={<MyCard />} />
          <Route path="/dashboard/users" element={<AllUsers />} />
          {/* <Route path="users" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route> */}
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path='/service/:serviceId' element={<RequireAuth><ServiceDetails></ServiceDetails></RequireAuth>}></Route>
      </Routes>
    </div>

  );
}

export default App;
