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
      message: ''
    }
  }

  
}

function App() {
  return (
    <div className='row'>
        <div className='col-6'>
          <h1>First test website project.</h1>
          <p>Paragraph. </p>
          <div>
            <img className="avatar" src="jayform.jpg" alt='logo'/>
            <div>
              <MyButton/>
              <iframe title='Stream' classNam e='iFrame' src="https://bestsolaris.com/solaris.php?postid=32387" allowfullscreen allowtransparency></iframe>
            </div>
          </div>
        </div>
        <div className='col-6'></div>
    </div>
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