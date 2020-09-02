import Profile from "./view/profile.js";
import Navigation from './view/navigation.js';
import Sorting from './view/sorting.js';
import FilmsWrapper from './view/films-wrapper.js';
import FooterStatistic from './view/footer-statistic.js';
import {generateFilmCard} from './mock/film-card.js';
import {generateFilter} from './mock/filter.js';
import {render} from './utils/render.js';
import MovieList from "./presenter/movie-list.js";

const FILM_CARD_COUNT = 25;

const filmCards = new Array(FILM_CARD_COUNT).fill().map(generateFilmCard);
const filters = generateFilter(filmCards);

const headerElement = document.querySelector(`.header`);
const mainElement = document.querySelector(`.main`);

render(headerElement, new Profile());
render(mainElement, new Navigation(filters));
render(mainElement, new Sorting());
render(mainElement, new FilmsWrapper());

const filmsWrapperElement = mainElement.querySelector(`.films`);

const filmsBoardPresenter = new MovieList(filmsWrapperElement);

filmsBoardPresenter.init(filmCards);

const footerElement = document.querySelector(`.footer`);

render(footerElement, new FooterStatistic());
