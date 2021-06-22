import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      padName: "",
    };
  }

  playAudio() {
    window.addEventListener('keypress', e => {
      if (e.keyCode === 113) { audio1.play() }
      audio1.currentTime = 0;
    });
    const audio1 = document.getElementById("Q")
    audio1.play()
    audio1.currentTime = 0;
  }

  playAudioTwo() {
    window.addEventListener('keypress', e => {
      if (e.keyCode === 119) { audio2.play() }
      audio2.currentTime = 0;
    });
    const audio2 = document.getElementById("W")
    audio2.currentTime = 0;
    audio2.play()
  }

  playAudioThree() {
    window.addEventListener('keypress', e => {
      if (e.keyCode === 101) { audio3.play() }
      audio3.currentTime = 0;
    });
    const audio3 = document.getElementById("E")
    audio3.currentTime = 0;
    audio3.play()
  }

  playAudioFour() {
    window.addEventListener('keypress', e => {
      if (e.keyCode === 97) { audio4.play() }
      audio4.currentTime = 0;
    });
    const audio4 = document.getElementById("A")
    audio4.currentTime = 0;
    audio4.play()
  }
  playAudioFive() {
    window.addEventListener('keypress', e => {
      if (e.keyCode === 115) { audio5.play() }
      audio5.currentTime = 0;
    });
    const audio5 = document.getElementById("S")
    audio5.currentTime = 0;
    audio5.play()
  }
  playAudioSix() {
    window.addEventListener('keypress', e => {
      if (e.keyCode === 100) { audio6.play() }
      audio6.currentTime = 0;
    });
    const audio6 = document.getElementById("D")
    audio6.currentTime = 0;
    audio6.play()
  }
  playAudioSeven() {
    window.addEventListener('keypress', e => {
      if (e.keyCode === 122) { audio7.play() }
      audio7.currentTime = 0;
    });
    const audio7 = document.getElementById("Z")
    audio7.currentTime = 0;
    audio7.play()
  }
  playAudioEight() {
    window.addEventListener('keypress', e => {
      if (e.keyCode === 120) { audio8.play() }
      audio8.currentTime = 0;
    });
    const audio8 = document.getElementById("X")
    audio8.currentTime = 0;
    audio8.play()
  }
  playAudioNine() {
    window.addEventListener('keypress', e => {
      if (e.keyCode === 99) { audio9.play() }
      audio9.currentTime = 0;
    });
    const audio9 = document.getElementById("C")
    audio9.currentTime = 0;
    audio9.play()
  }



  render() {
    return(
      <div id="drum-machine">
        <div id="display"></div>
        <div id="pads">
          <button onClick={this.playAudio} id="sound-one" className="drum-pad">Q
                <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" type="audio/wav" className="clip" id="Q">
                </audio>
          </button>
        <button onClick={this.playAudioTwo} id="sound-two" className="drum-pad">W
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" type="audio/wav" className="clip" id="W">
            </audio>
        </button>
        <button onClick={this.playAudioThree} id="sound-three" className="drum-pad">E
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" type="audio/wav" className="clip" id="E">
            </audio>
        </button>
        <button onClick={this.playAudioFour} id="sound-four" className="drum-pad">A
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" type="audio/wav" className="clip" id="A">
            </audio>
        </button>
        <button onClick={this.playAudioFive} id="sound-five" className="drum-pad">S
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" type="audio/wav" className="clip" id="S">
            </audio>
        </button>
        <button onClick={this.playAudioSix} id="sound-six" className="drum-pad">D
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" type="audio/wav" className="clip" id="D">
            </audio>
        </button>
        <button onClick={this.playAudioSeven} id="sound-seven" className="drum-pad">Z
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" type="audio/wav" className="clip" id="Z">
            </audio>
        </button>
        <button onClick={this.playAudioEight} id="sound-eight" className="drum-pad">X
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" type="audio/wav" className="clip" id="X">
            </audio>
        </button>
        <button onClick={this.playAudioNine} id="sound-nine" className="drum-pad">C
            <audio src="https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3" type="audio/wav" className="clip" id="C">
            </audio>
        </button>
        </div>
      </div>
    )
  }
}

export default App;