const filmToFilterMap = {
  watchList: (films) => films.filter((film) => film.watchlist === true),
  history: (films) => films.filter((film) => film.watched === true),
  favorites: (films) => films.filter((film) => film.favorites === true)
};

export const generateFilter = (films) => {
  return Object.entries(filmToFilterMap).map(([filterTitle, countTasks]) => {
    return {
      title: filterTitle,
      count: countTasks(films),
    };
  });
};
