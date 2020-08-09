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

const NAME = [`Anthony`, `Anne`, `Herald`, `Richard`, `Dan`, `Mary`, `Erich`, `Kate`];
const SURNAME = [`Mann`, `von Stroheim`, `Hughes`, `Weil`, `Pit`, `Brown`, `Duryea`, `Ivanov`];

const generateRating = () => {
  return getRandomFloat(0, 10).toFixed(1);
};

const getRandomPeople = () => {
  return (`${getRandomArrayItem(NAME)} ${getRandomArrayItem(SURNAME)}`);
};
const gegetRandomPeoples = (min, max) => {
  const count = getRandomInteger(min, max);
  return Array.from({length: count}, getRandomPeople).join`, `;
};


export const generateFilmCard = () => {
  const getComments = [];
  repeat(getRandomInteger(2, 7), () => {
    getComments.push(generateComment());
  });

  return {
    poster: getRandomArrayItem(POSTERS),
    title: getRandomArrayItem(TITLES),
    originaTitle: getRandomArrayItem(TITLES),
    rating: generateRating(),
    director: getRandomPeople(),
    writers: gegetRandomPeoples(1, 4),
    actors: gegetRandomPeoples(5, 12),
    releaseDate: getRandomDate(1950, 2020),
    duration: getRandomInteger(60, 200),
    country: `USA`,
    genres: getRandomArrayFromArray(GENRES, 5),
    description: getRandomArrayFromArray(DESCRIPTIONS, 5).join(` `),
    ageRating: `18`,
    comments: getComments,
    watchlist: getRandomBoolean(),
    watched: getRandomBoolean(),
    favorites: getRandomBoolean(),
  };
};
