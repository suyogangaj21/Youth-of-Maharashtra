import React from 'react';
import ReactDOM from 'react-dom/client';

import '@/styles/globals.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import JoinUs from './pages/joinus';
import MemberLogin from './pages/MemberLogin';
import OrgLogin from './pages/OrgLogin';
import ContactUs from './pages/ContactUs';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    children:[
      {
        path:"joinus",
        element:<JoinUs/>
      },
      {
        path:"memberLogin",
        element:<MemberLogin/>
      }
      ,{
        path:"orgLogin",
        element:<OrgLogin/>
      },{
        path:"contactus",
        element:<ContactUs/>
      }
    
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
