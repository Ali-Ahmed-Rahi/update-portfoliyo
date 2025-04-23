import {
  createBrowserRouter,
} from "react-router-dom";
import Layout from "../Layout/Layout";
import HomeBar from "../Dual/HomeBar";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        path: "/",
        element:<HomeBar></HomeBar>
      }
    ]
  },
]);