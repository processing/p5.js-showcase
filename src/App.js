import "./styles/App.css";
import React from "react";
import { useTranslation, Trans } from "react-i18next";
import Analytics from "react-router-ga";
import { Switch, Route, Link, HashRouter } from "react-router-dom";

import Gallery from "./global_components/Gallery.js";
import About from "./global_components/About.js";
import FilterButton from "./global_components/FilterButton";

import Showcase2020 from "./showcase_2020/Showcase2020";
import GalleryNineteen from "./showcase_2020/GalleryNineteen.js";
import GalleryTwenty from "./showcase_2020/GalleryTwenty.js";
import DetailedPage from "./showcase_2020/DetailedPage.js";
import Detailed2020Page from "./showcase_2020/Detailed2020Page.js";

import Showcase2021 from "./showcase_2021/Showcase2021";
import GalleryTwentyOne from "./showcase_2021/GalleryTwentyOne.js";
import Archive2021 from "./showcase_2021/Archive2021.js";

import Archive2022 from "./showcase_2022/Archive2022.js";
import GalleryTwentyTwo from "./showcase_2022/GalleryTwentyTwo.js";
import Detailed2022Page from "./showcase_2022/Detailed2022Page.js";

export default function App() {
  let { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  let navigation;
  let navigationPath = window.location.href;

  //2020 showcase
  if (navigationPath.includes("showcase2020")) {
    navigation = (
      <div className="navigation">
        <div className="menu">
          <div className="left">
            <Link to="/showcase2020" className="item">
              Foreword
            </Link>
            <Link to="/showcase2020/2020-All" className="item">
              Gallery
            </Link>
            <Link to="/showcase2020/2019" className="item">
              2019
            </Link>
            <Link to="/showcase2020/about" className="item">
              About
            </Link>
            <a href="https://p5js.org" className="item">
              p5.js
            </a>
            <a href="/" className="item" onClick={() => changeLanguage("en")}>
              2022 Showcase
            </a>
          </div>
          <div className="right">
            <button onClick={() => changeLanguage("en_showcase_2020")}>
              English
            </button>
            <button onClick={() => changeLanguage("es_showcase_2020")}>
              Español
            </button>
            <button onClick={() => changeLanguage("zh_Hans_showcase_2020")}>
              简体中文
            </button>
            <button onClick={() => changeLanguage("ko_showcase_2020")}>
              한국어
            </button>
          </div>
        </div>
        <div className="nav-text">
          <p>You are currently viewing the 2021 Showcase</p>
        </div>
      </div>
    );

    //2021 showcase
  } else if (navigationPath.includes("showcase2021")) {
    navigation = (
      <div className="navigation">
        <div className="menu">
          <div className="left">
            <Link to="/showcase2021" className="item">
              Foreword
            </Link>
            <Link to="/showcase2021/2021-All" className="item">
              Gallery
            </Link>
            <Link to="/showcase2021/archive" className="item">
              Archive
            </Link>
            <Link to="/showcase2021/about" className="item">
              About
            </Link>
            <a href="https://p5js.org" className="item">
              p5.js
            </a>
            <a href="/" className="item" onClick={() => changeLanguage("en")}>
              Back to 2022 Showcase
            </a>
          </div>
          <div className="right">
            <button onClick={() => changeLanguage("en_showcase_2021")}>
              English
            </button>
            <button onClick={() => changeLanguage("es_showcase_2021")}>
              Español
            </button>
            <button onClick={() => changeLanguage("zh_Hans_showcase_2021")}>
              简体中文
            </button>
            <button onClick={() => changeLanguage("ko_showcase_2021")}>
              한국어
            </button>
          </div>
        </div>
        <div className="nav-text">
          <p>You are currently viewing the 2021 Showcase</p>
        </div>
      </div>
    );

    //2022 showcase
  } else {
    navigation = (
      <div className="navigation2022" id="myNav">
        <div className="menu">
          <div className="left">
            <Link to="/" className="item">
              Foreword
            </Link>
            <Link to="/2022-All" className="item">
              Gallery
            </Link>
            <Link to="/archive" className="item">
              Archive
            </Link>
            <Link to="/about" className="item">
              About
            </Link>
            <a href="https://p5js.org" className="item">
              p5.js
            </a>
          </div>
          <div className="right">
            <button onClick={() => changeLanguage("en")}>English</button>
            <button onClick={() => changeLanguage("es")}>Español</button>
            <button onClick={() => changeLanguage("zh_Hans")}>简体中文</button>
            <button onClick={() => changeLanguage("ko")}>한국어</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <HashRouter basename="/">
      {navigation}
      <Switch>
        <Analytics id="UA-175461618-2" debug>
          <Route exact path="/showcase2020" children={<Showcase2020 />} />
          <Route
            exact
            path="/showcase2020/2019"
            children={<GalleryNineteen />}
          />
          <Route
            exact
            path="/showcase2020/2019/:id"
            children={<DetailedPage />}
          />
          <Route
            exact
            path="/showcase2020/2020-:filter/"
            children={<GalleryTwenty />}
          />
          <Route
            exact
            path="/showcase2020/2020-:filter/:id"
            children={<Detailed2020Page />}
          />
          <Route exact path="/showcase2020/about" children={<About />} />

          <Route exact path="/showcase2021" children={<Showcase2021 />} />
          <Route
            exact
            path="/showcase2021/archive"
            children={<Archive2021 />}
          />
          <Route
            exact
            path="/showcase2021/2021-:filter/"
            children={<GalleryTwentyOne />}
          />
          <Route
            exact
            path="/showcase2021/2021-:filter/:id"
            children={<Detailed2020Page />}
          />
          <Route exact path="/showcase2021/about" children={<About />} />

          {/* 2022 showcase */}
          <Route exact path="/" children={<Gallery />} />
          <Route exact path="/archive" children={<Archive2022 />} />
          <Route exact path="/2022-:filter/" children={<GalleryTwentyTwo />} />
          <Route
            exact
            path="/2022-:filter/:id"
            children={<Detailed2022Page />}
          />
          <Route exact path="/about" children={<About />} />
        </Analytics>
      </Switch>{" "}
    </HashRouter>
  );
}
