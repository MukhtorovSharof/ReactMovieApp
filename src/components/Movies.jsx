import React from "react";
import Movie from "./Movie";
import imgNothing from "../images/20.png"

export default function Movies(props) {
  const { movies = [] } = props;
  return (
    <>
      {movies.length
        ? movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
        : (
          <div className="text-center">
            <div className="nothingClass"><img src={imgNothing} alt="Nothing Found" /></div>
          </div>
        )}
    </>
  );
}
