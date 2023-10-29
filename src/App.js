import "./styles.css";
import { useState } from "react";
import requests from "./requests";
import Home from "./components/Home";
import Header from "./components/Header";
import Signin from "./components/Signin";
import NextPage1 from "./components/NextPage1";
import NextPage2 from "./components/NextPage2";
import NextPage3 from "./components/NextPage3";
import MainPage from "./components/MainPage";
import MyList from "./components/MyList";

import { Routes, Route } from "react-router-dom";
const App = () => {
  const [issignin, setissignin] = useState(false);
  const [isnextpage1, setnextpage1] = useState(false);
  return (
    <div className="wrapper">
      <Routes>
        <Route
          path="/"
          element={
            <Home
              issignin={issignin}
              setissignin={setissignin}
              isnextpage1={isnextpage1}
              setnextpage1={setnextpage1}
            />
          }
        />

        <Route
          path="signin"
          element={<Signin issignin={issignin} setissignin={setissignin} />}
        />

        <Route
          path="nextpage1"
          element={
            <NextPage1
              isnextpage1={isnextpage1}
              setnextpage1={setnextpage1}
              issignin={issignin}
              setissignin={setissignin}
            />
          }
        />

        <Route
          path="nextpage2"
          element={
            <NextPage2
              isnextpage1={isnextpage1}
              setnextpage1={setnextpage1}
              issignin={issignin}
              setissignin={setissignin}
            />
          }
        />

        <Route
          path="nextpage3"
          element={
            <NextPage3
              isnextpage1={isnextpage1}
              setnextpage1={setnextpage1}
              issignin={issignin}
              setissignin={setissignin}
            />
          }
        />

        <Route path="mainpage" element={<MainPage requests={requests} />} />
        <Route path="mylistpage" element={<MyList />} />
      </Routes>
    </div>
  );
};
export default App;
