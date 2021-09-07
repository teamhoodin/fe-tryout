import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
    }
  }

  fetchArticles() {
    //Todo? :)
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Article feed</h1>
        </header>
      </div>
    );
  }
}

export default App;