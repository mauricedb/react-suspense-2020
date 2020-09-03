import React from "react";
import useAbortableFetch from "use-abortable-fetch";
import Loading from "./Loading";
import MovieCard from "./MovieCard";

const Movies: React.FC = () => {
  const { data, error, loading } = useAbortableFetch<Movie[]>(
    `https://the-problem-solver-sample-data.azurewebsites.net/top-rated-movies`
  );

  if (error) {
    return <div>Error...</div>;
  }

  if (loading || !Array.isArray(data)) {
    return <Loading />;
  }

  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
      {data.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Movies;
