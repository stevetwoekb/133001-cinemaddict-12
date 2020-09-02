import Abstract from './abstract.js';

const createNavigationTemplate = (filters) => {
  const filterItemsTemplate = filters
  .map((filter, index) => createFilterItemTemplate(filter, index === 0))
  .join(``);
  return (
    `<nav class="main-navigation">
        <div class="main-navigation__items">
          <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
            ${filterItemsTemplate}
        </div>
        <a href="#stats" class="main-navigation__additional">Stats</a>
      </nav>`
  );
};

const createFilterItemTemplate = (filter) => {
  const title = filter.title[0].toUpperCase() + filter.title.slice(1);
  const count = filter.count.length;
  return (
    `<a href="#watchlist" class="main-navigation__item">${title} <span class="main-navigation__item-count">${count}</span></a>`
  );
};

export default class Navigation extends Abstract {
  constructor(filters) {
    super();
    this._filters = filters;
  }

  getTemplate() {
    return createNavigationTemplate(this._filters);
  }
}
