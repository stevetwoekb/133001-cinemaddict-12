import {getRandomInteger} from '../utils.js';

export const generateUserMovieWatch = () => {
  const userMovieWatch = {
    movieWatch: getRandomInteger(0, 30)
  };
  return userMovieWatch;
};
