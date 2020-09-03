import moment from "moment";
import {getRandomInteger} from './common';

export const getRandomBoolean = () => {
  return Boolean(getRandomInteger(0, 1));
};

export const getRandomDate = (start, end) => {
  const startDate = new Date(start, 1, 1).getTime();
  const endDate = new Date(end, 1, 1).getTime();
  return new Date(getRandomInteger(startDate, endDate));
};

export const formatTime = (time) => {
  const hours = Math.floor(time / 60);
  const minutes = time % 60;

  return `${hours}h ${minutes}m`;
};

export const formatDateRelease = (date) =>{
  return moment(date).format(`DD MMMM YYYY`);
};


export const sortFilmDate = (firstFilm, secondFilm) => {
  return firstFilm.releaseDate.getTime() - secondFilm.releaseDate.getTime();
};

export const sortFilmRating = (firstFilm, secondFilm) => {
  return firstFilm.rating - secondFilm.rating;
};
