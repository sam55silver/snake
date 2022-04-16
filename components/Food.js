import Phaser from "phaser";

class Food extends Phaser.GameObjects.Image {
  constructor(scene, x, y)
  {
    super(scene, x, y, 'food');

    this.setTexture('food')
    this.setPosition(x*16,y*16)
    this.setOrigin(0);

    this.total = 0;

    scene.children.add(this);
  }
}

export default Food;