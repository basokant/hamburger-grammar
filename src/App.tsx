import { useState, useEffect } from 'react';
import logo from './assets/logo512.png';
import modalButton from './assets/infobutton.png';
import TextInput from './components/TextInput';
import Burger from './components/Burger';
import './App.css';

let pathName = window.location.pathname.slice(1);

function App() {
  const [input, setInput] = useState(pathName);
  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    pathName = window.location.pathname;
    const inputPathName = `/${input}`;

    if (pathName != inputPathName) {
      window.location.pathname = inputPathName;
    }
  }, [input])

  return (
    <div className="App">
      <div className="App-header">
        <img src={modalButton} className="modal-button"/>
        <img src="" alt="" />
        <img className="App-logo" src={logo} alt="logo" />
      </div>
      <div className="content">
        <TextInput input={input} setInput={setInput} />
        <Burger input={input} />
      </div>
      <div className="App-footer">
        <p>Made by <a target="_blank" href="https://github.com/basokant">Ben Asokanthan.</a></p>
        <p>Inspired by a <a target="_blank" href="https://knowyourmeme.com/photos/1839735-oreo-grammar">meme</a>.</p>
      </div>
    </div>
  );
}

export default App;