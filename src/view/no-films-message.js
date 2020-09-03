import Abstract from "./abstract.js";

const createNoFilmMessageTemplate = () => {
  return (
    `<h2 class="films-list__title">There are no movies in our database</h2>`
  );
};

export default class NoFilmsMessage extends Abstract {
  getTemplate() {
    return createNoFilmMessageTemplate();
  }

}
