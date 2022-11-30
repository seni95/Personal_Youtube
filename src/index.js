import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './pages/NotFound';
import VideoDetail from './pages/VideoDetail';
import Vidoes from './pages/Vidoes';

const router = createBrowserRouter([
  {path:'/',
  element:<App></App>,
  errorElement:<NotFound></NotFound>,
  children:[
    {index:true,element:<Vidoes></Vidoes>},
    {path:'videos',element:<Vidoes></Vidoes>},
    {path:'videos/:keyword',element:<Vidoes></Vidoes>},
    {path:'videos/watch/:videoId',element:<VideoDetail></VideoDetail>},

  ]}
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your App, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
