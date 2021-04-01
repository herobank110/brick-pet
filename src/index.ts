import { init } from './myEngine';

function draw(ctx: CanvasRenderingContext2D) {
  ctx.beginPath();
  ctx.moveTo(1, 10);
  ctx.lineTo(100, 10);
  ctx.stroke();
}

init(draw);
