import "./Card1.css";
function Card3() {
  return (
    <div className="card1-wrapper">
      <div className="card1-content">
        <div className="card1-content-div1">
          <div>
            <h2 className="enjoy-on">Watch everywhere</h2>
            <p className="watchon">
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </p>
          </div>
        </div>
        <div className="card1-content-div2">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
            height="380"
            width="540"
            className="tv-image"
          />
          <video
            className="video-card3"
            data-uia="nmhp-card-animation-asset-video"
            autoPlay
            playsInline
            muted
            loop
          >
            <source
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  );
}
export default Card3;
