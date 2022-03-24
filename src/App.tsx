import { useState, useEffect } from 'react';
import logo from './assets/logo512.png';
import modalButton from './assets/infoButton.png';
import TextInput from './components/TextInput';
import Burger from './components/Burger';
import './App.css';

function App() {
  const [input, setInput] = useState("hamburger");
  const [isModal, setIsModal] = useState(false);

  return (
    <div className="App">
      <div className="App-header">
        <img src={modalButton} />
        <img src="" alt="" />
        <img className="App-logo" src={logo} alt="logo" />
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