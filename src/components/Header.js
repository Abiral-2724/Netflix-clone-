import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import "./Header.css";
import React, { useRef, useState } from "react";
import LoadingBar from "react-top-loading-bar";

function Header(props) {
  const issignin = props.issignin;
  const setissignin = props.setissignin;
  const isnextpage1 = props.isnextpage1;
  const setnextpage1 = props.setnextpage1;

  const navigate = useNavigate();
  const ref = useRef(null);

  function clickhandler() {
    setissignin(true);
    navigate("/signin");
  }
  function handlenextpage1() {
    ref.current.continuousStart();
    setTimeout(() => {
      ref.current.complete();
    }, 1500);

    setTimeout(() => {
      navigate("/nextpage1");
    }, 2100);
    setnextpage1(true);
    // navigate("/nextpage1");
  }
  const [language, setlanguage] = useState(true);
  function changelanguagehndler() {
    setlanguage(!language);
  }
  // function handlerfunction(){
  //   setissignin(true);
  //   navigate("/signin");
  // }
  return (
    <div>
      <header>
        <div className="main-header">
          <div className="main-header-part1">
            <svg
              viewBox="0 0 111 30"
              data-uia="netflix-logo"
              className="svg-icon svg-icon-netflix-logo"
              aria-hidden="true"
              focusable="false"
            >
              <g id="netflix-logo">
                <path
                  d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"
                  id="Fill-14"
                  fill="#E50914"
                />
              </g>
            </svg>
          </div>
          <div className="main-header-part2">
            <div className="main-header-part2-content">
              <select
                className="select-english-hindi"
                onChange={changelanguagehndler}
              >
                <option value="English">English</option>
                <option value="हिन्दी">हिन्दी</option>
              </select>
              {language ? (
                <button className="sign-in-button" onClick={clickhandler}>
                  Sign In
                </button>
              ) : (
                <button
                  className="sign-in-button sign-in-button-hindi "
                  onClick={clickhandler}
                >
                  साइन इन करें
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="main-header-nextsection">
          <div className="main-header-nextsection-content">
            <div className="header-heading">
              {language ? (
                <h4>
                  The biggest Indian hits. The best Indian stories. All
                  streaming here.
                </h4>
              ) : (
                <h4>
                  धमाकेदार भारतीय हिट. बेहतरीन भारतीय कहानियां. सब उपलब्ध है.
                </h4>
              )}
            </div>
            <div className="Watch-anywhere">
              {language ? (
                <h5>Watch anywhere. Cancel anytime.</h5>
              ) : (
                <h5>कहीं भी देखें, जब चाहें कैंसल करें.</h5>
              )}
            </div>
            <div className="Ready-to-watch">
              {language ? (
                <h5>
                  {" "}
                  Ready to watch? Enter your email to create or restart your
                  membership.
                </h5>
              ) : (
                <h5>
                  देखने के लिए तैयार हैं? अपनी मेंबरशिप बनाने या रीस्टार्ट करने
                  के लिए अपना ईमेल एड्रेस डालें.
                </h5>
              )}
            </div>
            <div className="inputfield-signinbutton">
              <input
                required
                type="email"
                placeholder="Email address"
                className="email-input"
              />
              <LoadingBar color="#f11946" ref={ref} />
              {language ? (
                <button className="button-get" onClick={handlenextpage1}>
                  Get Started
                </button>
              ) : (
                <button className="button-get" onClick={handlenextpage1}>
                  शुरू करें
                </button>
              )}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
export default Header;
