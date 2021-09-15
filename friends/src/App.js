import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
//import protect route file
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import PrivateRoute from "./components/PrivateRoute";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        {/* links */}
        <div>
          <Link to="/">Home </Link>
          <Link to="/login"> Login </Link>
          <Link to="/logout"> Logout </Link>
          <Link to="/friends"> Friends </Link>
        </div>

        <Switch>
          <Route exact path="/" />
          <Route path="/login" component={Login} />
          <Route path="/logout" />
          <PrivateRoute path="/friends" component={FriendsList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
