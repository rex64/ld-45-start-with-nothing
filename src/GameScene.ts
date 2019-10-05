import Phaser from 'phaser';
// import star from './assets/star.png'; // perche require funziona e import no?
const star = require('./assets/star.png');

export default class GameScene extends Phaser.Scene {
    // private square: Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body }; //TODO: &?

    private square : Phaser.GameObjects.Rectangle;
    private starSprite : Phaser.GameObjects.Sprite;

    constructor(sceneConfig : Phaser.Types.Scenes.SettingsConfig) {
        super(sceneConfig);
    }

    public preload() {
        this.load.image("star", star);
    }

    public create() {
    //   this.square = this.add.rectangle(400, 400, 100, 100, 0xFFFFFF) as any; //TODO: as any?
        this.starSprite = this.add.sprite(this.cameras.main.centerX, this.cameras.main.centerY, 'star');
        this.starSprite.setScale(10, 10);
        this.square = this.add.rectangle(this.cameras.main.centerX - 100, this.cameras.main.centerY, 100, 100, 0xFFFFFF); //TODO: as any?
        this.add.text(this.cameras.main.centerX, this.cameras.main.centerY, 'Hello World', {fontSize: 32, color: 'red', backgroundColor: 'blue'});
      // this.load.image('star', star);
    }

    public update() {
        this.square.setRotation(this.square.rotation + 0.01);
        this.starSprite.setRotation(this.square.rotation + 0.01);
    }
}
