import Phaser from "phaser";

class UIScene extends Phaser.Scene {
  constructor() {
    super({ key: "uiscene", active: true });
    this.score = 0;
    this.scoreDisplay;
  }

  preload() {
    this.scoreDisplay = this.add.text(
      this.cameras.main.width - 180,
      20,
      "Score: 0",
      {
        fontFamily: "RetroGaming",
        fontSize: "30px",
      }
    );
  }

  create() {
    const gameScene = this.scene.get("game");

    gameScene.events.on(
      "addScore",
      () => {
        this.score += 1;

        this.scoreDisplay.setText("Score: " + this.score);
      },
      this
    );
  }

  setScore() {
    this.score = 0;
    this.scoreDisplay.setText("Score: 0");
  }
}

export default UIScene;
