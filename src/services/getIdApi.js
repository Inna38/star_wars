import {
  SWAPI_PEOPLE,
  SWAPI_ROOT,
  URL_IMG_PERSON,
  GUIDE_IMG_EXTENSION,
} from "../constants/api";

const getId = (url, category) => {
  const id = url.replace(SWAPI_ROOT + `${category}`, "").replace(/\//g, "");
  return id;
};

export const getPeopleId = (url) => getId(url, SWAPI_PEOPLE);

export const getPeopleImg = (id) =>
  `${URL_IMG_PERSON}/${id}${GUIDE_IMG_EXTENSION}`;
