import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import logo from './assets/logo512.png';
import modalButton from './assets/infobutton.png';
import TextInput from './components/TextInput';
import Burger from './components/Burger';
import './App.css';

const url = new URL(window.location.href);
let params = new URLSearchParams(url.search);

function App() {
  const [input, setInput] = useState(params.get('id') || 'hamburger');
  const [isModalOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let url = new URL(window.location.href);
    url.searchParams.set('id',input);
    window.history.pushState({}, '', url);
  }, [input])

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {

  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="App">
      <Modal
        isOpen={isModalOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Hello World"
      >
        Hello World
      </Modal>
      <div className="App-header">
        <img src={modalButton} className="modal-button" onClick={openModal}/>
        <img className="App-logo" src={logo} alt="logo" />
      </div>
      <div className="content">
        <TextInput input={input} setInput={setInput} />
        {!isModalOpen && <Burger input={input} />}
      </div>
      <div className="App-footer">
        <p>Made by <a target="_blank" href="https://github.com/basokant">Ben Asokanthan.</a></p>
        <p>Inspired by a <a target="_blank" href="https://knowyourmeme.com/photos/1839735-oreo-grammar">meme</a>.</p>
      </div>
    </div>
  );
}

export default App;