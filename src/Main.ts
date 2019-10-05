import Phaser from 'phaser'
import GameScene from './GameScene'
import TitleScreenScene from './TitleScreenScene'

class Startup {
    public static main(): number {
        let sceneConfig : Phaser.Types.Scenes.SettingsConfig  = {
            key: 'key-1',
            active: true
        }

        const game = new Phaser.Game({
            type: Phaser.AUTO,
            width: 640,
            height:480,
            render: ({
                pixelArt: true,
            }),
            scene: new TitleScreenScene(sceneConfig)
        });

        return 0;
    }
}

Startup.main();
