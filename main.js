import Phaser from "phaser";
import Snake from "./components/Snake";
import Food from "./components/Food";
import foodImage from "./assets/food.png";
import bodyImage from "./assets/body.png";
import "./style.css";

let config = {
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
let food;
let cursors;

let game = new Phaser.Game(config);

function preload() {
  this.load.image("food", foodImage);
  this.load.image("body", bodyImage);
}

function create() {
  snake = new Snake(this, 8, 8);
  food = new Food(this, 3, 4);

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

  if(snake.update(time)) {
    snake.collideWithFood(food);
  }
}
