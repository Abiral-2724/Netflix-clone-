import "./Card1.css";
function Card1() {
  return (
    <div className="card1-wrapper">
      <div className="card1-content">
        <div className="card1-content-div1">
          <div>
            <h2 className="enjoy-on">Enjoy on your TV</h2>
            <p className="watchon">
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </p>
          </div>
        </div>
        <div className="card1-content-div2">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            height="380"
            width="540"
            className="tv-image"
          />
          <video
            data-uia="nmhp-card-animation-asset-video"
            autoPlay
            playsInline
            muted
            loop
          >
            <source
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  );
}
export default Card1;
