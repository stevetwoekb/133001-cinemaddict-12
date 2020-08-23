import moment from "moment";

export const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`
};

export const render = (container, element, place = RenderPosition.BEFOREEND) => {
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(element);
      break;
    case RenderPosition.BEFOREEND:
      container.append(element);
      break;
  }
};

export const renderTemplate = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

export const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;
  return newElement.firstChild;
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
