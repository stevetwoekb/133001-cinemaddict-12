import {getRandomArrayItem, getRandomDate} from '../utils';

const EMOJIIS = [`smile`, `sleeping`, `puke`, `angry`];

const COMMENTS = [
  `Interesting setting and a good cas`,
  `Booooooooooring`,
  `Very very old. Meh`,
  `Almost two hours? Seriously?`,
];

const AUTORS = [
  `Tim Macoveev`,
  `John Doe`,
  `Ann Jonson`,
  `Kate Midolton`,
  `Alex Sigal`,
  `Jeny Stark`,
];

export const generateComment = () => {
  return {
    text: getRandomArrayItem(COMMENTS),
    autor: getRandomArrayItem(AUTORS),
    data: getRandomDate(2018, 2020),
    emoji: getRandomArrayItem(EMOJIIS),
  };
};
