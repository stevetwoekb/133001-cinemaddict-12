import {getRandomInteger, createElement} from '../utils.js';

const createFooterStatisticTemplate = () => {
  const statMock = getRandomInteger(1000, 25000);
  return (
    `<section class="footer__statistics">
        <p>${statMock} movies inside</p>
      </section>`
  );
};


export default class FooterStatistic {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createFooterStatisticTemplate();
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
