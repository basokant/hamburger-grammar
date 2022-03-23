import { useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import TextInput from './components/TextInput';

function App() {
  const [input, setInput] = useState("hamburger")

  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" src="../logo512.png" alt="hello" />
        <TextInput input={input} setInput={setInput}/>
      </header>
      <footer>
      </footer>
    </div>
  );
}

export default App;
