import "./Home.css";
import { Link } from "react-router-dom";
import Signin from "./Signin";
import Header from "./Header";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";
import React, { useState } from "react";
function Home(props) {
  const issignin = props.issignin;
  const setissignin = props.setissignin;
  const isnextpage1 = props.isnextpage1;
  const setnextpage1 = props.setnextpage1;

  return (
    <div>
      <div className="header-main-div">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          className="netfix-main-image"
        />
        <div className="header-content-div">
          {issignin ? (
            <Signin />
          ) : (
            <Header
              issignin={issignin}
              setissignin={setissignin}
              isnextpage1={isnextpage1}
              setnextpage1={setnextpage1}
            />
          )}
        </div>
      </div>
      <div className="blank-div"></div>
      <div>
        <Card1 />
        <div className="blank-div"></div>
        <Card2 />
        <div className="blank-div"></div>
        <Card3 />
        <div className="blank-div"></div>
        <Card4 />
      </div>
    </div>
  );
}
export default Home;
