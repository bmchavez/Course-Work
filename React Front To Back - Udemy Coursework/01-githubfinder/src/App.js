import React, { Component } from 'react';
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import './App.css';

// Class based component rather than functional
class App extends Component {
  render() {
    return (
      // JSX JavaScript Syntax Extension - (not HTML) 
      <div className="App">
        <Navbar />
        <div className="container">
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
