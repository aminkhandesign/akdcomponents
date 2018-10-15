import React, { Component } from 'react';
import logo from './logo.svg';
import Textbox from './components/textbox.jsx';
import AddressBox from './components/organisms/addressBox.jsx';
import './App.css';


//const buttonCtx  = React.createContext('address')
class App extends Component {
  constructor(props){
    super();
    this.state={ boxProps:{displayStyle:"form-container", boxName:"Address",boxStyle:"text-box",endPoint:"https://jsonplaceholder.typicode.com/posts",}}
  }
  render() {
    const boxProps = {...this.state.boxProps}
    return (
      <div className="App">
      <Textbox {...boxProps}/>
      <AddressBox width="500"/>
      </div>
    );
  }
}

export default App;
