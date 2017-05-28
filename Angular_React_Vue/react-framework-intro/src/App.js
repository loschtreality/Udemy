import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import Account from './components/Account'
import User from './components/User'
import Blog from './components/Blog'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <Link to="/">Home</Link>
            <Link to="/account">Account</Link>
            <Link to="/blog">Blog</Link>
          </div>
          <div>
            <Route path="/" exact component={User}/>
            <Route path="/blog" component={Blog}/>
            <Route path="/account" component={Account}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
