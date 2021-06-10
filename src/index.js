import './sass/main.scss';

import MovieApiService from './js/movieApiService';
import getMovieListWithGenresName from './js/getGenresName';
import { renderMovieList } from './js/renderMarckup';
import modalStudents from './js/students-modal';

export const movieApiService = new MovieApiService();

movieApiService.fetchTrendingMovies()
  .then(getMovieListWithGenresName)
  .then(renderMovieList)
  .catch(error => console.log(error ));

  modalStudents();