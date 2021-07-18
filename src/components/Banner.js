import React, { useState, useEffect } from "react";
import "./Banner.css";
import axios from "../axios/axios";
import requests from "../axios/requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      console.log(request);
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);

  return (
    <header
      className="banner"
      style={{
        marginTop: "6px",
        backgroundSize: "cover",
        backgroundImage: `url(
          "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
      )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        {/*title*/}
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_button">
          <button className="banner_button1">Play</button>
          <button className="banner_button2">My List</button>
        </div>
        <h1 className="banner_desciption">{movie?.overview}</h1>
      </div>
    </header>
  );
}

export default Banner;
