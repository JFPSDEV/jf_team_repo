import { Level } from './Level';
import { coinScale, getPercent } from '../utils';
import { drawCvCoins, draw, coinsNumberInWidth } from './draw';

export class CVLevel extends Level {
  create(): void {
    const W = this.cameras.main.width;
    var H = this.cameras.main.height;

    const centerX = getPercent(50, W);

    const startY = H - 315;
    const startX = centerX - (coinsNumberInWidth * coinScale) / 2;

    this.createGame({
      playerStart: { x: getPercent(10, W), y: getPercent(60, H) },
      coins: draw(drawCvCoins, startX, startY, coinScale)
    });
  }
}
