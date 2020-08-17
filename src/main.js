import {createProfileTemplate} from "./view/profile.js";
import {createNavigationTemplate} from './view/navigation.js';
import {createSortingTemplate} from './view/sorting.js';
import {createFilmsWrapperTemplate} from './view/films-wrapper.js';
import {createFilmsListTemplate} from './view/films-list.js';
import {createFilmCardTemplate} from './view/film-card.js';
import {createShowMoreButtonTemplate} from './view/show-more-button.js';
import {createFilmsListExtraTemplate} from './view/films-list-extra.js';
import {createFooterStatisticTemplate} from './view/footer-statistic.js';
import {createFilmDetailsTemplate} from './view/film-details.js';
import {generateFilmCard} from './mock/film-card.js';
import {generateFilter} from './mock/filter.js';
import {render} from './utils.js';

const FILM_CARD_COUNT = 25;
const FILM_CARD_PER_STEP = 5;
const POPULAR_FILM_CARD_COUNT = 2;

const filmCards = new Array(FILM_CARD_COUNT).fill().map(generateFilmCard);
const filters = generateFilter(filmCards);

const headerElement = document.querySelector(`.header`);
const mainElement = document.querySelector(`.main`);

render(headerElement, createProfileTemplate());
render(mainElement, createNavigationTemplate(filters));
render(mainElement, createSortingTemplate());
render(mainElement, createFilmsWrapperTemplate());

const filmsWrapperElement = mainElement.querySelector(`.films`);

render(filmsWrapperElement, createFilmsListTemplate());

const filmsListElement = mainElement.querySelector(`.films-list`);
const filmsListContainer = filmsListElement.querySelector(`.films-list__container`);

filmCards.slice(0, FILM_CARD_PER_STEP).forEach((filmCard) => render(filmsListContainer, createFilmCardTemplate(filmCard)));

if (filmCards.length > FILM_CARD_PER_STEP) {
  render(filmsListElement, createShowMoreButtonTemplate());

  const showMoreButton = filmsListElement.querySelector(`.films-list__show-more`);
  let renderedFilmCount = FILM_CARD_PER_STEP;
  showMoreButton.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    filmCards
      .slice(renderedFilmCount, renderedFilmCount + FILM_CARD_PER_STEP)
      .forEach((film) => render(filmsListContainer, createFilmCardTemplate(film)));
    renderedFilmCount += FILM_CARD_PER_STEP;
    if (renderedFilmCount >= filmCards.length) {
      showMoreButton.remove();
    }
  });
}

render(filmsWrapperElement, createFilmsListExtraTemplate());

const filmsListExtraElements = filmsWrapperElement.querySelectorAll(`.films-list--extra`);

const mostTopRate = filmCards.slice().sort((a, b) => b.rating - a.rating);
mostTopRate.slice(0, POPULAR_FILM_CARD_COUNT).forEach((film) => {
  const filmsListExtraContainer = filmsListExtraElements[0].querySelector(`.films-list__container`);
  render(filmsListExtraContainer, createFilmCardTemplate(film));
});

const mostCommentedFilms = filmCards.slice().sort((a, b) => b.comments.length - a.comments.length);
mostCommentedFilms.slice(0, POPULAR_FILM_CARD_COUNT).forEach((film) => {
  const filmsListExtraContainer = filmsListExtraElements[1].querySelector(`.films-list__container`);
  render(filmsListExtraContainer, createFilmCardTemplate(film));
});

const footerElement = document.querySelector(`.footer`);

render(footerElement, createFooterStatisticTemplate());

const bodyElement = document.querySelector(`body`);

render(bodyElement, createFilmDetailsTemplate(filmCards[0]));

