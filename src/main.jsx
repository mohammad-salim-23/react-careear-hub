import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './components/Root/Home/Home.jsx'
import Root from './components/Root/Root.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AppliedJobs from './components/Root/AppliedJobs/AppliedJobs.jsx'
import ErrorElement from './components/ErrorElement/ErrorElement.jsx'
import JobDetails from './components/JobDetails/JobDetails.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorElement></ErrorElement>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/applied',
        element:<AppliedJobs></AppliedJobs>

      },
      {
        path:'/job',
        element:<JobDetails></JobDetails>,
        loader:()=>fetch(`jobs.json`)
      }
    ]

  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
