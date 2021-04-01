import MyEngine from './myEngine';

type State = {
  a: string;
};

const init = (): State => ({
  a: 'haha',
});

function draw(state: State, ctx: CanvasRenderingContext2D) {
  ctx.strokeStyle = 'white';
  ctx.beginPath();
  ctx.moveTo(10, 10);
  ctx.lineTo(ctx.canvas.width - 10, ctx.canvas.height - 10);
  ctx.stroke();
}

MyEngine({ init, draw, canvasParentSelector: '#viewport' });
