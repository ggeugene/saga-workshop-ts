import createApiRequestWatcher from "../../../utils/createAPIRequestSaga";
import { movieActions } from "../constants";
import { MovieResponse } from "../interfaces";

export const fetchMovieWatcher =
  createApiRequestWatcher<MovieResponse>(movieActions);
