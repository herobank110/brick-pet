import $ from 'jquery';

/**
 * initial callback for creating engine,
 * @returns initial state
 */
type InitFunction<State> = () => State;

/** per frame callback for drawing on a 2d canvas (already cleared) */
type DrawFunction<State> = (
  state: State,
  ctx: CanvasRenderingContext2D,
) => void;

type InitOptions<State> = {
  init: InitFunction<State>;
  draw: DrawFunction<State>;
  canvasParentSelector?: string;
};

/** start the game engine */
export default <State = void>(options: InitOptions<State>) =>
  $(() => initImpl<State>(options));

function initImpl<State>(options: InitOptions<State>) {
  const c = $('<canvas>') as JQuery<HTMLCanvasElement>;
  // TODO: check if canvasParentSelector is valid or throw
  $(options.canvasParentSelector || 'body').append(c);

  fillToWindow(c);
  $(window).on('resize', () => fillToWindow(c));

  const state = options.init();
  function run() {
    const ctx = c[0].getContext('2d');
    if (!ctx) {
      throw new Error("couldn't get context");
    }
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    options.draw(state, ctx);
    requestAnimationFrame(run);
  }
  requestAnimationFrame(run);
}

function fillToWindow(c: JQuery<HTMLCanvasElement>) {
  const sz = { width: c.parent().width()!, height: c.parent().height()! };
  c.attr(sz).css(sz);
}
