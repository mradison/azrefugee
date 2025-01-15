import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import "bootstrap/dist/css/bootstrap.min.css"
import './index.css'
import App from './App.jsx'
import Homepage from './pages/homepage.jsx';
import Involvedpage from './pages/involvedpage.jsx';
import Contactuspage from './pages/contactuspage.jsx';
import Missionpage from './pages/missionpage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      // {
      //   path: '/login',
      //   element: <Login />
      // }, {
      //   path: '/signup',
      //   element: <Signup />
      // }, 
      {
        path: '/involved',
        element: <Involvedpage />
      },{
        path: '/mission',
        element: <Missionpage />
      },{
        path: '/contact',
        element: <Contactuspage />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);