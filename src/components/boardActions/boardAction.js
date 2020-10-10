import React from "react";
import Button from "../../UI/button/button";
import "./boardAction.css";
function boardAction() {
  return (
    <section className="boardAction">
      <Button title="Start" />
      <Button title="Reset" />
    </section>
  );
}

export default boardAction;
