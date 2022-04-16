import Phaser from "phaser";

const UP = 0;
const DOWN = 1;
const LEFT = 2;
const RIGHT = 3;

class Snake {
  constructor(scene, x, y) {
    this.headPosition = new Phaser.Geom.Point(x, y);
    this.body = scene.add.group();
    this.head = this.body.create(x * 16, y * 16, "body");
    this.head.setOrigin(0);

    this.alive = true;

    this.speed = 100;

    this.moveTime = 0;

    this.tail = new Phaser.Geom.Point(x, y);

    this.heading = RIGHT;
    this.direction = RIGHT;
  }

  update(time) {
    if (time >= this.moveTime) {
      return this.move(time);
    }
  }

  faceLeft() {
    if (this.direction === UP || this.direction === DOWN) {
      this.heading = LEFT;
    }
  }

  faceRight() {
    if (this.direction === UP || this.direction === DOWN) {
      this.heading = RIGHT;
    }
  }

  faceDown() {
    if (this.direction === RIGHT || this.direction === LEFT) {
      this.heading = DOWN;
    }
  }

  faceUp() {
    if (this.direction === RIGHT || this.direction === LEFT) {
      this.heading = UP;
    }
  }

  move(time) {
    switch (this.heading) {
      case LEFT:
        this.headPosition.x = Phaser.Math.Wrap(this.headPosition.x - 1, 0, 40);
        break;

      case RIGHT:
        this.headPosition.x = Phaser.Math.Wrap(this.headPosition.x + 1, 0, 40);
        break;

      case DOWN:
        this.headPosition.y = Phaser.Math.Wrap(this.headPosition.y + 1, 0, 30);
        break;

      case UP:
        this.headPosition.y = Phaser.Math.Wrap(this.headPosition.y - 1, 0, 30);
        break;
    }

    this.direction = this.heading;

    Phaser.Actions.ShiftPosition(
      this.body.getChildren(),
      this.headPosition.x * 16,
      this.headPosition.y * 16,
      1,
      this.tail
    );

    this.moveTime = time + this.speed;

    return true;
  }
}

export default Snake;
