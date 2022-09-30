import { normalizeDate } from './shared-util-date-fns';

describe('sharedUtilDateFns', () => {
  it('should convert date', () => {
    expect(normalizeDate("2015-10-04T00:00:00.000Z")).toEqual('2015-10-04');
  });
});
