import { describe, expect, it } from 'vitest';
import { blankData, dateKey, formatMinutes, monthKey, weekKey } from './data';

describe('data helpers', () => {
  it('creates a complete empty data set', () => {
    const data = blankData();
    expect(data.weeklyTasks).toEqual([]);
    expect(data.dailyLifeLogs).toEqual([]);
    expect(data.categories.length).toBeGreaterThan(0);
  });
  it('formats elapsed minutes', () => {
    expect(formatMinutes(30)).toBe('30 分钟');
    expect(formatMinutes(80)).toBe('1 小时 20 分钟');
  });
  it('returns stable date shapes', () => {
    expect(dateKey(new Date('2026-10-31T00:00:00Z'))).toMatch(/^2026-10-/);
    expect(monthKey(new Date('2026-10-31T00:00:00Z'))).toMatch(/^2026-10$/);
    expect(weekKey(new Date('2026-10-31T00:00:00Z'))).toMatch(/^2026-10-/);
  });
});
