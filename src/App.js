import React from 'react';
import Home from "./pages/Home";
import './App.scss';
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
    <Switch>
      <Route exact path="/" component={Home}></Route>
    </Switch>
    </>
  );
}

export default App;
