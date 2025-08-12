export const rgbToHex = (r: number, g: number, b: number): string =>
  '#' + 
  [r, g, b].map(v => Math.max(0, Math.min(255, v))
    .toString(16)
    .padStart(2, '0'))
    .join('');
                 