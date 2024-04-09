import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Interested from './components/pages/Interested/Interested';
import Describes from './components/pages/Describes/Describes';
import Place from './components/pages/Place/Place';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Describes></Describes>
  },
  {
    path: '/interested',
    element: <Interested></Interested>
  },
  {
    path: '/place',
    element: <Place></Place>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
