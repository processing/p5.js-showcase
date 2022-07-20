import "../styles/App.css";
import React, { useState, useEffect } from "react";
import Details from "../global_components/Details.js"
import i18next from 'i18next';

import { useParams } from "react-router-dom";


export default function DetailedPage() {
    let { id } = useParams();
    let entries = i18next.t('showcase2019', { returnObjects: true });
    let piece = entries.find(x => x.id === id);
  
    if (!piece) return <div>Image not found</div>;
  
    return (
      <Details
        piece={piece}
      />
    );
  }