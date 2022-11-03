import ArtistsCard2022 from "./ArtistsCard2022.js";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../styles/App.css";
import ScrollToTop from "../global_components/ScrollToTop.js";


function Artists2022(props) {
  ScrollToTop();
  var Markdown = require("react-markdown");
  const { t, i18n } = useTranslation();

  var showcase2022 = t("showcase2022", {returnObjects: true});

  return (
    <div className="body">
      <div className="intro2020">
        <h1>p5.js 2022 Showcase </h1>
        <h3>
          <em>{<Markdown source={t("2022ArtistsPage_Intro")} />}</em>
        </h3>
      </div>

      <div className="gallery">
        <div className="row">
          {showcase2022.map(
            ({
              author,
              title,
              description,
              live,
              code,
              type,
              difficulty,
              tools,
              social,
              id,
              picid,
            }) => (
              <ArtistsCard2022
                key={`2022-artists-card-${id}`}
                title={title}
                author={author}
                description={description}
                live={live}
                code={code}
                type={type}
                tools={tools}
                social={social}
                id={id}
                picid={picid}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}
export default Artists2022;