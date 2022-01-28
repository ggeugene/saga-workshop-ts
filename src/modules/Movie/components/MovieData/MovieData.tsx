import { MovieDataProps } from "./MovieData.interfaces";

export default function MovieData({ data }: MovieDataProps) {
  const dataToDisplay = JSON.stringify(data);

  return <div>{dataToDisplay}</div>;
}
