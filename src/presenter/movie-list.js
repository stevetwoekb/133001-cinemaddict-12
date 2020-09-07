import {render, remove} from "../utils/render.js";
import {getRandomInteger} from "../utils/common.js";
import NoFilmsMessage from "../view/no-films-message.js";
import FilmsList from "../view/films-list.js";
import ShowMoreButton from "../view/show-more-button.js";
import FilmCard from "../view/film-card.js";
import FilmCardDetails from "../view/film-card-details.js";
import FilmsExtraRatedList from "../view/films-extra-rated-list.js";
import FilmsExtraCommentsList from "../view/films-extra-comments-list.js";
import {SortType} from "../const.js";
import Sorting from "../view/sorting.js";
import {sortFilmDate, sortFilmRating} from "../utils/film.js";

const FILM_CARD_PER_STEP = 5;
const POPULAR_FILM_CARD_COUNT = 2;

export default class MovieList {
  constructor(filmsWrapper) {
    this._filmsBoard = filmsWrapper;
    this._filmCardPerStep = FILM_CARD_PER_STEP;
    this._popularFilmCardCount = POPULAR_FILM_CARD_COUNT;
    this._filmsList = new FilmsList();
    this._NoFilmsMessage = new NoFilmsMessage();
    this._loadMoreButton = new ShowMoreButton();
    this._sortComponent = new Sorting();
    this._currenSortType = SortType.DEFAULT;
    this._currenSortType = SortType.DEFAULT;


    this._handleLoadMoreButtonClick = this._handleLoadMoreButtonClick.bind(this);
    this._handleSortTypeChange = this._handleSortTypeChange.bind(this);
    this._filmsContainer = this._filmsList.getElement().querySelector(`.films-list__container`);
  }

  init(filmCards) {
    this._filmCards = filmCards.slice();
    this._sourcedFilmsCards = filmCards.slice();

    this._renderSorting();
    this._renderFilmsWrapper();
    this._renderFilmsList();
    this._renderLoadMoreButton();
    this._renderExtraSections();
  }

  _clearFilmsList() {
    this._filmsContainer.innerHTML = ``;
    this._filmCardPerStep = FILM_CARD_PER_STEP;
  }

  _renderFilmsList() {
    render(this._filmsBoard, this._filmsList);
  }

  _renderNoFilmsMessage() {
    render(this._filmsList, this._NoFilmsMessage);
  }

  _renderFilm(film, containerElement = this._filmsContainer) {
    const filmCardComponent = new FilmCard(film);

    filmCardComponent.setClickHandler(() => {
      this._renderPopup(film);
    });

    render(containerElement, filmCardComponent);
  }

  _renderPopup(filmCard) {
    const filmDetailsComponent = new FilmCardDetails(filmCard);
    const filmDetailsElement = filmDetailsComponent.getElement();

    const onEscKeyDown = (evt) => {
      if (evt.key === `Escape` || evt.key === `Esc`) {
        evt.preventDefault();
        closePopup();
      }
    };

    const closePopup = () => {
      filmDetailsComponent.removeElement();
      filmDetailsElement.remove();
      document.removeEventListener(`keydown`, onEscKeyDown);
    };

    const createPopup = () => {
      render(this._filmsBoard, filmDetailsComponent);

      document.addEventListener(`keydown`, onEscKeyDown);
    };

    filmDetailsComponent.setClickHandler(() => {
      closePopup();
    });

    createPopup();
  }

  _renderFilms(from, to) {
    this._filmCards.slice(from, to).forEach((film) => this._renderFilm(film));
  }

  _handleLoadMoreButtonClick() {
    this._renderFilms(this._filmCardPerStep, this._filmCardPerStep + FILM_CARD_PER_STEP);
    this._filmCardPerStep += FILM_CARD_PER_STEP;

    if (this._filmCardPerStep >= this._filmCards.length) {
      remove(this._loadMoreButton);
    }
  }

  _sortFilms(sortType) {
    switch (sortType) {
      case SortType.RATING:
        this._filmCards.sort(sortFilmRating).reverse();
        break;
      case SortType.DATE:
        this._filmCards.sort(sortFilmDate).reverse();
        break;
      default:
        this._filmCards = this._sourcedFilmsCards.slice();
    }

    this._currenSortType = sortType;
  }

  _handleSortTypeChange(sortType) {
    if (this._currenSortType === sortType) {
      return;
    }
    this._sortFilms(sortType);

    this._clearFilmsList();
    this._renderFilmsWrapper();
  }

  _renderSorting() {
    render(this._filmsBoard, this._sortComponent);

    this._sortComponent.setSortTypeChangeHandler(this._handleSortTypeChange);
  }

  _renderLoadMoreButton() {
    render(this._filmsList, this._loadMoreButton);

    this._loadMoreButton.setClickHandler(this._handleLoadMoreButtonClick);
  }

  _renderExtraSections() {
    render(this._filmsBoard, new FilmsExtraRatedList());
    render(this._filmsBoard, new FilmsExtraCommentsList());

    const extraSections = this._filmsBoard.querySelectorAll(`.films-list--extra`);

    for (const section of extraSections) {
      const extraSectionFilmsContainer = section.querySelector(`.films-list__container`);

      for (let i = 0; i < this._popularFilmCardCount; i++) {
        this._renderFilm(this._filmCards[getRandomInteger(0, this._filmCards.length)], extraSectionFilmsContainer);
      }
    }
  }

  _renderFilmsWrapper() {
    if (!this._filmCards.length) {
      this._renderNoFilmsMessage();
      return;
    }

    this._renderFilms(0, this._filmCardPerStep);
  }
}
