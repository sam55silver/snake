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

  if (snake.update(time)) {
    if(snake.collideWithFood(food)) {
      repositionFood();
    };
  }
}

function repositionFood() {
  let testGrid = [];

  for (let y = 0; y < 30; y++) {
    testGrid[y] = [];

    for (let x = 0; x < 40; x++) {
      testGrid[y][x] = true;
    }
  }

  snake.updateGrid(testGrid);

  let validLocations = [];

  for (let y = 0; y < 30; y++) {
    for (let x = 0; x < 40; x++) {
      if (testGrid[y][x] === true) {
        validLocations.push({ x: x, y: y });
      }
    }
  }

  if (validLocations.length > 0) {
    var pos = Phaser.Math.RND.pick(validLocations);

    food.setPosition(pos.x * 16, pos.y * 16);

    return true;
  } else {
    return false;
  }
}
