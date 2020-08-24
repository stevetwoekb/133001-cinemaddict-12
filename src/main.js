import Profile from "./view/profile.js";
import Navigation from './view/navigation.js';
import Sorting from './view/sorting.js';
import FilmsWrapper from './view/films-wrapper.js';
import FilmsList from './view/films-list.js';
import FilmCard from './view/film-card.js';
import ShowMoreButton from './view/show-more-button.js';
import FilmsExtraRatedList from './view/films-extra-rated-list.js';
import FilmsExtraCommentsList from './view/films-extra-comments-list.js';
import FooterStatistic from './view/footer-statistic.js';
import FilmCardDetails from './view/film-card-details.js';
import NoFilmsMessage from './view/no-films-message.js';
import {generateFilmCard} from './mock/film-card.js';
import {generateFilter} from './mock/filter.js';
import {render, RenderPosition} from './utils.js';

const FILM_CARD_COUNT = 25;
const FILM_CARD_PER_STEP = 5;
const POPULAR_FILM_CARD_COUNT = 2;

const filmCards = new Array(FILM_CARD_COUNT).fill().map(generateFilmCard);
const filters = generateFilter(filmCards);

const headerElement = document.querySelector(`.header`);
const mainElement = document.querySelector(`.main`);

render(headerElement, new Profile().getElement());
render(mainElement, new Navigation(filters).getElement());
render(mainElement, new Sorting().getElement());
render(mainElement, new FilmsWrapper().getElement());

const filmsWrapperElement = mainElement.querySelector(`.films`);
const filmList = new FilmsList();
render(filmsWrapperElement, filmList.getElement());

const filmsListElement = mainElement.querySelector(`.films-list`);
const filmsListContainer = filmsListElement.querySelector(`.films-list__container`);

const footerElement = document.querySelector(`.footer`);

const renderFilmCard = (container, filmCard) => {
  const filmCardComponent = new FilmCard(filmCard);
  const filmDetailsComponent = new FilmCardDetails(filmCard);

  const createPopup = () => {
    const popup = document.querySelector(`.film-details`);
    if (popup) {
      document.querySelector(`.film-details`).remove();
      filmDetailsComponent.removeElement();
    }

    render(footerElement, filmDetailsComponent.getElement(), RenderPosition.AFTEREND);
    filmDetailsComponent.getElement().querySelector(`.film-details__close-btn`).addEventListener(`click`, closePopup);
  };

  const closePopup = (e) => {
    e.preventDefault();
    document.querySelector(`.film-details`).remove();
    filmDetailsComponent.removeElement();
  };

  filmCardComponent.getElement().querySelector(`.film-card__poster`).addEventListener(`click`, createPopup);
  filmCardComponent.getElement().querySelector(`.film-card__title`).addEventListener(`click`, createPopup);
  filmCardComponent.getElement().querySelector(`.film-card__comments`).addEventListener(`click`, createPopup);


  const onEscKeyDown = (evt) => {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      evt.preventDefault();
      closePopup(evt);
      document.removeEventListener(`keydown`, onEscKeyDown);
    }
  };

  document.addEventListener(`keydown`, onEscKeyDown);

  render(container, filmCardComponent.getElement());
};

const rednerNoFilmMessage = () => {
  const noFilmMessage = new NoFilmsMessage();
  const ListTitle = filmList.getElement().querySelector(`.films-list__title`);
  filmList.getElement().replaceChild(noFilmMessage.getElement(), ListTitle);
};

const renderFilmList = () => {
  if (!filmCards.length) {
    rednerNoFilmMessage();
    return;
  }

  filmCards.slice(0, FILM_CARD_PER_STEP).forEach((filmCard) => renderFilmCard(filmsListContainer, filmCard));
  const LoadMoreButton = new ShowMoreButton();
  if (filmCards.length > FILM_CARD_PER_STEP) {
    render(filmsListElement, LoadMoreButton.getElement());
    let renderedFilmCount = FILM_CARD_PER_STEP;
    LoadMoreButton.getElement().addEventListener(`click`, (evt) => {
      evt.preventDefault();
      filmCards
        .slice(renderedFilmCount, renderedFilmCount + FILM_CARD_PER_STEP)
        .forEach((film) => renderFilmCard(filmsListContainer, film));
      renderedFilmCount += FILM_CARD_PER_STEP;
      if (renderedFilmCount >= filmCards.length) {
        LoadMoreButton.getElement().remove();
        LoadMoreButton.removeElement();
      }
    });
  }
  const filmsExtraRatedElement = new FilmsExtraRatedList();
  const filmExtraCommentsElement = new FilmsExtraCommentsList();
  render(filmsWrapperElement, filmsExtraRatedElement.getElement());
  render(filmsWrapperElement, filmExtraCommentsElement.getElement());
  const mostTopRate = filmCards.slice().sort((a, b) => b.rating - a.rating);
  mostTopRate.slice(0, POPULAR_FILM_CARD_COUNT).forEach((film) => {
    const filmsListExtraContainer = filmsExtraRatedElement.getElement().querySelector(`.films-list__container`);
    renderFilmCard(filmsListExtraContainer, film);
  });
  const mostCommentedFilms = filmCards.slice().sort((a, b) => b.comments.length - a.comments.length);
  mostCommentedFilms.slice(0, POPULAR_FILM_CARD_COUNT).forEach((film) => {
    const filmsListExtraContainer = filmExtraCommentsElement.getElement().querySelector(`.films-list__container`);
    renderFilmCard(filmsListExtraContainer, film);
  });
};

render(footerElement, new FooterStatistic().getElement());
renderFilmList();
