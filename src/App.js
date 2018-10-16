import React, { Component } from 'react';
import logo from './logo.svg';
import Textbox from './components/textbox.jsx';
import AddressBox from './components/organisms/addressBox.jsx';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

let endpoint = ""
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
  {/* <Textbox {...boxProps}/> */}
      <AddressBox endpoint={endpoint} />
      </div>
    );
  }
}

export default App;
