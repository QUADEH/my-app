import React from 'react';
import Navbar from "./pages/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from"./pages/Home";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path = '/' exact component=
          {Home} />
        </Switch>    
      </Router>
    </div>
  );
}

export default App;
