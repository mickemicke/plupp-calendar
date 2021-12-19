import { getDays } from './getDays';

export const createDaysList = (start: Date, end: Date, locale = 'sv-SE'): string[] => {
  const days = getDays(start, end);
  return days.map((day) => day.toLocaleDateString(locale));
};
