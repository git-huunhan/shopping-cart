import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import './App.css';
import TopMenu from './components/TopMenu'; 
import Products from './pages/Products'; 
import Index from './pages/Index'; 

function App() {
  return (
     <Router>
      <div className="App">
        <TopMenu/>

        <Route path="/" exact component={Index} />
        <Route path="/products" exact component={Products}/>

      </div>
    </Router>
  );
}

export default App;
