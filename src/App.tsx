import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import TextInput from './components/TextInput';
import Burger from './components/Burger'

function App() {
  const [input, setInput] = useState("hamburger")

  return (
    <div className="App">
      <div className="App-header">
        <img className="App-logo" src="../logo512.png" alt="hello" />
      </div>
      <div className="content">
        <TextInput input={input} setInput={setInput} />
        <Burger input={input} />
      </div>
      <div className="App-footer">
        <p>Made by Ben Asokanthan.</p>
        <p>inspired by a meme.</p>
      </div>
    </div>
  );
}

export default App;