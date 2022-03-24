import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import logo from './assets/logo512.png';
import TextInput from './components/TextInput';
import Burger from './components/Burger';
import './App.css';

import modalButton from './assets/infobutton.png';
import closeButton from './assets/closebutton.png';
import topbun from './assets/topbun.png';
import lettuce from './assets/lettuce.png';
import tomato from './assets/tomato.png';
import cheese from './assets/cheese.png';
import meat from './assets/meat.png';
import bottombun from './assets/bottombun.png';

const url = new URL(window.location.href);
let params = new URLSearchParams(url.search);

function App() {
  const [input, setInput] = useState(params.get('id') || 'hamburger');
  const [isModalOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let params = new URLSearchParams(window.location.search);
    params.set('id', input);
    window.history.replaceState(null,'',`${window.location.pathname}?${params}`);
  }, [input])

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const modalStyles = {
    content: {
      backgroundColor: "#FFC46D",
      border: "none",
      fontFamily: "Montserrat",
      borderRadius: "80px",
      fontWeight: "500"
    },
  }

  return (
    <div className="App">
      <Modal
        closeTimeoutMS={300}
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="Hello World"
      >
        <img src={closeButton} className="modal-button close" onClick={closeModal}/>
        <p className="modal-title">Ingredients</p>
        <div className="flex-grid">
        <div className="col">
            <p>ham</p>
            <img className="ingredient" src={topbun} alt="" />
          </div>
        </div>
        <div className="flex-grid">
          <div className="col">
            <p>b</p>
            <img className="ingredient" src={lettuce} alt="" />
          </div>
          <div className="col">
            <p>u</p>
            <img className="ingredient" src={tomato} alt="" />
          </div>
        </div>
        <div className="flex-grid">
          <div className="col">
            <p>r</p>
            <img className="ingredient" src={cheese} alt="" />
          </div>
          <div className="col">
            <p>g</p>
            <img className="ingredient" src={meat} alt="" />
          </div>
        </div>
        <div className="flex-grid">
        <div className="col">
            <p>er</p>
            <img className="ingredient" src={bottombun} alt="" />
          </div>
        </div>
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