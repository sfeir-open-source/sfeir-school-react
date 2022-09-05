/**
 *
 * @param date
 * @returns new date in format yyyy-mm-dd to satisfie the Input type="date" format
 */
export const normalizeDate = (date: string) =>
  new Date(date).toLocaleDateString('en-CA');
//return dateObj.toISOString().split('T')[0];
