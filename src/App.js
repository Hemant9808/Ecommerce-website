import React from 'react';
import logo from './logo.svg';
import { ProductList } from './features/product-list/ProductList.js';
import { Counter } from './features/counter/counter.js';
import './App.css';
import Home from './pages/Home.js';
function App() {
  return (
    <div className="App">
    <Home></Home>
    </div>
  );
}

export default App;
