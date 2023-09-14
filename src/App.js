// import logo from './logo.svg';
import './App.css';
import './Components.css'
// import { Code } from 'mongodb';
import React, { Component } from 'react';

function MyButton(){
  return (
    <button className='MyButton'>Example Button</button>
  );
}

class CustomComponent extends Component{
  constructor(props){
    super(props);
    this.state = {
      text: 'Hello World!'
    }
    this.changeText = this.changeText.bind(this);
  }
  changeText(newText){
    this.setState({
      text: newText
    });
  }
  render(){
    return( 
    <div>
      <p>{this.state.text}</p>
      <button onClick={this.changeText}>Change Text</button>
    </div>
    );
  }
}

function App() {
  return (
    <body>
      <h1>Kiaran Lau</h1>
      <h2>Welcome to my Portfolio Website! </h2>
      <img className="avatar" src="jayform.jpg" alt='logo'/>
      <div>
        <MyButton/>
      </div> 
    </body>
  );
}

export default App;


/* <div className='row'>
        <div className='col-6'>
          <h1>First test website project.</h1>
          <p>Paragraph. </p>
          <div>
            <img className="avatar" src="jayform.jpg" alt='logo'/>
            <div>
            <MyButton/>
            </div>
          </div>
        </div>
        <div className='col-6'></div>
    </div> */

// <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>cls
    // </div>