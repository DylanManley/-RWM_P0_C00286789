// src/lib/combined/combined.test.ts
import { describe, it, expect } from 'vitest';
import { combinedFilter } from './combined';

describe('combined (mine → peer)', () => {
  it('basic sequence', () => {
    const input = [1, 3, 5, 7, 9];
   
    const expected = [0, 0, 0, 0, 0];
    expect(combinedFilter(input)).toEqual(expected);
  });

  it('edge cases', () => {
    expect(combinedFilter([])).toEqual([]);

  });
});
