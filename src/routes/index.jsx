import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Principal from '../pages/Principal';
import Feed from '../pages/Feed';
import ProtectedRoutes from '../components/ProtectedRoutes';

const RoutesMain = () => (
  <Routes>
    <Route path='/login' element={<Login />} />
    <Route path='/home' element={<Home />} />
    <Route path='/' element={<Principal />} />
    <Route element={<ProtectedRoutes />}>
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/feed' element={<Feed />} />
    </Route>
  </Routes>
);

export default RoutesMain;
