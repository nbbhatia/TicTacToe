import React from "react";
import "./button.css";
function button(props) {
  return (
    <section>
      <button>{props.title}</button>
    </section>
  );
}

export default button;
