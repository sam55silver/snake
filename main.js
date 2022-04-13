import Phaser from "phaser";
import food from "./assets/food.png";
import body from "./assets/body.png";

var config = {
  type: Phaser.WEBGL,
  width: 640,
  height: 480,
  backgroundColor: "#bfcc00",
  parent: "snake-game",
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
};

let snake;
let cursors;

class Snake extends Phaser.Class {
  constructor(scene, x, y) {
    this.headPosition = new Phaser.Geom.Point(x, y);
    this.body = scene.add.group();
    this.head = this.body.create(x * 16, y * 16, "body");
    this.head.setOrigin(0);
  }
}

const UP = 0;
const DOWN = 1;
const LEFT = 2;
const RIGHT = 3;

var game = new Phaser.Game(config);

function preload() {
  this.load.image("food", food);
  this.load.image("body", body);
}

function create() {}

function update(time, delta) {}
