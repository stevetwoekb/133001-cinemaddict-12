import {getRandomInteger, getRandomFloat, getRandomArrayItem, getRandomArrayFromArray, getRandomBoolean, getRandomDate, repeat} from '../utils';
import {generateComment} from './comment.js';

const POSTERS = [
  `made-for-each-other.png`,
  `popeye-meets-sinbad.png`,
  `sagebrush-trail.jpg`,
  `santa-claus-conquers-the-martians.jpg`,
  `the-dance-of-life.jpg`,
  `the-great-flamarion.jpg`,
  `the-man-with-the-golden-arm.jpg`,
];

const DESCRIPTIONS = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. `,
  `Cras aliquet varius magna, non porta ligula feugiat eget. `,
  `Fusce tristique felis at fermentum pharetra. `,
  `Aliquam id orci ut lectus varius viverra. `,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. `,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. `,
  `Sed sed nisi sed augue convallis suscipit in sed felis. `,
  `Aliquam erat volutpat. `,
  `Nunc fermentum tortor ac porta dapibus. `,
  `In rutrum ac purus sit amet tempus`,
];

const TITLES = [
  `Made for each other`,
  `Popeye meets sinbad`,
  `Sagebrush trail`,
  `Santa claus conquers the martians`,
  `The dance of life`,
  `The great flamarion`,
  `The man with the golden arm`
];

const GENRES = [
  `Western`,
  `Drama`,
  `Comedy`,
  `Cartoon`,
  `Musical`,
  `Mystery`,
];

const MIN_FILM_RATING = 0;
const MAX_FILM_RATING = 10;

const MIN_DURATION = 60;
const MAX_DURATION = 200;

const MIN_AGE_RATING = 0;
const MAX_AGE_RATING = 18;

const MIN_WRITES = 1;
const MAX_WRITES = 4;

const MIN_ACTORS = 5;
const MAX_ACTORS = 12;

const MIN_RELEASE_DATE = 1950;
const MAX_RELEASE_DATE = 2020;

const MIN_COMMENTS = 2;
const MAX_COMMENTS = 7;

const NAME = [`Anthony`, `Anne`, `Herald`, `Richard`, `Dan`, `Mary`, `Erich`, `Kate`];
const SURNAME = [`Mann`, `von Stroheim`, `Hughes`, `Weil`, `Pit`, `Brown`, `Duryea`, `Ivanov`];

const COUNTRY = [`USA`, `RUSSIA`, `ITALY`, `CANADA`, `France`];

const GENRES_COUNT = 5;
const DESCRIPTIONS_COUNT = 5;

const generateRating = (min, max) => {
  return getRandomFloat(min, max).toFixed(1);
};

const getRandomPeople = () => {
  return (`${getRandomArrayItem(NAME)} ${getRandomArrayItem(SURNAME)}`);
};
const getRandomPeoples = (min, max) => {
  const count = getRandomInteger(min, max);
  return Array.from({length: count}, getRandomPeople).join`, `;
};


export const generateFilmCard = () => {
  const commentsList = [];
  repeat(getRandomInteger(MIN_COMMENTS, MAX_COMMENTS), () => {
    commentsList.push(generateComment());
  });

  return {
    poster: getRandomArrayItem(POSTERS),
    title: getRandomArrayItem(TITLES),
    originalTitle: getRandomArrayItem(TITLES),
    rating: generateRating(MIN_FILM_RATING, MAX_FILM_RATING),
    director: getRandomPeople(),
    writers: getRandomPeoples(MIN_WRITES, MAX_WRITES),
    actors: getRandomPeoples(MIN_ACTORS, MAX_ACTORS),
    releaseDate: getRandomDate(MIN_RELEASE_DATE, MAX_RELEASE_DATE),
    duration: getRandomInteger(MIN_DURATION, MAX_DURATION),
    country: getRandomArrayItem(COUNTRY),
    genres: getRandomArrayFromArray(GENRES, GENRES_COUNT),
    description: getRandomArrayFromArray(DESCRIPTIONS, DESCRIPTIONS_COUNT).join(` `),
    ageRating: getRandomInteger(MIN_AGE_RATING, MAX_AGE_RATING),
    comments: commentsList,
    watchlist: getRandomBoolean(),
    watched: getRandomBoolean(),
    favorites: getRandomBoolean(),
  };
};
