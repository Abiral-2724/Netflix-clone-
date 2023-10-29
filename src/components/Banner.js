import { useEffect, useState, useRef } from "react";
import "./Banner.css";
import LoadingBar from "react-top-loading-bar";
import { BsPlayFill } from "react-icons/ai";
// import requests from "../requests";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Banner = (props) => {
  const requests = props.requests;
  const [movie, setmovie] = useState([]);
  async function fetchdata() {
    try {
      const request = await axios.get(requests.fetchNetflixOriginals);
      console.log(request.data);
      setmovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  useEffect(() => {
    fetchdata();
  }, []);
  const ref = useRef(null);
  const navigate = useNavigate();
  function changehandler() {
    ref.current.continuousStart();
    setTimeout(() => {
      ref.current.complete();
    }, 1900);

    setTimeout(() => {
      navigate("/mylistpage");
    }, 2100);
  }
  return (
    <div>
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(" https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          backgroundPosition: "50% 10%"
        }}
      >
        <div className="banner-content">
          <h1 className="bannerheading">{movie.name || movie.original_name}</h1>
          <div className="banner-buttons">
            <LoadingBar color="#f11946" ref={ref} />
            <button className="banner-button" onClick={changehandler}>
              Play
            </button>
            <button className="banner-button-1">My List</button>
          </div>
          <div className="banner_description">
            <p>{movie.overview}</p>
          </div>
          <div className="banner__fadeBottom" />
        </div>
      </header>
    </div>
  );
};
export default Banner;
