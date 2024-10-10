import './App.css';
import React from 'react';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import Home from './screens/Home/Home';
// import VideoPage from './components/VideoPage/VideoPage';
import Learn from './screens/Learn/Learn';
import Dashboard from './screens/Dashboard/Dashboard';
import Syllabus from './components/Syllabus/Syllabus';


const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path:'/learn', element: <Learn/>},
    { path: '/syllabus', element: <Syllabus/> },
    { path:'/dashboard', element: <Dashboard/>}
  ]);

  return routes;
};

const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
