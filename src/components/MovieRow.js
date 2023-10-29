import { useEffect, useState } from "react";
import "./MovieRow.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
const baseUrl = "https://image.tmdb.org/t/p/original";
function MovieRow({ title, fetchurl, isLargeRow }) {
  const [movies, setmovie] = useState([]);

  async function fetchdata() {
    try {
      const request = await axios.get(fetchurl);
      setmovie(request.data.results);
      return request;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  useEffect(() => {
    fetchdata();
  }, [fetchurl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"} `}
            src={`${baseUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
          />
        ))}
      </div>
    </div>
  );
}
export default MovieRow;
