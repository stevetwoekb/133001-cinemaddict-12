import Abstract from "./abstract.js";
import {generateUserMovieWatch} from '../mock/user.js';

const generateUserStatus = () => {
  const movieWatch = generateUserMovieWatch();

  switch (true) {
    case movieWatch.movieWatch >= 1 && movieWatch.movieWatch <= 10:
      return `novice`;
    case movieWatch.movieWatch >= 11 && movieWatch.movieWatch <= 20:
      return `fan`;
    case movieWatch.movieWatch >= 21:
      return `movie buff`;
    default:
      return ``;
  }
};


const createProfileTemplate = () => {
  const status = generateUserStatus();

  return (
    `<section class="header__profile profile">
        <p class="profile__rating">${status}</p>
        <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
      </section>`
  );
};

export default class Profile extends Abstract {
  getTemplate() {
    return createProfileTemplate();
  }
}
