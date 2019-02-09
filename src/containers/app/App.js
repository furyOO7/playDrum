import React, { Component } from 'react';
import './App.css';
const drumKit = [
  {
    name: 'Heater-1',
    key: 'Q',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
  },

  {
    name: 'Heater-2',
    key: 'W',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
  },

  {
    name: 'Heater-3',
    key: 'E',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
  },

  {
    name: 'Heater-4',
    key: 'A',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },

  {
    name: 'Clap',
    key: 'S',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },

  {
    name: 'Open-HH',
    key: 'D',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },

  {
    name: "Kick-'n-Hat",
    key: 'Z',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },

  {
    name: 'Kick',
    key: 'X',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },

  {
    name: 'Closed-HH',
    key: 'C',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];

class App extends Component {
  state = {
    soundName: '',
    power: false
  }
  clickHandler = (e) => {
    this.setState({
      soundName: e.target.id
    })
    const id = e.target.innerText.trim();
    console.log(id)
    const audio = this.refs[id];
    audio.play();
  }
  switch = () =>{
   this.setState({
     power: !this.state.power
   })
  }
  dragSlider = (e) =>{
    // console.log(e)
    var volume = document.getElementById('myRange').value/100;
    document.querySelectorAll('audio').forEach(el => el.volume = volume);
    console.log("dragging", volume)  
  }
  render() {
    if(this.state.power){
    var drumkit = drumKit.map((item, i) => {
      return (
        <div className="drum-pad" onClick={this.clickHandler} id={item.name}>
          {item.key}
          <audio className="clip" ref={item.key} id={item.key} src={item.src}></audio>
        </div>
      )
    })}else{
      var drumkit = <p style={{"color": "#d23d3d", "width": "250px"}}>Please turn on Power</p>
    }
    return (
      <div id="drum-machine">
        <h1>Drum Machine</h1>
        <div id="container">
       
          <div id="content">
          {drumkit}
          </div>
        </div>
        <div className="powerMain">
        <label class="switch">
  <input type="checkbox" onChange={this.switch} />
  <span class="slider"></span>
</label>
        </div>
        <div className="rangeMain">
        <input type="range" min="0" max="100" class="slider" id="myRange" onChange={this.dragSlider} />
        </div>

        </div>
        );
      }
    }
    export default App;
