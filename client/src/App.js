import React from 'react';
import './App.css';
import Home from "./displays/Home";
import Login from "./displays/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const user = null;

function App() {
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
        <Switch>
          {/* <Route path="/test">
            <h1> Test route </h1> 
          </Route> */}
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        )}
    </Router>

    </div>
  );
}

export default App;
