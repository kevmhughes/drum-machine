import React, { Component } from 'react';
import './drum-pad.css';

export default class DrumPad extends Component {
  constructor(props){
    super(props);

    this.state = {
    };
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
    window.focus()
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown)
  }

  handleKeyDown = e => {
    if(e.keyCode === this.props.letter.charCodeAt()) {
      this.audio.play()
      this.audio.currentTime = 0;
      this.props.handleDisplay(this.props.id)
    }
  }

  handleClick = () => {
    this.audio.play()
    this.audio.currentTime = 0;
    this.props.handleDisplay(this.props.id)
  }

  render() {
    return(
        <button 
          className="drum-pad" 
          onClick={this.handleClick}
          id={this.props.id}>
          <h1>{this.props.letter}</h1>
            <audio 
              ref={ref => this.audio = ref}
              className="clip"
              src={this.props.src} 
              id={this.props.letter}
            >
            </audio>
        </button>
    );
  }
}
