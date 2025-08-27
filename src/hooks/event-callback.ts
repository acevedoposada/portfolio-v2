'use client';
import * as React from 'react';
import useEnhancedEffect from './enhanced-event';

function useEventCallback<Fn extends (...args: any[]) => any = (...args: unknown[]) => unknown>(
  fn: Fn,
): Fn;
function useEventCallback<Args extends unknown[], Return>(
  fn: (...args: Args) => Return,
): (...args: Args) => Return;
function useEventCallback<Args extends unknown[], Return>(
  fn: (...args: Args) => Return,
): (...args: Args) => Return {
  const ref = React.useRef(fn);
  useEnhancedEffect(() => {
    ref.current = fn;
  });
  return React.useRef((...args: Args) =>
    // @ts-expect-error hide `this`
    (0, ref.current!)(...args),
  ).current;
}

export default useEventCallback;