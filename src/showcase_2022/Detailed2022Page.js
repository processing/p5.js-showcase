import "../styles/App.css";
import React from "react";
import Details2022 from "./Details2022.js"
import i18next from 'i18next';
import { useParams } from "react-router-dom";

export default function Detailed2022Page() {
    let { id, filter } = useParams();
    let entries = i18next.t('showcase2022', { returnObjects: true });
    let piece = entries.find(x => x.id === id);
  
    if (!piece) return <div>Image not found</div>;
  
    return (
      <Details2022
        filter={filter}
        piece={piece}
      />
    );
  }