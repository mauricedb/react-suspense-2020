import React from "react";

import MovieCard from "./MovieCard";
import resource from "./resource";

const Movies: React.FC = () => {
  const data = resource.read<Movie[]>(
    "https://the-problem-solver-sample-data.azurewebsites.net/top-rated-movies"
  );

  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
      {data.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Movies;
