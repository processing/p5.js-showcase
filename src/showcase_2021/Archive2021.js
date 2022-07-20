import "../styles/App.css";
import React, { useState, useEffect } from "react";
import { useTranslation} from "react-i18next";
import ScrollToTop from '../global_components/ScrollToTop.js'
import { Link } from "react-router-dom";

export default function Archive2021() {
    var Markdown = require('react-markdown');
  
    const { t, i18n } = useTranslation();
  
    const changeLanguage = lng => {
      i18n.changeLanguage(lng);
    };

    ScrollToTop();
  
    return (
      <div className="body">
        <div className="gallery">
          <div id="intro2019">
            <h1>Archive</h1>
            <h3><Markdown source={t('Archiveabout')} /></h3>
          </div>
        
          <div className = "flex">
            <div className ="column">
              <div id= "archive2020">
                <h1>p5.js 2020 Showcase</h1>
                <h3><i>Curated by Connie Liu</i></h3>
                <a href='https://connie-liu.me/p5.js-showcase/#/?' target="blank"><button className = "view">View</button></a>
                <a href='https://medium.com/processing-foundation/increasing-the-organization-and-scope-of-the-p5-js-showcase-7193ef558c5a' target="blank"><button className = "readmore">Read More</button></a>
              </div>
            </div>
  
            <br></br>
  
            <div className="column">
              <div id = "archive2019">
                <h1>p5.js 2019 Showcase</h1>
                <h3><i>Curated by Ashley Kang</i></h3>
        
                <a href='https://p5js.org/showcase/' target="blank"><button className ="view">View</button></a>
                <a href='https://medium.com/processing-foundation/p5-js-showcase-4a3756528542' target="blank"><button className = "readmore">Read More</button></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }