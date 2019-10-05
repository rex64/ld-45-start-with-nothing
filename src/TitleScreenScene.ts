import Phaser from 'phaser';
// import star from './assets/star.png'; // perche require funziona e import no?
const star = require('./assets/star.png');
import IntroScreenScene from './IntroScreenScene'


export default class TitleScreenScene extends Phaser.Scene {

    private spaceKey : Phaser.Input.Keyboard.Key;

    constructor(sceneConfig : Phaser.Types.Scenes.SettingsConfig) {
        super(sceneConfig);
    }

    public preload() {
        this.scene.add('scene-2', IntroScreenScene, false);
    }

    public create() {

        this.spaceKey = this.input.keyboard.addKey('SPACE');

        this.add.text(
            0,
            0,
            'Title Screen\nPress any key to continue',
            {
                fontSize: 32,
                color: 'red',
                backgroundColor: 'blue'
            }
        );
    }

    public update() {
        if (this.spaceKey.isDown) {
            this.scene.start('scene-2');
        }
    }
}
