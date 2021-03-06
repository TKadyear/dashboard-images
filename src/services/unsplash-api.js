import { conversionDataApi } from "./conversion-data-from-api";
const API_KEY = "MIMdH3XPFMcOFvYg9cbiQ5iLuiLml2Fa14CGidU5ZXM";
export const searchCharacters = (search) => {
  const CANTIDAD_POR_PAGINA = 24;
  const PAGE = 1;
  return fetch(`https://api.unsplash.com/search/photos/?query=${search}&page=${PAGE}&per_page=${CANTIDAD_POR_PAGINA}&client_id=${API_KEY}`,
    {
      method: "GET",
    }
  )
    .then((response) => response.json())
    .then((response) => {
      const resultApi = response.results.map(item => conversionDataApi(item));
      return resultApi;
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
};
export const getRandomPhoto = () => {
  return fetch(`https://api.unsplash.com/photos/random/?orientation=landscape&client_id=${API_KEY}`,
    {
      method: "GET",
    }
  )
    .then((response) => response.json())
    .then((response) => response.urls.regular)
    .catch((error) => {
      console.error(error);
      return {};
    });
};
