import Phaser from 'phaser';

export default class IntroScreenScene extends Phaser.Scene {

    private spaceKey : Phaser.Input.Keyboard.Key;

    constructor(sceneConfig : Phaser.Types.Scenes.SettingsConfig) {
        super(sceneConfig);
    }

    public preload() {
    }

    public create() {

        // this.spaceKey = this.input.keyboard.addKey('SPACE');

        this.add.text(
            0,
            0,
            'Intro',
            {
                fontSize: 32,
                color: 'red',
                backgroundColor: 'blue'
            }
        );
    }

    public update() {
        // if (this.spaceKey.isDown) {
        //     this.scene.run('key-2', new)
        // }
    }
}
