import Phaser from "phaser";
import Snake from "../components/Snake";
import Food from "../components/Food";
import foodImage from "../assets/food.png";
import bodyImage from "../assets/body.png";

class Game extends Phaser.Scene {
  constructor() {
    super({ key: "game" });
    this.snake;
    this.food;
    this.cursors;
  }

  preload() {
    this.load.image("food", foodImage);
    this.load.image("body", bodyImage);
  }

  create() {
    this.snake = new Snake(this, 8, 8);
    this.food = new Food(this, 3, 4);

    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update(time, delta) {
    if (!this.snake.alive) {
      return;
    }

    if (this.cursors.left.isDown) {
      this.snake.faceLeft();
    } else if (this.cursors.right.isDown) {
      this.snake.faceRight();
    } else if (this.cursors.down.isDown) {
      this.snake.faceDown();
    } else if (this.cursors.up.isDown) {
      this.snake.faceUp();
    }

    if (this.snake.update(time)) {
      if (this.snake.collideWithFood(this.food)) {
        this.repositionFood();
      }
    }
  }

  repositionFood() {
    let testGrid = [];

    for (let y = 0; y < 30; y++) {
      testGrid[y] = [];

      for (let x = 0; x < 40; x++) {
        testGrid[y][x] = true;
      }
    }

    this.snake.updateGrid(testGrid);

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

      this.food.setPosition(pos.x * 16, pos.y * 16);

      return true;
    } else {
      return false;
    }
  }

  endScene() {
    this.scene.start('End');
  }
}

export default Game;
