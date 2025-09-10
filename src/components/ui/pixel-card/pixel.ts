export class Pixel {
  private _width: number;
  private _height: number;
  private _ctx: CanvasRenderingContext2D;
  private _x: number;
  private _y: number;
  private _color: string;
  private _speed: number;
  private _size: number;
  private _sizeStep: number;
  private _minSize: number;
  private _maxSizeInteger: number;
  private _maxSize: number;
  private _delay: number;
  private _counter: number;
  private _counterStep: number;
  private _isReverse: boolean;
  private _isShimmer: boolean;

  isIdle: boolean;

  constructor(
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
    x: number,
    y: number,
    color: string,
    speed: number,
    delay: number
  ) {
    this._width = canvas.width;
    this._height = canvas.height;
    this._ctx = context;
    this._x = x;
    this._y = y;
    this._color = color;
    this._speed = this._getRandomValue(0.1, 0.9) * speed;
    this._size = 0;
    this._sizeStep = Math.random() * 0.4;
    this._minSize = 0.5;
    this._maxSizeInteger = 2;
    this._maxSize = this._getRandomValue(this._minSize, this._maxSizeInteger);
    this._delay = delay;
    this._counter = 0;
    this._counterStep = Math.random() * 4 + (this._width + this._height) * 0.01;
    this.isIdle = false;
    this._isReverse = false;
    this._isShimmer = false;
  }

  private _getRandomValue(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }

  private _draw(): void {
    const centerOffset = this._maxSizeInteger * 0.5 - this._size * 0.5;
    this._ctx.fillStyle = this._color;
    this._ctx.fillRect(this._x + centerOffset, this._y + centerOffset, this._size, this._size);
  }

  public appear(): void {
    this.isIdle = false;
    if (this._counter <= this._delay) {
      this._counter += this._counterStep;
      return;
    }
    if (this._size >= this._maxSize) {
      this._isShimmer = true;
    }
    if (this._isShimmer) {
      this.shimmer();
    } else {
      this._size += this._sizeStep;
    }
    this._draw();
  }

  public disappear(): void {
    this._isShimmer = false;
    this._counter = 0;
    if (this._size <= 0) {
      this.isIdle = true;
      return;
    } else {
      this._size -= 0.1;
    }
    this._draw();
  }

  public shimmer(): void {
    if (this._size >= this._maxSize) {
      this._isReverse = true;
    } else if (this._size <= this._minSize) {
      this._isReverse = false;
    }
    if (this._isReverse) {
      this._size -= this._speed;
    } else {
      this._size += this._speed;
    }
  }
}
