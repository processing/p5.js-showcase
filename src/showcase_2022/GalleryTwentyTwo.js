import TestCard2022 from "./TestCard2022.js";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../styles/App.css";
import FilterButton from "../global_components/FilterButton.js";
import DifficultyFilterButton from "../global_components/DifficultyFilterButton.js";
import ScrollToTop from "../global_components/ScrollToTop.js";
import { Link, useParams } from "react-router-dom";

const filterPathnames = [
  "All",
  "Visual",
  "Data Visualization",
  "Game",
  "Text",
  "Sound",
  "Educational",
  "Camera",
];

const difficultyPathnames = [
  // 'All',
  "Beginner",
  "Intermediate",
  "Advanced",
];

function GalleryTwentyTwo(props) {
  let { id, filter } = useParams();
  ScrollToTop();
  var Markdown = require("react-markdown");
  const { t, i18n } = useTranslation();
  const [filtered, setFilter] = useState("All");
  const filtermap = t("filters", { returnObjects: true });
  // difficulty filter
  const difficultymap = t("difficulty", { returnObjects: true });

  var showcase2022 =
    filter === "All"
      ? t("showcase2022", { returnObjects: true })
      : t("showcase2022", { returnObjects: true }).filter((a) =>
          a.type === filter
            ? a.type
            : a.type[0] === filter
            ? a.type[0]
            : a.type[1] === filter
            ? a.type[1]
            : a.type[2] === filter
            ? a.type[2]
            : a.difficulty === filter
            ? a.difficulty
            : a.difficulty[0] === filter
            ? a.difficulty[0]
            : null
        );

  console.log(showcase2022);

  const filterList = filtermap.map(({ name }, index) => (
    <Link
      key={filterPathnames[index]}
      to={{
        // Use english filter name in the url pathname
        pathname: `/2022-${filterPathnames[index]}/`,
      }}
    >
      <FilterButton
        key={filterPathnames[index]}
        name={filterPathnames[index]}
        displayName={name}
        isPressed={filterPathnames[index] === filtered}
        setFilter={setFilter}
        id={
          filterPathnames[index] === "Data Visualization"
            ? "Data"
            : filterPathnames[index]
        }
        className={filterPathnames[index] === filter ? "active" : ""}
      />
    </Link>
  ));

  // DIFFICULTY FILTER COMPONENT

  const difficultyList = difficultymap.map(({ name }, index) => (
    <Link
      key={difficultyPathnames[index]}
      to={{
        // Use english filter name in the url pathname
        pathname: `/2022-${difficultyPathnames[index]}/`,
      }}
    >
      <DifficultyFilterButton
        key={difficultyPathnames[index]}
        name={difficultyPathnames[index]}
        displayName={name}
        isPressed={difficultyPathnames[index] === filtered}
        setFilter={setFilter}
        id={difficultyPathnames[index]}
        className={difficultyPathnames[index] === filter ? "active" : ""}
      />
    </Link>
  ));

  return (
    <div className="body">
      <div className="intro2020">
        <h1>p5.js 2022 Showcase </h1>
        <h3>
          <em>{<Markdown source={t("2020Gallery_Intro")} />}</em>
        </h3>
      </div>
      <div className="filterlist">
        <h2>
          <img src={require(`./site_images/asterisk-01-01_2022.png`)} />
          {t("filter by")}:
        </h2>
        {filterList} <h2>/</h2>
        {difficultyList}
      </div>

      <div className="gallery">
        <div class="row">
          {showcase2022.map(
            ({
              author,
              title,
              description,
              alt,
              live,
              code,
              type,
              difficulty,
              tools,
              social,
              id,
              picid,
            }) => (
              <TestCard2022
                key={`2022-card-${id}`}
                title={title}
                author={author}
                description={description}
                alt={alt}
                live={live}
                code={code}
                type={type}
                difficulty={difficulty}
                tools={tools}
                social={social}
                id={id}
                picid={picid}
                filter={filtered}
              />
            )
          )}
        </div>
      </div>
      <div className="footer">
        <img
          className="footer-img"
          src={require(`./site_images/heart-end.png`)}
          alt="two cartoon hearts hula hooping together with one hula hoop"
        />
        <p>You've reached the bottom!</p>
      </div>
    </div>
  );
}
export default GalleryTwentyTwo;
