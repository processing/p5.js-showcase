import "../styles/App.css";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Bar } from 'react-chartjs-2';
import P5Wrapper from 'react-p5-wrapper';
import sketch2021 from '../showcase_2021/sketch2021.js'
import Simple from '../showcase_2021/simple2021';
import GraphButton from './GraphButton';
import { HashLink } from 'react-router-hash-link';
import { Link } from "react-router-dom";

export default function Gallery() {
    var Markdown = require('react-markdown');
    const { t, i18n } = useTranslation();
    const options = {
      maintainAspectRatio: false,
      scales: {
        yAxes: [
          {
            ticks: {
              callback: function (label, index, labels) {
                return label + '%';
              }
            },
            scaleLabel: {
              display: true,
              labelString: 'Percentage'
            }
          }
        ]
      }
    };
    const data1 = {
      labels: ['Independently', 'Taught in Formal Degree'],
      datasets: [
        {
          label: 'Experience Learning p5.js',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: [76.8, 23.2],
        }
      ]
    };
    const data2 = {
      labels: ['0-2 yrs', '2-5 yrs', '5+ yrs'],
      datasets: [
        {
          label: 'Years Spent Coding',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: [41.3, 35.5, 28.8]
        }
      ]
    };
    const [graph1Displayed, showGraph1] = useState(true);
    const [graph2Displayed, showGraph2] = useState(false);
    return (
      <div className="body">
        <div className="cover2020">
        <h1>{t('Welcome')}</h1>
        <h2><em>{t('Created By')} Annie Zheng</em></h2>
          <div className="flex">
            <div className="column">
            <h3><Markdown source={t('2020_intro1')}/></h3>
              {/* <h2>{t('Jump to')} <HashLink smooth to="#twentyviz">{t('Visualizations')}</HashLink> | <Link to="/2020-All">{t('Projects')}</Link></h2>
              <HashLink smooth to="#twentyviz"><img className="downarrow" src={process.env.PUBLIC_URL + '/down.svg'} alt="p5.js down arrow" /></HashLink> */}
            </div>
            <div className="column">
              {/* <div class="gradient-border" id="box"> */}
                <h3><Markdown source={t('2020_intro1.5')}/></h3>
                {/* <h3><Markdown source={t('2020_intro1.5')} /></h3> */}
                <h2><HashLink smooth to="#twentyviz"><Markdown source={t('2020_intro2')} /></HashLink></h2>
                <HashLink smooth to="#twentyviz"><img className="downarrow" src={process.env.PUBLIC_URL + '/down.svg'} alt="p5.js down arrow" /></HashLink>
              {/* </div> */}
            </div>
          </div>
        </div>
        <div className="twentyviz" id="twentyviz">
          <div className="flex column">
            <h1>{t('Viz1')}</h1>
            <p><em>{t('Directionsmap')}</em></p>
          </div>
          <Simple />
          <h1 className="tenpx">{t('Viz2')}</h1>
          <div className="flex">
            <div className="column">
              <p><em>{t('Directions')}</em></p>
              <GraphButton
                id="graph1"
                className={graph2Displayed === false ? 'active' : ''}
                buttonname={t("viz2.1")}
                showGraph={showGraph1}
                otherGraph={showGraph2}
              />
              <h2><em>...{t("viz2.2")}</em></h2>
              <GraphButton
                id="graph2"
                buttonname={t("viz2.3")}
                className={graph1Displayed === false ? 'active' : ''}
                showGraph={showGraph2}
                otherGraph={showGraph1}
              />
            </div>
            <div className="column">
              {graph1Displayed &&
                <Bar
                  data={data1}
                  width={100}
                  height={280}
                  options={options}
                />}
              {graph2Displayed &&
                <Bar
                  data={data2}
                  width={100}
                  height={280}
                  options={options}
                />
              }
            </div>
          </div>
          <div id="viz3" className="column">
            <h1>{t('Viz3')}</h1>
            <div className="flex"><p><em>{t('Directions2')}</em></p></div>
            <div id="P5Wrapper" style={{ position: 'relative' }}>
              <P5Wrapper sketch={sketch2021} />
            </div>
            <h1>
              <Link to="/2022-All">{t('Viz4')}</Link>
            </h1>
          </div>
        </div>
      </div>
    );
  }