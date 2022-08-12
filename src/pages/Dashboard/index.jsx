import { useContext } from 'react';
import { ToastContext } from '../../contexts/ToastContext';

const Dashboard = () => {
  const { addToast } = useContext(ToastContext);

  addToast({
    title: 'Você chegou na dashboard',
    type: 'success',
  });

  return <h1>Dashboard</h1>;
};

export default Dashboard;
