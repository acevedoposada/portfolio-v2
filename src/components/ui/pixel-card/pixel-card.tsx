"use client";

import { FocusEventHandler, ReactNode, useEffect, useRef } from "react";
import { cn } from "@/utils/cn";

import styles from './pixel-card.module.scss'

class Pixel {
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
    this._ctx.fillRect(
      this._x + centerOffset,
      this._y + centerOffset,
      this._size,
      this._size
    )
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

function getEffectiveSpeed(value: number, reduceMotion: boolean): number {
  const min = 0;
  const max = 100;
  const throttle = 0.001;

  if (value <= min || reduceMotion) {
    return min;
  } else if (value >= max) {
    return max * throttle;
  } else {
    return value * throttle;
  }
}

const VARIANTS = {
  default: {
    activeColor: null,
    gap: 5,
    speed: 35,
    colors: "#f8fafc,#f1f5f9,#cbd5e1",
    noFocus: false,
  },
  blue: {
    activeColor: "#e0f2fe",
    gap: 10,
    speed: 25,
    colors: "#e0f2fe,#7dd3fc,#0ea5e9",
    noFocus: false,
  },
  yellow: {
    activeColor: "#fef08a",
    gap: 3,
    speed: 20,
    colors: "#fef08a,#fde047,#eab308",
    noFocus: false,
  },
  pink: {
    activeColor: "#fecdd3",
    gap: 6,
    speed: 80,
    colors: "#fecdd3,#fda4af,#e11d48",
    noFocus: true,
  },
} as const;

interface PixelCardProps {
  variant?: keyof typeof VARIANTS;
  gap?: number;
  speed?: number;
  colors?: string;
  noFocus?: boolean;
  className?: string;
  children: ReactNode;
}

interface VariantConfig {
  activeColor: string | null;
  gap: number;
  speed: number;
  colors: string;
  noFocus: boolean;
}

export default function PixelCard({
  variant = 'default',
  gap,
  speed,
  colors,
  noFocus,
  className = '',
  children
}: PixelCardProps): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pixelsRef = useRef<Pixel[]>([]);
  const animationRef = useRef<ReturnType<typeof requestAnimationFrame> | null>(
    null
  );
  const timePreviousRef = useRef(performance.now());

  const variantCfg: VariantConfig = VARIANTS[variant] || VARIANTS.default;
  const finalGap = gap ?? variantCfg.gap;
  const finalSpeed = speed ?? variantCfg.speed;
  const finalColors = colors ?? variantCfg.colors;
  const finalNoFocus = noFocus ?? variantCfg.noFocus;

  const initPixels = () => {
    if (!containerRef.current || !canvasRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const width = Math.floor(rect.width);
    const height = Math.floor(rect.height);
    const ctx = canvasRef.current.getContext("2d");

    canvasRef.current.width = width;
    canvasRef.current.height = height;
    canvasRef.current.style.width = `${width}px`;
    canvasRef.current.style.height = `${height}px`;

    const colorsArray = finalColors.split(',');
    const pxs: Pixel[] = [];

    for (let x = 0; x < width; x += parseInt(finalGap.toString(), 10)) {
      for (let y = 0; y < height; y += parseInt(finalGap.toString(), 10)) {
        const color = colorsArray[Math.floor(Math.random() * colorsArray.length)];
        const dx = x - width / 2;
        const dy = y - height / 2;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const delay = distance;
        if (!ctx) return;
        pxs.push(
          new Pixel(
            canvasRef.current,
            ctx,
            x,
            y,
            color,
            getEffectiveSpeed(finalSpeed, false),
            delay
          )
        )
      }
    }
    pixelsRef.current = pxs;
  }

  const doAnimate = (fnName: keyof Pixel) => {
    animationRef.current = requestAnimationFrame(() => doAnimate(fnName));
    const timeNow = performance.now();
    const timePassed = timeNow - timePreviousRef.current;
    const timeInterval = 1000 / 60;

    if (timePassed < timeInterval) return;
    timePreviousRef.current = timeNow - (timePassed % timeInterval);

    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx || !canvasRef.current) return;

    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    let allIdle = true;
    for (let i = 0; i < pixelsRef.current.length; i++) {
      const pixel = pixelsRef.current[i];
      // @ts-ignore
      pixel[fnName]();
      if (!pixel.isIdle) {
        allIdle = false;
      }
    }
    if (allIdle) {
      cancelAnimationFrame(animationRef.current);
    }
  }

  const handleAnimation = (name: keyof Pixel) => {
    if (animationRef.current !== null) {
      cancelAnimationFrame(animationRef.current);
    }
    animationRef.current = requestAnimationFrame(() => doAnimate(name))
  }

  const onMouseEnter = () => handleAnimation('appear');
  const onMouseLeave = () => handleAnimation('disappear');
  const onFocus: FocusEventHandler<HTMLDivElement> = (e) => {
    if (e.currentTarget.contains(e.relatedTarget)) return;
    handleAnimation('appear');
  }
  const onBlur: FocusEventHandler<HTMLDivElement> = (e) => {
    if (e.currentTarget.contains(e.relatedTarget)) return;
    handleAnimation('disappear');
  }

  useEffect(() => {
    initPixels();
    const observer = new ResizeObserver(() => {
      initPixels();
    })
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => {
      observer.disconnect();
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    }
  }, [finalGap, finalSpeed, finalColors, finalNoFocus]);

  return (
    <div
      ref={containerRef}
      className={cn(styles["pixel-card"], className)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocus={finalNoFocus ? undefined : onFocus}
      onBlur={finalNoFocus ? undefined : onBlur}
      tabIndex={finalNoFocus ? -1 : 0}
    >
      <canvas ref={canvasRef} className={styles["pixel-card__canvas"]} />
      <div className={styles['pixel-card__content']}>
        {children}
      </div>
    </div>
  )
}