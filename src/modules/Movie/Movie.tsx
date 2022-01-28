import { useAppSelector } from "../../app/hooks";
import { MovieData } from "./components/MovieData";
import { SearchMovie } from "./components/SearchMovie";

export default function Movie() {
  const data = useAppSelector((state) => state.movie.data);
  return (
    <div>
      <SearchMovie />
      <MovieData data={data} />
    </div>
  );
}
