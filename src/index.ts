import MyEngine from './myEngine';
import { iota } from './utils';
import $ from 'jquery';

type State = {
  a: string;
};

const makePalette = (data: { n: number }) =>
  $('<div>', { class: 'palette' }).append(
    $('<h4>', { class: 'headline', text: 'Make a Selection' }),
    $('<div>', { class: 'palette__grid' }).append(
      iota(data.n).map(i => $('<div>', { class: 'palette__cell' })),
    ),
  );

function init(): State {
  $('#palette').append(makePalette({ n: 10 }));

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
