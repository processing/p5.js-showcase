import "../styles/App.css";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import TestCard from "../global_components/TestCard.js";
import ScrollToTop from '../global_components/ScrollToTop.js'

import { Link } from "react-router-dom";

export default function Gallerynineteen() {
    var Markdown = require('react-markdown');
    const { t, i18n } = useTranslation();
  
    ScrollToTop();
  
    return (
      <div className="body">
        <div className="gallery">
          <div id="intro2019">
          <h1>p5.js 2019 Showcase!</h1>
          <h3><Markdown source={t('2019about')} /></h3>
          <div className="row">
            {t('showcase2019', { returnObjects: true }).map(({ id, title, author, description, image }) => (
              <Link
                key={id}
                to={{
                  pathname: `/showcase2020/2019/${id}/`,
                }}
              >
                <TestCard key={`card-${id}`}
                  id={id}
                  title={title}
                  author={author}
                  description={description}
                  image={image} />
              </Link>
            ))}
          </div>
        </div>
      </div>
      </div>
    );
  }