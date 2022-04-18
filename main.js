import "./style.css";
import Phaser from "phaser";
import Game from './Scenes/Game'
import End from './Scenes/End'

let config = {
  type: Phaser.WEBGL,
  width: 640,
  height: 480,
  backgroundColor: "#76b5c5",
  parent: "snake-game",
  scene: [End, Game]
};

const game = new Phaser.Game(config);