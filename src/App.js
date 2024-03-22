import React from 'react';
import logo from './logo.svg';
import { ProductList } from './features/product-list/ProductList.js';
import { Counter } from './features/counter/counter.js';
import './App.css';
import Home from './pages/Home.js';
import LoginPage from './pages/LoginPage.js';
import SignupPage from './pages/SignupPage.js';
import CartPage from './pages/CartPage.js';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Home></Home>
      </div>
    ),
  },
  {
    path: "/Login",
    element: <div><LoginPage></LoginPage></div>,
  },
  {
    path: "/Signup",
    element: <div><SignupPage></SignupPage></div>,
  },
  {
    path: "/Cart",
    element: <div><CartPage></CartPage></div>,
  },
]);
function App() {
  return (
    <div className="App">
    <RouterProvider router={router} />
    </div>
  );
}

export default App;
