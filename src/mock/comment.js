import {getRandomArrayItem, getRandomDate} from '../utils';

const EMOJIIS = [`smile`, `sleeping`, `puke`, `angry`];

const COMMENTS = [
  `Interesting setting and a good cas`,
  `Booooooooooring`,
  `Very very old. Meh`,
  `Almost two hours? Seriously?`,
];

const AUTHORS = [
  `Tim Macoveev`,
  `John Doe`,
  `Ann Jonson`,
  `Kate Midolton`,
  `Alex Sigal`,
  `Jeny Stark`,
];

const MIN_COMMENT_DATE = 2018;
const MAX_COMMENT_DATE = 2020;


export const generateComment = () => {
  return {
    text: getRandomArrayItem(COMMENTS),
    author: getRandomArrayItem(AUTHORS),
    data: getRandomDate(MIN_COMMENT_DATE, MAX_COMMENT_DATE),
    emoji: getRandomArrayItem(EMOJIIS),
  };
};
