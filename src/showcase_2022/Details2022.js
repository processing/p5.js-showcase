import React from "react";
import "../styles/App.css";
import toolslist from "../data/tools.json";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import ScrollToTop from "../global_components/ScrollToTop";
import { Link } from "react-router-dom";

const Details2022 = ({ piece, filter }) => {
  const {
    title,
    description,
    extradesc,
    id,
    picid,
    author,
    pronouns,
    type,
    tools,
    qanda,
    location,
    social,
    live,
    code,
    answer1,
    answer2,
    answer3,
    answer4,
    answer5,
    answer6,
  } = piece;
  const toolslinks = tools.split(",");
  const sociallinks = social.split(",");
  var Markdown = require("react-markdown");
  const { t } = useTranslation();
  const toolslisted = toolslist;
  const filterid = "/2022-" + filter + "/";

  return (
    <div>
      <div className="details-title">
        <h1>{title}</h1>
        <p>{<Markdown source={description} />}</p>
        <p>{<Markdown source={extradesc} />}</p>
      </div>
      <div className="details-header">
        <ScrollToTop />
        <div className="row">
          <div className="details-image">
            <img
              src={require(`../../public/2022images/${picid}`)}
              alt={title}
              className="Card-image"
            />
          </div>
          <div className="col">
            {/* <h1>{title}</h1> */}
            <h2 className="short">{t("Created By")}</h2>
            <h3>
              {author}{" "}
              <span class="small">
                ({pronouns}) from {location}
              </span>
            </h3>
            <div class="row">
              <div id="portfolio">
                {social.length !== 0 &&
                  sociallinks.map((so, index) => {
                    if (so.includes("instagram"))
                      return (
                        <a aria-label="Instagram" href={so} target="_blank">
                          {t("")}
                          <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </a>
                      );

                    if (so.includes("twitter"))
                      return (
                        <a aria-label="Twitter" href={so} target="_blank">
                          {t("")}
                          <FontAwesomeIcon icon={faTwitter} size="2x" />
                        </a>
                      );

                    if (so.includes("github"))
                      return (
                        <a aria-label="Github" href={so} target="_blank">
                          {t("")}
                          <FontAwesomeIcon icon={faGithub} size="2x" />
                        </a>
                      );

                    if (so.includes("linkedin"))
                      return (
                        <a aria-label="Github" href={so} target="_blank">
                          {t("")}
                          <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </a>
                      );

                    return (
                      <a href={so} target="_blank">
                        {t("Portfolio")}{" "}
                      </a>
                    );
                  })}
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h2>{t("Project Links")}</h2>
                <a href={live} target="_blank">
                  {t("Live")}
                </a>
                {code.length !== 0 && (
                  <a href={code} target="_blank">
                    {t("Code")}
                  </a>
                )}
              </div>
              <div className="col">
                <div>{tools.length !== 0 && <h2>{t("Tools")}</h2>}</div>
                {toolslinks.map((tool, index) => {
                  let newTool = tool.replace(/\s+/g, "");
                  return (
                    <a href={toolslisted[newTool]} target="_blank">
                      {tool}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="detailsbody">
        {/* <p>{<Markdown source={description} />}</p>
        <p>{<Markdown source={extradesc} />}</p> */}

        <div className="QnA">
          <h1>Q and A</h1>
          {/* <h2>{t("Question1")}</h2>
          <div id="answer1"></div> */}
          {answer1 && <h2>{t("Question1")}</h2>}
          {<p>{<Markdown source={answer1} />}</p>}
          {answer2 && <h2>{t("Question2")}</h2>}
          {<p>{<Markdown source={answer2} />}</p>}
          {answer3 && <h2>{t("Question3")}</h2>}
          {<p>{<Markdown source={answer3} />}</p>}

          {answer4 && <h2>{t("Question4")}</h2>}
          {<p>{<Markdown source={answer4} />}</p>}

          {answer5 && <h2>{t("Question5")}</h2>}
          {<p>{<Markdown source={answer5} />}</p>}

          {answer6 && <h2>{t("Question6")}</h2>}
          {<p>{<Markdown source={answer6} />}</p>}
        </div>
        <div className="center">
          <Link to={filterid}>← Back to Gallery</Link>
        </div>
      </div>
    </div>
  );
};

export default Details2022;
