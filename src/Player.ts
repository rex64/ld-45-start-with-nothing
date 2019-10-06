import Phaser from 'phaser';

export default class Player extends Phaser.GameObjects.Sprite {


    constructor(scene, x, y, frame) {
        super(scene, x, y, frame)

        this.scene.physics.world.enable(this);
        this.body
        // this.body. setGravityY(10);
    // this.body.setSize(17, 12);
        // @ts-ignore
        this.body.setGravityY(10);
        this.scene.add.existing(this);
    }

    public update() {
         // Stop any previous movement from the last frame
        // @ts-ignore
        this.body.setVelocity(0);

        // Horizontal movement
        if (cursors.left.isDown) {
        // @ts-ignore

            this.body.setVelocityX(-100);
        } else if (cursors.right.isDown) {
        // @ts-ignore

            this.body.setVelocityX(100);
        }

        // Vertical movement
        if (cursors.up.isDown) {
        // @ts-ignore

            this.body.setVelocityY(-100);
        } else if (cursors.down.isDown) {
        // @ts-ignore

            this.body.setVelocityY(100);
        }

        // Normalize and scale the velocity so that player can't move faster along a diagonal
        // @ts-ignore
        this.body.velocity.normalize().scale(speed);
    }
}
