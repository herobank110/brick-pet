import $ from 'jquery';

/** per frame callback for everything on a 2d canvas */
type TickFn = (ctx: CanvasRenderingContext2D) => void;

/** start the game engine */
export function init(tickFn: TickFn) {
  $(() => initImpl(tickFn));
}

function initImpl(tickFn: TickFn) {
  const c = $('<canvas>') as JQuery<HTMLCanvasElement>;
  $('body').append(c);

  fillToWindow(c);
  $(window).on('resize', () => fillToWindow(c));

  function run() {
    const ctx = c[0].getContext('2d');
    if (!ctx) {
      throw new Error("couldn't get context");
    }
    tickFn(ctx);
    requestAnimationFrame(run);
  }
  requestAnimationFrame(run);
}

function fillToWindow(c: JQuery<HTMLCanvasElement>) {
  const sz = { width: c.parent().width()!, height: c.parent().height()! };
  c.attr(sz).css(sz);
}