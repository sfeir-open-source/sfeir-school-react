/**
 *
 * @param date
 * @returns new date in format yyyy-mm-dd to satisfie the Input type="date" format
 */
export const normalizeDate = (date: string): string => {
  if (date.includes('-')) return date;
  const [day, month, year] = date.split('/');
  return `${year}-${month}-${day}`;
};

/**
 *
 * @param date
 * @returns new date in format dd/mm/yyyy to satisfie the API format
 */
export const unNormalizeDate = (date: string): string => {
  if (date.includes('/')) return date;
  const [year, month, day] = date.split('-');
  return `${day}/${month}/${year}`;
};
