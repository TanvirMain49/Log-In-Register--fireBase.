import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Page/Home";
import Register from "../Page/Register";
import LogIn from "../Page/LogIn";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/log-in',
            element:<LogIn></LogIn>
        },
      ]
    },
  ]);

  export default router;