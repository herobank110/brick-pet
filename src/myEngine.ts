import $ from 'jquery';

/** initial callback for creating engine */
type InitFn = () => void;

/** per frame callback for drawing on a 2d canvas (already cleared) */
type DrawFn = (ctx: CanvasRenderingContext2D) => void;

type InitOptions = {
  init: InitFn;
  draw: DrawFn;
  canvasParentSelector?: string;
};

/** start the game engine */
export default (options: InitOptions) => $(() => initImpl(options));

function initImpl(options: InitOptions) {
  const c = $('<canvas>') as JQuery<HTMLCanvasElement>;
  $(options.canvasParentSelector || 'body').append(c);

  fillToWindow(c);
  $(window).on('resize', () => fillToWindow(c));

  function run() {
    const ctx = c[0].getContext('2d');
    if (!ctx) {
      throw new Error("couldn't get context");
    }
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    options.draw(ctx);
    requestAnimationFrame(run);
  }

  options.init();
  requestAnimationFrame(run);
}

function fillToWindow(c: JQuery<HTMLCanvasElement>) {
  const sz = { width: c.parent().width()!, height: c.parent().height()! };
  c.attr(sz).css(sz);
}
