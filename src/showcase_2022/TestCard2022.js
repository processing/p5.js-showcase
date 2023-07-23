import React from "react";
import toolslist from "../data/tools.json";
import ClampLines from "react-clamp-lines";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
function TestCard2022(props) {
  const { t, i18n } = useTranslation();
  const toolslisted = toolslist;
  const toolslinks = props.tools.split(",");
  // console.log(props);
  return (
    <div className="card2020">
      <div className="bigcard">
        <div className="cardimage">
          <Link
            key={props.id}
            to={{
              pathname: `/2022-${props.filter}/${props.id}/`,
            }}
          >
            <img
              src={require(`../../public/2022images/${props.picid}`)}
              alt={props.title}
              className="Card-image"
            />
          </Link>
        </div>
        <div className="Name2020">
          <Link
            key={props.id}
            to={{
              pathname: `/2022-${props.filter}/${props.id}/`,
            }}
          ></Link>
        </div>
        <div className="img-description">
          <p className="img-description-text">
            {/* Image description: Image of the player's character in the middle of
            a forest at night, and it is raining. The character is a black
            circle with two big eyes looking towards the front. White light
            glows around the character with a spotlight shines the nearby area. */}
            Image Description: {props.alt}
          </p>
        </div>
        <div className="links">
          {props.code.length !== 0 ? (
            <a href={props.live} target="_blank">
              <div className="box">{t("Live")}</div>
            </a>
          ) : (
            <a href={props.live} target="_blank">
              <div className="box full">{t("Live")}</div>
            </a>
          )}
          {props.code.length !== 0 && (
            <a href={props.code} target="_blank">
              <div className="box">{t("Code")}</div>
            </a>
          )}
        </div>
        <div className="Description2020">
          <h2 className="card-title">{props.title}</h2>
          <h2 className="card-author">
            <em>{props.author}</em>
          </h2>
          <ClampLines
            text={props.description}
            id="custom"
            lines={4}
            className="custom-class"
            ellipsis="..."
            buttons={false}
            innerElement="span"
          />
        </div>
        {toolslinks.length !== 0 && (
          <div className="tags">
            {toolslinks.map((tool, index) => {
              let newTool = tool.replace(/\s+/g, "");
              return (
                <ul>
                  {tool.length !== 0 && (
                    <li>
                      <a href={toolslisted[newTool]} target="_blank">
                        {tool}
                      </a>
                    </li>
                  )}
                </ul>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default TestCard2022;
