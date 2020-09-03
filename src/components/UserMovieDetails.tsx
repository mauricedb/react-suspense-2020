import React from "react";
import useAbortableFetch from "use-abortable-fetch";
import { useParams } from "react-router-dom";

import Loading from "./Loading";
import ErrorDisplay from "./ErrorDisplay";
import LabeledInput from "./LabeledInput";
import LabeledTextarea from "./LabeledTextarea";

type RouteParams = {
  movieId: string;
};

const UserMovieDetails: React.FC = () => {
  const { movieId } = useParams<RouteParams>();
  const { data, error, loading } = useAbortableFetch<Movie>(
    `https://the-problem-solver-sample-data.azurewebsites.net/top-rated-movies/${movieId}?sleep=1000`
  );

  if (error) {
    return <ErrorDisplay error={error} />;
  }

  if (loading || !data || typeof data === "string") {
    return <Loading />;
  }

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
