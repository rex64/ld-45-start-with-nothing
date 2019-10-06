import Phaser from 'phaser';
import Player from './Player';

const tileset = require('./assets/tileset2.png');
const titlemap = require('./assets/titlemap.json');
const star = require('./assets/star.png');

export default class DungeonScene extends Phaser.Scene {

    private spaceKey : Phaser.Input.Keyboard.Key;
    private player : Player;
    private cursors;

    constructor(sceneConfig : Phaser.Types.Scenes.SettingsConfig) {
        super(sceneConfig);
    }

    public preload() {
        this.load.image("tiles", tileset);
        this.load.tilemapTiledJSON("map", titlemap);
        this.load.image("star", star);
    }

    public create() {

        // this.spaceKey = this.input.keyboard.addKey('SPACE');
        this.cursors = this.input.keyboard.createCursorKeys();


        this.add.text(
            0,
            0,
            'Dungeon',
            {
                fontSize: 32,
                color: 'red',
                backgroundColor: 'blue'
            }
        );

        const map = this.make.tilemap({ key: "map" });
        const tileset = map.addTilesetImage("tileset2", "tiles");

        const layer0 = map.createStaticLayer('collision', tileset, 0, 0);
        const layer1 = map.createStaticLayer('ground', tileset, 0, 0);

        // this.player = this.physics.add.sprite(40, 40, 'star');
        this.player = new Player(this, 10, 10, 'star');
    }

    public update() {
        // this.player.body.setVelocity(0);

        // // Horizontal movement
        // if (this.cursors.left.isDown) {
        //     this.player.body.setVelocityX(-100);
        // } else if (this.cursors.right.isDown) {
        //     this.player.body.setVelocityX(100);
        // }

        // // Vertical movement
        // if (this.cursors.up.isDown) {
        //     this.player.body.setVelocityY(-100);
        // } else if (this.cursors.down.isDown) {
        //     this.player.body.setVelocityY(100);
        // }

        // // Normalize and scale the velocity so that player can't move faster along a diagonal
        // this.player.body.velocity.normalize().scale(speed);
    }
}
