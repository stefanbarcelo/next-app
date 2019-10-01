import React from 'react';
import Home from "./pages/Home";
import './App.scss';
import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import City from "./pages/City";

function App() {
  return (
    <>
    <Nav/>
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/cities/:slug" component={City}></Route>
    </Switch>
    </>
  );
}

export default App;
