import MyEngine from './myEngine';

type State = {
  a: string;
};

function init(): State {
  return {
    a: 'orange',
  };
}

function draw(state: State, ctx: CanvasRenderingContext2D) {
  ctx.strokeStyle = state.a;
  ctx.beginPath();
  ctx.moveTo(10, 10);
  ctx.lineTo(ctx.canvas.width - 10, ctx.canvas.height - 10);
  ctx.stroke();
}

MyEngine({ init, draw, canvasParentSelector: '#viewport' });
