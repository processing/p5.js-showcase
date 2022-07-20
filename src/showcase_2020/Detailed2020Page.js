import "../styles/App.css";
import React, { useState, useEffect } from "react";
import Details2020 from "./Details2020.js"
import i18next from 'i18next';
import { useParams } from "react-router-dom";

export default function Detailed2020Page() {
    let { id, filter } = useParams();
    let entries = i18next.t('showcase2020', { returnObjects: true });
    let piece = entries.find(x => x.id === id);
  
    if (!piece) return <div>Image not found</div>;
  
    return (
      <Details2020
        filter={filter}
        piece={piece}
      />
    );
  }