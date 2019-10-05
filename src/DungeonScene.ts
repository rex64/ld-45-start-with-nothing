import Phaser from 'phaser';

const tileset = require('./assets/tileset2.png');
const titlemap = require('./assets/titlemap.json');

export default class DungeonScene extends Phaser.Scene {

    private spaceKey : Phaser.Input.Keyboard.Key;

    constructor(sceneConfig : Phaser.Types.Scenes.SettingsConfig) {
        super(sceneConfig);
    }

    public preload() {
        this.load.image("tiles", tileset);
        this.load.tilemapTiledJSON("map", titlemap);
    }

    public create() {

        // this.spaceKey = this.input.keyboard.addKey('SPACE');

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

        const layer = map.createStaticLayer('Tile Layer 1', tileset, 0, 0);
    }

    public update() {
        // if (this.spaceKey.isDown) {
        //     this.scene.run('key-2', new)
        // }
    }
}
