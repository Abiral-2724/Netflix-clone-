import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import LoadingBar from "react-top-loading-bar";
import { Dropdown } from "rsuite";
import { useRef } from "react";
import "./Header.css";
function MyList() {
  const navigate = useNavigate();
  const ref = useRef(null);
  function changehandler() {
    ref.current.continuousStart();
    setTimeout(() => {
      ref.current.complete();
    }, 1900);

    setTimeout(() => {
      navigate("/");
    }, 2100);
  }
  return (
    <div className="mylistmaindiv">
      <div className="nav">
        <img
          src="https://lucid-benz-6af4ca.netlify.app/netflix-logo.png"
          className="nav_logo"
        />
        <LoadingBar color="#f11946" ref={ref} />
        <button className="mainpage-signout" onClick={changehandler}>
          Sign out
        </button>
      </div>
      <div className="youtubevideo">
        <h1 className="movietrailer">Movie Trailers</h1>
        <ReactPlayer
          url="https://youtu.be/uYPbbksJxIg?si=Hzk_8vM4V9v09mdx"
          playing={true} // 'playing' prop is used for autoplay
          loop={true}
          playbackRate={1.75}
        />
      </div>
    </div>
  );
}
export default MyList;
