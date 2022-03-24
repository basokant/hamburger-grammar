import { useState, useEffect } from 'react';
import logo from './assets/logo512.png';
import modalButton from './assets/infobutton.png';
import TextInput from './components/TextInput';
import Burger from './components/Burger';
import './App.css';

const url = new URL(window.location.href);
let params = new URLSearchParams(url.search);

function App() {
  const [input, setInput] = useState(params.get('id') || 'hamburger');
  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    let url = new URL(window.location.href);
    url.searchParams.set('id',input);
    window.history.pushState({}, '', url);
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