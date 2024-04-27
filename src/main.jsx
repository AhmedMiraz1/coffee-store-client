import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './MainLayout';
import AddCoffee from './AddCoffee';
import UpdateCoffee from './UpdateCoffee';
import Home from './Home';
import SignUp from './SignUp';
import SignIn from './SignIn';
import AuthProvider from './provider/AuthProvider';
import Users from './Users';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
 children:[

  {
    path:'/',
    element: <Home/>,
    loader: () => fetch('http://localhost:5000/coffee')
  },
  {
    path: '/addCoffee',
    element: <AddCoffee/>


  }, 
  {
   path: '/updateCoffee/:id',
   element: <UpdateCoffee/>,
   loader: ({params})=> fetch(`http://localhost:5000/coffee/${params.id}`)
  },
  {
    path:'/signUp',
    element:<SignUp/>
  },
  {
    path: '/signIn',
    element: <SignIn/>
  },
  {
    path: '/users',
    element: <Users/>,
    loader: ()=> fetch('http://localhost:5000/user')
  }
 ]
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
