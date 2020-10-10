import React from "react";
import Header from "../header/header";
import Board from "../board/board";
import BoardAction from "../boardActions/boardAction";
import "./game.css";
function game() {
  return (
    <section className="game">
      <Header title="Tic Tac Toe" />
      <Board />
      <BoardAction />
    </section>
  );
}

export default game;
