import React from "react";
import { useParams } from "react-router-dom";

import LabeledInput from "./LabeledInput";
import LabeledTextarea from "./LabeledTextarea";
import resource from "./resource";

type RouteParams = {
  movieId: string;
};

const UserMovieDetails: React.FC = () => {
  const { movieId } = useParams<RouteParams>();
  const data = resource.read<Movie>(
    `https://the-problem-solver-sample-data.azurewebsites.net/top-rated-movies/${movieId}?sleep=1000`
  );

  return (
    <div>
      <h2>Favorite movie</h2>
      <img
        src={`//image.tmdb.org/t/p/w300${data.poster_path}`}
        alt={data.title}
      />
      <LabeledInput label="Title:" value={data.title} />
      <LabeledTextarea label="Overview:" rows={5} value={data.overview} />
      <LabeledInput label="Popularity:" value={data.popularity} />
      <LabeledInput label="Release date:" value={data.release_date} />
      <LabeledInput label="Vote average:" value={data.vote_average} />
      <LabeledInput label="Vote count:" value={data.vote_count} />
    </div>
  );
};

export default UserMovieDetails;
