import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import ProjectDetails from './components/ProjectDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        index:true,

      }
    ]
  },
  {
    path:"/projects/:id",
    Component:ProjectDetails,

  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />,
  </React.StrictMode>
);