import React from 'react';
import Home from "./pages/Home";
import './App.scss';
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home}></Route>
    </Switch>
    </>
  );
}

export default App;
