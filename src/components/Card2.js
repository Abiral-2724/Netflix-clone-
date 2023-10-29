import "./Card1.css";
function Card2() {
  return (
    <div className="card1-wrapper">
      <div className="card1-content">
        <div className="card1-content-div2">
          <img
            src="	https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            height="380"
            width="540"
            className="tv-image"
          />
          <div className="downloadoption-card2">
            <div className="download-img">
              <img
                src="	https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                width="57"
                height="75"
              />
            </div>
            <div>
              <p>
                Stranger Things <br />
                <span>Downloading...</span>
              </p>
            </div>
            <div className="download-logo"></div>
          </div>
        </div>
        <div className="card1-content-div1">
          <div>
            <h2 className="enjoy-on">Download your shows to watch offline</h2>
            <p className="watchon">
              Save your favourites easily and always have something to watch.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card2;
