import moment from "moment";

export const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

export const repeat = (count, fn) => {
  Array(count).fill(``).forEach(fn);
};

export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};


export const getRandomFloat = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return lower + Math.random() * (upper - lower + 1);
};

export const getRandomArrayItem = (array) => {
  const randomIndex = getRandomInteger(0, (array.length - 1));
  return array[randomIndex];
};

export const getRandomArrayFromArray = (prototype, maxLengthNewArr) => {
  const count = getRandomInteger(1, maxLengthNewArr);
  const newArr = new Set();
  while (newArr.size < count) {
    newArr.add(getRandomArrayItem(prototype));
  }
  return Array.from(newArr);
};


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
