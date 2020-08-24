import React, { useState } from "react";
import "./App.css";
import SideBar from "./SideBar";
import Chat from "./Chat";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './Login'
import { useStateProviderValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateProviderValue();
  
  return (
    <div className="app">
      {!user?(<Login/>):
      <div className="app_body">
      <Router>
            <SideBar />
            <Switch>
              <Route path="/rooms/:roomId">
                <Chat />
              </Route>
              <Route path="/">
              </Route>
            </Switch>
          </Router>
      </div>}
      
    </div>
  );
}

export default App;
