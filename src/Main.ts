import Phaser, { Scale } from 'phaser'
import GameScene from './GameScene'
import TitleScreenScene from './TitleScreenScene'
import DungeonScene from './DungeonScene'

class Startup {
    public static main(): number {
        let sceneConfig : Phaser.Types.Scenes.SettingsConfig  = {
            key: 'key-1',
            active: true
        }

        const game = new Phaser.Game({
            type: Phaser.AUTO,
            width: 16 * 14,
            height: 16 * 10,
            zoom: 4,
            scale: {
                // mode: Phaser.Scale.ZOOM_4X
            },
            render: {
                pixelArt: true
            },
            physics: {
                default: "arcade",
                arcade: {
                  gravity: { y: 0 }
                }
            },
            // scene: new TitleScreenScene(sceneConfig)
            scene: new DungeonScene(sceneConfig)
        });

        return 0;
    }
}

Startup.main();
