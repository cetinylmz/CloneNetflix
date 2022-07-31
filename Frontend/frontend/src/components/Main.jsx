import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import requests from "../Requests";
import axios from "axios";

function Main() {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((res) => {
      setMovies(res.data.results);

    });
  }, []);



  return (
    <div className="w-full h-[550px] text-white mb-12">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.original_title}
        />
        <div className="absolute w-full top-[20%] p-6 md:p-12">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
          </div>
          <div className="my-4">
            <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5 mx-2">
              Play
            </button>
            <button className="border  text-white border-gray-300 py-2 px-5 mx-2">
              Watch Later
            </button>
          </div>
          <p className="text-gray-400 text-sm">
            Relesed: {movie?.release_date}
          </p>
          <p className="w-full md:max-w-[70%]  lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
          {movie?.overview}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;