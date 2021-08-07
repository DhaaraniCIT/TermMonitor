import './App.css';
import React from 'react';
import TopBar from './Components/topBar.js';
import Keywords from './Components/keywords.js';
class App extends React.Component{
  render(){
    return (
      <div className="Appdiv">
        <TopBar/>
        <Keywords/>
      </div>
      );
  }
}

export default App;
