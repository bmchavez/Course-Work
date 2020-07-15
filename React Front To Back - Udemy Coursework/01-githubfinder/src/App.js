import React, { Fragement, Component } from 'react';
import './App.css';

// Class based component rather than functional
class App extends Component {
  
  render() {
    // return (
    //   // JSX JavaScript Syntax Extension - (not HTML) 
    //   <div className="App">
    //     <h1>Hello From React</h1>
    //   </div>
    // );
    return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'hello from react'));
  }
}

export default App;
