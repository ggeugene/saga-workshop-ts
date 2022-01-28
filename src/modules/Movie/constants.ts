import { createApiRequestActions } from "../../utils";
import { MovieResponse } from "./interfaces";

export const movieActions = createApiRequestActions<
  { t: string },
  MovieResponse
>("FETCH_MOVIE", (args) => ({ payload: args.payload }));
