import {getRandomInteger} from '../utils/common.js';

const MIN_MOVIE_WATCH = 0;
const MAX_MOVIE_WATCH = 30;

export const generateUserMovieWatch = () => {
  const userMovieWatch = {
    movieWatch: getRandomInteger(MIN_MOVIE_WATCH, MAX_MOVIE_WATCH)
  };
  return userMovieWatch;
};
