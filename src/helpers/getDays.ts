export const getDays = (start: Date, end: Date): Date[] => {
  const days = [];
  for (let i = new Date(start); i <= end; i.setDate(i.getDate() + 1)) {
    days.push(new Date(i));
  }
  return days;
};
