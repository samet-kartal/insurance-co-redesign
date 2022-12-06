export const localeTextCompare = (text, searchText, { locale = 'tr' } = {}) => {
  return text
    .toLocaleLowerCase(locale)
    .includes(searchText.toLocaleLowerCase(locale));
};
