import {createElement} from "../utils.js";

const createNoFilmMessageTemplate = () => {
  return (
    `<h2 class="films-list__title">There are no movies in our database</h2>`
  );
};

export default class NoFilmsMessage {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createNoFilmMessageTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
