import "../styles/App.css";
import React from "react";
import { useTranslation } from "react-i18next";

export default function About() {
    var Markdown = require('react-markdown');
    const { t, i18n } = useTranslation();
    return (
      <div className="home">
        <h1><img src={process.env.PUBLIC_URL + '/images/asterisk-01-01.png'} alt="p5.js asterisk" />
          {t('About1')}</h1>
        <h3><Markdown source={t('Answer1')} /></h3>
        <h1><img src={process.env.PUBLIC_URL + '/images/asterisk-01-01.png'} alt="p5.js asterisk" />
          {t('About2')}</h1>
        <h3><Markdown source={t('Answer2')} /></h3>
        <h1><img src={process.env.PUBLIC_URL + '/images/asterisk-01-01.png'} alt="p5.js asterisk" />{t('About3')}</h1>
        <h3><Markdown source={t('Answer3')} /></h3>
        <h1><img src={process.env.PUBLIC_URL + '/images/asterisk-01-01.png'} alt="p5.js asterisk" />{t('Acknowledgements')}</h1>
        <h3><Markdown source={t('Acknowledgements_Description')} /></h3>
      </div>
    );
  }