import React from "react";
import on from "./yetii.gif";

import { Grid } from "@mui/material";

const Pne = () => {
  return (
    <div>

    <br />

    <br />
    <h2 className="partner"></h2>
    <br />
    <br />

      <Grid container spacing={2}>
        <Grid item md={12} lg={12} xs={12} sm={12}>
        <img src={on} style={{ width: "100%" , borderRadius:"20px" }} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Pne;
