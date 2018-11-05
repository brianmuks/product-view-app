import React from 'react';
// TODO FIND ICON 
// import logo from './logo.svg'; 

import './App.css';

import ProductsList from './screens/product/index'

function App(){
    return (
      <div className="App row">

      <div className="container">
      <ProductsList />
      </div>
      </div>
    );
}

export default App;
