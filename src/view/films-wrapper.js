import Abstract from './abstract.js';

const createFilmsWrapperTemplate = () => {
  return (
    `<section class="films"></section>`
  );
};


export default class FilmsWrapper extends Abstract {
  getTemplate() {
    return createFilmsWrapperTemplate();
  }
}
