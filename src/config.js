const BASE_URL = 'https://api.itbook.store/books/';

// export const ALL_COUNTRIES = BASE_URL + 'all?fields=name,capital,flags,population,region';

export const searchByCountry = (isbn13) => BASE_URL + 'name/' + isbn13;

export const filterByCode = (codes) => BASE_URL + 'alpha?codes=' + codes.join(',');
