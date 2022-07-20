import React from "react";

export default function DifficultyFilterButton(props) {

    return (
      <button
        type="button"
        aria-pressed={props.isPressed}
        id={props.id}
        className={props.className}
        onClick={() => props.setFilter(props.name)}
      >
        <span>{props.displayName}</span>
      </button>
    );
  }