import { normalizeDate } from './shared-util-date-fns';

describe('sharedUtilDateFns', () => {
  test.each([
    { date: "2015-10-04T00:00:00.000Z", expected: '2015-10-04' },
    { date: "2015-13-04T00:00:00.000Z", expected: 'Invalid Date' },
    { date: "", expected: 'Invalid Date' }
  ])('normalize date correctly', ({ date, expected }) => {
    expect(normalizeDate(date)).toBe(expected);
  })
});
