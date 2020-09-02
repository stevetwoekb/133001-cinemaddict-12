import Abstract from "./abstract.js";

import {getRandomInteger} from '../utils/common.js';

const createFooterStatisticTemplate = () => {
  const statMock = getRandomInteger(1000, 25000);
  return (
    `<section class="footer__statistics">
        <p>${statMock} movies inside</p>
      </section>`
  );
};


export default class FooterStatistic extends Abstract {
  getTemplate() {
    return createFooterStatisticTemplate();
  }
}
