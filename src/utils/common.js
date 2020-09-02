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

const shuffleArray = (items) => {
  const newItems = items.slice();
  for (let i = newItems.length - 1; i > 0; i--) {
    const j = getRandomInteger(0, newItems.length - 1);
    [newItems[j], newItems[i]] = [newItems[i], newItems[j]];
  }
  return newItems;
};


export const getRandomArrayFromArray = (itmes) => {
  return shuffleArray(itmes);
};
