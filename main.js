import Phaser from "phaser";
import Snake from "./components/Snake";
import food from "./assets/food.png";
import body from "./assets/body.png";
import "./style.css";

var config = {
  type: Phaser.WEBGL,
  width: 640,
  height: 480,
  backgroundColor: "#76b5c5",
  parent: "snake-game",
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
};

let snake;
let cursors;

var game = new Phaser.Game(config);

function preload() {
  this.load.image("food", food);
  this.load.image("body", body);
}

function create() {
  snake = new Snake(this, 8, 8);

  cursors = this.input.keyboard.createCursorKeys();
}

function update(time, delta) {
  if (!snake.alive) {
    return;
  }

  if (cursors.left.isDown) {
    snake.faceLeft();
  } else if (cursors.right.isDown) {
    snake.faceRight();
  } else if (cursors.down.isDown) {
    snake.faceDown();
  } else if (cursors.up.isDown) {
    snake.faceUp();
  }

  snake.update(time);
}
