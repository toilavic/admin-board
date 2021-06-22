import { Navigate } from 'react-router-dom';
import Appbar from './components/dashboard/Appbar'
import Dashboard from './components/dashboard/Dashboard';
import NotFound from './components/NotFound';
import KeyGrid from './components/dashboard/grid/KeyGrid';
import Login from './components/auth/Login';


const routes = [
  {
    path: 'app',
    element: <Appbar />,
    children: [
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'keys', element: <KeyGrid /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    children: [
      { path: 'login', element: <Login /> },
      { path: '404', element: <NotFound /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
