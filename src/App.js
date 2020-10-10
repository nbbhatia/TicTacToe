import React from "react";
import { Grid } from "@material-ui/core";
import "./App.css";
import History from "./components/history/history";
import Game from "./components/game/game";
function App() {
  return (
    <Grid
      md={12}
      sm={12}
      xs={12}
      item
      container
      direction="row"
      className="App"
    >
      <Grid md={6} xs={12} sm={12} item>
        <Game />
      </Grid>
      <Grid md={6} xs={12} sm={12} item>
        <History />
      </Grid>
    </Grid>
  );
}

export default App;
