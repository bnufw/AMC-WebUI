import { describe, expect, it } from 'vitest';
import { AVAILABLE_THEMES } from './themeRegistry';

describe('themeRegistry', () => {
  it('registers the graphite theme between dark and light', () => {
    expect(AVAILABLE_THEMES.map((theme) => theme.id)).toEqual(['onyx', 'graphite', 'pearl']);

    const graphite = AVAILABLE_THEMES.find((theme) => theme.id === 'graphite');

    expect(graphite?.name).toBe('Graphite (Gray)');
    expect(graphite?.colors.bgPrimary).toBe('#2b3038');
    expect(graphite?.colors.bgSecondary).toBe('#22272f');
    expect(graphite?.colors.textPrimary).toBe('#f1f3f5');
  });
});
