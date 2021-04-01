import MyEngine from './myEngine';

function init() {}

function draw(ctx: CanvasRenderingContext2D) {
  ctx.strokeStyle = 'white';
  ctx.beginPath();
  ctx.moveTo(10, 10);
  ctx.lineTo(ctx.canvas.width - 10, ctx.canvas.height - 10);
  ctx.stroke();
}

MyEngine({ init, draw, canvasParentSelector: '#viewport' });
