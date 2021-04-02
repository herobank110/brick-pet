import MyEngine from './myEngine';
import { iota } from './utils';
import $ from 'jquery';

type UIColor = 'cyan' | 'indigo' | 'purple';

type State = {
  a: string;
  uiSelectedColor: UIColor;
};

const makePalette = (data: { state: State; n: number }) =>
  $('<div>', { class: 'palette' }).append(
    $('<div>', { class: 'palette__header' }).append(
      $('<h4>', { class: 'headline', text: 'Pieces' }),
      $('<div>', { class: 'action-bar' }).append(
        $('<button>', {
          id: 'color-btn',
          css: { background: data.state.uiSelectedColor },
        }),
      ),
    ),
    $('<div>', { class: 'palette__grid' }).append(
      iota(data.n).map(i => $('<div>', { class: 'palette__cell' })),
    ),
  );

function init(): State {
  const state: State = {
    a: 'orange',
    uiSelectedColor: 'cyan',
  };

  $('#palette').append(makePalette({ state, n: 10 }));
  return state;
}

function draw(state: State, ctx: CanvasRenderingContext2D) {
  ctx.strokeStyle = state.a;
  ctx.beginPath();
  ctx.moveTo(10, 10);
  ctx.lineTo(ctx.canvas.width - 10, ctx.canvas.height - 10);
  ctx.stroke();
}

MyEngine({ init, draw, canvasParentSelector: '#viewport' });
