import Phaser from "phaser";

class End extends Phaser.Scene {
  constructor() {
    super({ key: "End" });
  }
  create() {
    const screenCenterX =
      this.cameras.main.worldView.x + this.cameras.main.width / 2;
    const screenCenterY =
      this.cameras.main.worldView.y + this.cameras.main.height / 2;

    this.add
      .text(screenCenterX, screenCenterY - 50, "Game Over!", {
        fontFamily: "RetroGaming",
        fontSize: "40px",
      })
      .setOrigin(0.5)
      .setResolution(10);

    let button = this.add
      .text(screenCenterX, screenCenterY, "Play Again", {
        fontFamily: "RetroGaming",
        fontSize: "20px",
      })
      .setOrigin(0.5)
      .setResolution(10);

    button.setInteractive().on("pointerdown", () => {
      this.scene.start("game");
    });
  }
}

export default End;
