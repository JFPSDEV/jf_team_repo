import { Phaser } from "@jfteam/phaser_next"

export const gameId: string = 'phaser-game';

export const config: Phaser.Types.Core.GameConfig = {
    width: 800,
    height: 600,
    type: Phaser.AUTO,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    parent: gameId,
};

