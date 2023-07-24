export const getReleaseYear = (date?: string): string => {
  if (!date) {
    return '';
  }
  return date.split('-')?.[0] || '';
};
