import { init } from './myEngine';

function draw(ctx: CanvasRenderingContext2D) {
  ctx.beginPath();
  ctx.moveTo(10, 10);
  ctx.lineTo(ctx.canvas.width - 10, ctx.canvas.height - 10);
  ctx.stroke();
}

init('#viewport', draw);
