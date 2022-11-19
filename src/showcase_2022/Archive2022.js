import "../styles/App.css";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import ScrollToTop from "../global_components/ScrollToTop.js";
import { Link } from "react-router-dom";

export default function Archive2022() {
  var Markdown = require("react-markdown");

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const onShowcase2020Click = () => {
    changeLanguage("en_showcase_2020");
  };

  const onShowcase2021Click = () => {
    changeLanguage("en_showcase_2021");
  };

  ScrollToTop();

  return (
    <div className="body">
      <div className="archive">
        <div id="intro2019">
          <h1>Archive</h1>
          <h3>
            <Markdown source={t("Archiveabout")} />
          </h3>
        </div>

        <div className="flex">
          <div className="column">
            <div id="archive2021">
              <h1>p5.js 2021 Showcase</h1>
              <h3>
                <i>Curated by Katie Chan</i>
              </h3>
              <Link
                to="/showcase2021"
                className="view"
                onClick={() => onShowcase2021Click()}
              >
                View
              </Link>
              <a
                href="https://medium.com/processing-foundation/increasing-the-organization-and-scope-of-the-p5-js-showcase-7193ef558c5a"
                target="blank"
              >
                <button className="readmore">Read More</button>
              </a>
            </div>

            <br></br>

            <div id="archive2019">
              <h1>p5.js 2019 Showcase</h1>
              <h3>
                <i>Curated by Ashley Kang</i>
              </h3>

              <a href="https://p5js.org/showcase/" target="blank">
                <button className="view">View</button>
              </a>
              <a
                href="https://medium.com/processing-foundation/p5-js-showcase-4a3756528542"
                target="blank"
              >
                <button className="readmore">Read More</button>
              </a>
            </div>
          </div>

          <div className="column">
            <div id="archive2020">
              <h1>p5.js 2020 Showcase</h1>
              <h3>
                <i>Curated by Connie Liu</i>
              </h3>
              <Link
                to="/showcase2020"
                className="view"
                onClick={() => onShowcase2020Click()}
              >
                View
              </Link>
              <a
                href="https://medium.com/processing-foundation/increasing-the-organization-and-scope-of-the-p5-js-showcase-7193ef558c5a"
                target="blank"
              >
                <button className="readmore">Read More</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
