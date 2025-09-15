import { describe, it, expect } from 'vitest';
import { SquareDances } from './SquareDance';

describe('Square Dance filter', () => {
  it('performs a square Dance on a sequence', () => {
    const input = [4, 3, 5, 16, 17, 35];
    const expected = [4, 4, 8, 16, 25, 36];
    expect(SquareDances(input)).toEqual(expected);
  });
});