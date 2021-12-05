export const toDisplayDate = (date: string) => {
  if (date.length <= 0) {
    return '';
  }
  const dateObj = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return dateObj.toLocaleDateString(undefined, options);
};
