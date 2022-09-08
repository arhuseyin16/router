import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import About from "./components/about/about";
import Home from "./components/home/home";
import Users from "./components/users/users";
import Error404 from "./components/error/error404";


function App() {
  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <NavLink exact activeStyle={{backgroundColor: 'black', color: '#ffff'}} to="/">Home</NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/about">About</NavLink>
              </li>
              <li>
                <NavLink activeStyle={{backgroundColor: 'black', color: '#ffff'}} to="/users">Users</NavLink>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/users" component={Users}/>
            <Route path="*" component={Error404}/>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
