import React, { useEffect, useState, useCallback } from "react";
import "./Row.css";
import instance from "../api/axios";

const Row = ({ title, id, fetchURl }) => {
  const [movies, setMovies] = useState([]);
  const fetchMovieData = useCallback(async () => {
    const response = await instance.get(fetchURl);
    setMovies(response.data.results);
    console.log(response);
    console.log(movies);
  }, [fetchURl]);

  //여러 영화의 데이터를 가져옴
  useEffect(() => {
    fetchMovieData();
  }, [fetchMovieData]);

  return (
    <div>
      <h2>{title}</h2>
      <div className="slider">
        <div className="slider__arow-left">
          <span className="arrow">{"<"}</span>
        </div>
        <div id={id} className="row__posters">
          {movies.map((movie) => {
            <img
              key={movie.id}
              className="row__poster"
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt={movie.name}
            />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Row;
