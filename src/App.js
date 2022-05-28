
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
import Payment from './Pages/Dashboard/Payment';
import AddService from './Pages/Dashboard/AddService';
import ManageOrders from './Pages/Dashboard/ManageOrders';
import AddReview from './Pages/Dashboard/AddReview';
import Blog from './Pages/Shared/Blog/Blog';
import Portfolio from './Pages/Home/Portfolio/Portfolio';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route path="/dashboard/myCard" element={<MyCard />} />
          <Route path="/dashboard/users" element={<AllUsers />} />
          <Route path="/dashboard/manageorder" element={<ManageOrders/>} />
          <Route path="/dashboard/addservice" element={<AddService/>} />
          <Route path="/dashboard/addreview" element={<AddReview/>} />
          <Route path="/dashboard/payment/:id" element={<Payment />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path='/service/:serviceId' element={<RequireAuth><ServiceDetails></ServiceDetails></RequireAuth>}></Route>
      </Routes>
    </div>

  );
}

export default App;
