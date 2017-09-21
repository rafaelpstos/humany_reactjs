import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <div className="App-header">
          <div className="App-logo">
            <h2><span className="paint-word">_h</span>umany</h2>
            <small>Web & Apps development.</small>
          </div>
        </div> */}
        <div className="App-intro">
          <h1>Rafael Pereira dos Santos</h1>
          <ul>
            <li>Sênior developer - <a target="_blank" href="http://pixeon.com.br">Pixeon</a> - São Paulo / SP</li> 
            <li><a target="_blank" href="https://twitter.com/rafaelpstos">Twitter</a></li>
            <li><a target="_blank" href="https://www.instagram.com/rafael82/">Instagram</a></li>
            <li><a target="_blank" href="https://github.com/rafaelpstos">Github</a></li>
            <li><a target="_blank" href="https://www.linkedin.com/in/rafaelpstos/">Linkedin</a></li>
          </ul>         
        </div>
      </div>
    );
  }
}

export default App;
