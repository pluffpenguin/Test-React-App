import logo from './logo.svg';
import './App.css';

function MyButton(){
  return (
    <button>Example Button</button>
  );
}

function App() {
  return (
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
    //   </header>
    // </div>
    <div>
      <h1>First test website project.</h1>
      <p>Paragraph. </p>
      <img className="avatar" src="jayform.jpg"/>
      <MyButton />
    </div>
  );
}

export default App;
