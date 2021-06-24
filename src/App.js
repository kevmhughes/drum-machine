import React, { Component } from 'react';
import NinePads from './components/nine-pads/nine-pads';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      display: "Hit a pad!",
      switch: true,
      sliderVal: 0.3,
    };
    this.handleSwitch = this.handleSwitch.bind(this);
    this.adjustVolume = this.adjustVolume.bind(this);
  }

  handleSwitch() {
    this.setState(prevState => ({
      switch: !prevState.switch
    }));
    this.state.switch
    ? 
    this.setState({
      displayTwo: 'Pad: 808'
    }) 
    :
    this.setState({
      displayTwo: 'Pad: 909'
    });
  }

  handleDisplay = display => this.setState({ display })

  adjustVolume(e) {
      this.setState({
        sliderVal: e.target.value,
        display: 'Volume: ' + Math.round(e.target.value * 100)
      });
      setTimeout(() => this.clearDisplay(), 1000);
  }

  clearDisplay() {
    this.setState({
      display: ''
    });
  }

  render() {
    {
      const clips = [].slice.call(document.getElementsByClassName('clip'));
      clips.forEach(sound => {
        sound.volume = this.state.sliderVal;
      });
    }
    return(
      <div id="drum-machine">
        <div className="top"></div>
        <div id="display-panel">
          <div id="display">
            {this.state.display}
          </div>
          {this.state.switch ? <div id="display-two">
          Pad: 808
          </div> : <div id="display-two">
          Pad: 909
          </div> }
        </div>
        <div className="control-panel">
          <div >
              <input
                  className="slider"
                  max='1'
                  min='0'
                  onChange={this.adjustVolume}
                  step='0.01'
                  type='range'
                  value={this.state.sliderVal}
                />
            </div>
          <button 
            onClick={this.handleSwitch} 
            className="btn btn-primary"
            id="change-pad-button"
          >
            Change Pad
          </button>
        </div>
        <NinePads 
          clipVolume={this.state.sliderVal}
          switch={this.state.switch}
          handleDisplay={this.handleDisplay}/>
      </div>
    )
  }
}

export default App;