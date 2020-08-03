import {createProfileTemplate} from "./view/profile.js";
import {createNavigationTemplate} from './view/navigation.js';
import {createSortingTemplate} from './view/sorting.js';
import {createFilmsWrapperTemplate} from './view/films-wrapper.js';
import {createFilmsListTemplate} from './view/films-list.js';
import {createFilmCardTemplate} from './view/film-card.js';
import {createShowMoreButtonTemplate} from './view/show-more-button.js';
import {createFilmsListExtraTemplate} from './view/films-list-extra.js';
import {createFooterStatisticTemplate} from './view/footer-statistic.js';
import {render, repeat} from './utils.js';

const FILM_CARD_COUNT = 5;
const POPULAR_FILM_CARD_COUNT = 2;

const headerElement = document.querySelector(`.header`);
const mainElement = document.querySelector(`.main`);

render(headerElement, createProfileTemplate());
render(mainElement, createNavigationTemplate());
render(mainElement, createSortingTemplate());
render(mainElement, createFilmsWrapperTemplate());

const filmsWrapperElement = mainElement.querySelector(`.films`);

render(filmsWrapperElement, createFilmsListTemplate());

const filmsListElement = mainElement.querySelector(`.films-list`);
const filmsListContainer = filmsListElement.querySelector(`.films-list__container`);

repeat(FILM_CARD_COUNT, () => {
  render(filmsListContainer, createFilmCardTemplate());
});

render(filmsListElement, createShowMoreButtonTemplate());

repeat(POPULAR_FILM_CARD_COUNT, () => {
  render(filmsWrapperElement, createFilmsListExtraTemplate());
});

const filmsListExtraElements = filmsWrapperElement.querySelectorAll(`.films-list--extra`);

filmsListExtraElements.forEach((element) => {
  const filmsListExtraContainer = element.querySelector(`.films-list__container`);
  repeat(POPULAR_FILM_CARD_COUNT, () => {
    render(filmsListExtraContainer, createFilmCardTemplate());
  });
});

const footerElement = document.querySelector(`.footer`);

render(footerElement, createFooterStatisticTemplate());
