import React, { Component } from 'react';
import './drum-pad.css';

export default class DrumPad extends Component {
  constructor(props){
    super(props);
    this.state = {
      buttonPress: true,
    };
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handlePress = this.handlePress.bind(this);
    this.handleRelease = this.handleRelease.bind(this);
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
      this.setState({buttonPress: !this.state.buttonPress})
      setTimeout(
        function() {
            this.setState({buttonPress: !this.state.buttonPress});
        }
        .bind(this),
        100
    );
    }
  }

  handleClick = () => {
    this.audio.play()
    this.audio.currentTime = 0;
    this.props.handleDisplay(this.props.id)
  }

  handlePress = () => {
    this.setState({buttonPress: !this.state.buttonPress})
  }

  handleRelease = () => {
    this.setState({buttonPress: !this.state.buttonPress})
  }

  render() {
    const btnClassOnPress = this.state.buttonPress ? "not-pressed" : "pressed"
    return(
        <button 
          className="drum-pad linear" 
          onClick={ this.handleClick }
          onMouseDown={ this.handlePress }
          onMouseUp={ this.handleRelease }
          id={this.props.id}>
          <h1 className={btnClassOnPress}>{this.props.letter}</h1>
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
