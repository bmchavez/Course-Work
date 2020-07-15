import React, { Fragement, Component } from 'react';
import './App.css';

// Class based component rather than functional
class App extends Component {
  // foo = () => 'Bars'


  render() {
    const name = 'John Doe';
    const loading = false;
    const showName = false;

    // if(loading) {
    //   return <h4>Loading...</h4>
    // }

    return (
      // JSX JavaScript Syntax Extension - (not HTML) 
      <div className="App">
        {loading ? <h4>Loading...</h4> : <h1>Hello {showName && name} From React</h1>}
      </div>
    );
  }
}

export default App;
