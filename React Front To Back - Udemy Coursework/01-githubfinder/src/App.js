import React, { Fragement, Component } from 'react';
import Navbar from './components/layout/Navbar'
import './App.css';

// Class based component rather than functional
class App extends Component {
  render() {

    return (
      // JSX JavaScript Syntax Extension - (not HTML) 
      <nav className="navbar bg-primary">
        <Navbar />
      </nav>
    );
  }
}

export default App;
