import React, { Component } from 'react';
import logo from './logo.svg';
import Textbox from './components/textbox.jsx';
import './App.css';


const buttonCtx  = React.createContext('address')
class App extends Component {
  constructor(props){
    super();
    this.state={ boxProps:{displayStyle:"display-box", boxName:"",boxStyle:"text-box",endPoint:"https://jsonplaceholder.typicode.com/posts",}}
  }
  render() {
    const boxProps = {...this.state.boxProps}
    return (
      <div className="App">
      <Textbox {...boxProps}/>
      </div>
    );
  }
}

export default App;
