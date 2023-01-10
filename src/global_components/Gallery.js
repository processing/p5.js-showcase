import "../styles/App.css";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Bar } from "react-chartjs-2";
import P5Wrapper from "react-p5-wrapper";
import sketch2022 from "../showcase_2022/sketch2022.js";
import Simple from "../showcase_2022/simple2022";
import GraphButton from "./GraphButton";
import { HashLink } from "react-router-hash-link";

import { Link } from "react-router-dom";

export default function Gallery() {
  var Markdown = require("react-markdown");
  const { t, i18n } = useTranslation();
  const options = {
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          ticks: {
            callback: function (label, index, labels) {
              return label + "%";
            },
          },
          scaleLabel: {
            display: true,
            labelString: "Percentage",
          },
        },
      ],
    },
  };
  const data1 = {
    labels: ["Independently", "Taught in Formal Degree"],
    datasets: [
      {
        label: "Experience Learning p5.js",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [77.3, 22.7],
      },
    ],
  };
  const data2 = {
    labels: ["0-2 yrs", "2-5 yrs", "5+ yrs"],
    datasets: [
      {
        label: "Years Spent Coding",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [44.8, 36.2, 19],
      },
    ],
  };
  const [graph1Displayed, showGraph1] = useState(true);
  const [graph2Displayed, showGraph2] = useState(false);

  return (
    <div className="body2022">
      <div className="translation-banner">
        The translation are currently a work in progress. If you would like to
        help translate, feel free to edit them in the{" "}
        <a
          href="https://github.com/processing/p5.js-showcase"
          className="disclaimer-link"
          target="_blank"
        >
          {" "}
          Processing repo
        </a>
        . We would really appreciate your help!
      </div>
      <div className="cover2022">
        <div className="title-2022">
          <img
            id="connect-title"
            src={require(`../showcase_2022/site_images/connect-title.png`)}
            alt="Connect with asterik replacing the O.."
          />
        </div>

        <div className="cover-text-2022">
          {/* <h1 id="h1-2022">{t("Connect2022")}</h1> */}
          <h2 id="h2-2022">{t("Welcome2022")}</h2>
          <p id="p-2022">
            <i>{t("CreatedBy2022")}</i> 
            <i>{t("TemplateBy2022")}</i>
          </p>
        </div>

        <img
          id="landing-img"
          src={require(`../showcase_2022/site_images/p5landingimg.png`)}
          alt="two cartoon hearts holding onto a string"
        />
      </div>

      <div className="about-text-2022">
        <h2 className="about-h2">{t("2022-about-heading")}</h2>
        <div className="about-body-text">
          <p>{t("2022_intro1")}</p>
          <p>{t("2022_intro1.5")}</p>
        </div>
        <div className="about-learn-more">
          <h2>{t("2022_intro2")}</h2>
          <img
            className="about-img"
            src={require(`../showcase_2022/site_images/cartoon-flower.png`)}
            alt="a cartoon heart watering a cartoon flower"
          />
        </div>
      </div>

      <div className="twentyviz" id="twentyviz">
        <div className="map-viz-2022">
          <h1 className="foreword-h1-2022">{t("Viz1")}</h1>
          <Simple />
          <p>
            <em>{t("Directionsmap")}</em>
          </p>
        </div>

        <div className="map-viz-2022">
          <h1 className="tenpx">{t("Viz2")}</h1>
          <div className="flex">
            <div className="column">
              <p>
                <em>{t("Directions")}</em>
              </p>

              <GraphButton
                id="graph1"
                className={graph2Displayed === false ? "active" : ""}
                buttonname={t("viz2.1")}
                showGraph={showGraph1}
                otherGraph={showGraph2}
              />

              <h2>
                <em>...{t("viz2.2")}</em>
              </h2>

              <GraphButton
                id="graph2"
                buttonname={t("viz2.3")}
                className={graph1Displayed === false ? "active" : ""}
                showGraph={showGraph2}
                otherGraph={showGraph1}
              />
            </div>

            <div className="column">
              {graph1Displayed && (
                <Bar data={data1} width={100} height={280} options={options} />
              )}
              {graph2Displayed && (
                <Bar data={data2} width={100} height={280} options={options} />
              )}
            </div>
          </div>

          <div id="viz3" className="column to-them">
            <h1 className="viz3">{t("Viz3")}</h1>

            <div id="P5Wrapper" style={{ position: "relative" }}>
              <P5Wrapper sketch={sketch2022} />
            </div>

            <em>{t("Directions2")}</em>

            <h1 className="link-showcase">
              <Link to="/2022-All">{t("Viz4")}</Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
