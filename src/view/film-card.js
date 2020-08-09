import {formatTime} from '../utils.js';

export const createFilmCardTemplate = (filmCard) => {
  const getShortDescription = (text, maxLength) => {
    let shortDescription = text;
    if (text.length > maxLength) {
      shortDescription = `${text.slice(0, (maxLength - 1))}...`;
    }
    return shortDescription;
  };

  const duration = formatTime(filmCard.duration);
  const commentsCount = filmCard.comments.length;
  const description = getShortDescription(filmCard.description, 140);
  const gener = filmCard.genres[0];
  const releaseYear = filmCard.releaseDate.getFullYear();

  return (
    `
      <article class="film-card">
        <h3 class="film-card__title">${filmCard.title}</h3>
        <p class="film-card__rating">${filmCard.rating}</p>
        <p class="film-card__info">
          <span class="film-card__year">${releaseYear}</span>
          <span class="film-card__duration">${duration}</span>
          <span class="film-card__genre">${gener}</span>
        </p>
        <img src="images/posters/${filmCard.poster}" alt="" class="film-card__poster">
        <p class="film-card__description">${description}</p>
        <a class="film-card__comments">${commentsCount} comments</a>
        <form class="film-card__controls">
          <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
          <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
          <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
        </form>
      </article>
    `
  );
};
