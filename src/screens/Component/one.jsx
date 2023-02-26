import React from "react";
import on from "./ath.gif";

import { Grid } from "@mui/material";

const one = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item md={12} lg={12} xs={12} sm={12}>
          <img src={on} style={{ width: "100%" }} />
        </Grid>
      </Grid>
    </div>
  );
};

export default one;
