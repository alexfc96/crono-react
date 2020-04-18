import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Crono from './components/crono';

class App extends Component {

  state = {
    crono : true
  }

  unmountCrono = (e) =>{
    this.setState({
      crono : !this.state.crono
    })
  }

  render(){
    const {crono} = this.state;
    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="content">
          <button onClick={this.unmountCrono}>Mount/Unmount</button>
          {crono && <Crono  />}

        </div>    
      </div>
    )
  }
}

export default App;
