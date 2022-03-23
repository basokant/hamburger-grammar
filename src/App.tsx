import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import TextInput from './components/TextInput';
import Burger from './components/Burger'

function App() {
  const [input, setInput] = useState("hamburger")

  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" src="../logo512.png" alt="hello" />
        <TextInput input={input} setInput={setInput} />
        <Burger input={input} />
      </header>
      <footer>
      </footer>
    </div>
  );
}

export default App;