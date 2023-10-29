import "./MainPage.css";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Banner from "./Banner";
import MovieRow from "./MovieRow";

const MainPage = (props) => {
  const navigate = useNavigate();
  function changehandler() {
    navigate("/");
  }
  const requests = props.requests;
  return (
    <div className="mainpage-div">
      <div className="nav">
        <img
          src="https://lucid-benz-6af4ca.netlify.app/netflix-logo.png"
          className="nav_logo"
        />
        <button className="mainpage-signout" onClick={changehandler}>
          Sign out
        </button>
      </div>
      <Banner requests={requests} />
      <MovieRow
        title={"NETFLIX ORIGINALS"}
        fetchurl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <MovieRow title={"Trending Now"} fetchurl={requests.fetchTrending} />
      <MovieRow
        title={"History Movies"}
        fetchurl={requests.fetchHistoryMovies}
        isLargeRow
      />
      <MovieRow
        title={"Fantasy Movies"}
        fetchurl={requests.fetchFantasyMovies}
      />
      <MovieRow
        title={"Romance Movies"}
        fetchurl={requests.fetchRomanceMovies}
        isLargeRow
      />
      <MovieRow
        title={"Animation Movies"}
        fetchurl={requests.fetchAnimationMovies}
      />
    </div>
  );
};
export default MainPage;
