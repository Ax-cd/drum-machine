import React, { Component } from "react";

// Sounds from
// "name": "TR-909 Detroit",
// "description": "Roland TR-909 recorder via API and Neve",
// "source": "http://www.flstudiomusic.com/2016/09/download-free-909-kits-stems-f9-audio.html",
// "url": "https://oramics.github.io/sampled/DM/TR-909/Detroit/"

const drumPads = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    name: "Clap",
    url: "../sounds/clap-1.wav",
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    name: "Hihat_open",
    url: "../sounds/hihat-open-1.wav",
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    name: "Ride",
    url: "../sounds/ride.wav",
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    name: "Cymbal",
    url: "../sounds/cymbal.wav",
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    name: "Tom",
    url: "../sounds/tom-h.wav",
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    name: "Hihat_close",
    url: "../sounds/hihat-close.wav",
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    name: "Snare",
    url: "../sounds/snare.wav",
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    name: "Rim",
    url: "../sounds/rim.wav",
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    name: "Kick",
    url: "../sounds/kick.wav",
  },
];

export default class DrumMachine extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: "hello world",
    };
    this.playSound = this.playSound.bind(this);
    // this.pressKey = this.pressKey.bind(this);
  }

  playSound(selector) {
    let sound = document.getElementById(selector);
    sound.currentTime = 0;
    sound.play();
    console.log("On click working");
  }
  // pressKey(event) {
  //   // if (event.key === this.props.keyCode) {
  //   //   // this.playSound();
  //   //   console.log("On press working");
  //   // }
  //   if (event.key === this.drumPad.keyCode) {
  //     console.log("On press working");
  //   }
  // }

  // componentDidMount() {
  //   document.addEventListener("keydown", () => {
  //     pressKey(drumPad.keyTrigger);
  //   });
  // }

  render() {
    return (
      <main id="drum-machine">
        <h1>Drum Machine</h1>
        <div id="display" className="display">
          {/* {drumPad.name} */}
        </div>
        <div className="drumPads">
          {drumPads.map((drumPad) => (
            <div
              key={drumPad.keyTrigger}
              className="drum-pad"
              id={drumPad.name}
              onClick={() => {
                this.playSound(drumPad.keyTrigger);
              }}
              // onKeyDown={() => {
              //   this.pressKey(drumPad.keyTrigger);
              // }}
            >
              {drumPad.keyTrigger}
              <audio
                src={drumPad.url}
                className="clip"
                id={drumPad.keyTrigger}
              ></audio>
            </div>
          ))}
        </div>
      </main>
    );
  } // end render
}
