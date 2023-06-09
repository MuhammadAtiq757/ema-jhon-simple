import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './components/shop/Shop';
import Home from './components/layout/Home';
import Oders from './components/oders/Oders';
import Inventory from './components/inventory/Inventory';
import Login from './components/login/Login';
import cartProductsLoader from './loaders/cartPRoductsLoader';
import Checkout from './components/cheakout/Checkout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children:[
{
  path: '/',
  element: <Shop></Shop>
},
{
  path: 'orders',
  element: <Oders></Oders>,
  loader: cartProductsLoader
},
{
  path: 'inventory',
  element: <Inventory></Inventory>
},
{
  path: 'login',
  element:<Login></Login>
},

{
  path:'/checkout',
  element:<Checkout></Checkout>
}


    ]
  
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
