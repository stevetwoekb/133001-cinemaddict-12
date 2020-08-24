
import {createElement} from '../utils.js';

const createFilmsListExtraTemplate = () => {
  return (
    `<section class="films-list--extra">
        <h2 class="films-list__title">Top rated</h2>
        <div class="films-list__container"></div>
        </section>
        <section class="films-list--extra">
      <h2 class="films-list__title">Most commented</h2>
      <div class="films-list__container"></div>
    </section>`
  );
};


export default class FilmsExtraRatedList {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createFilmsListExtraTemplate();
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
