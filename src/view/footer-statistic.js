import {getRandomInteger} from '../utils.js';

export const createFooterStatisticTemplate = () => {
  const statMock = getRandomInteger(1000, 25000);
  return (
    `
      <section class="footer__statistics">
        <p>${statMock} movies inside</p>
      </section>
    `
  );
};
