import React from "react";
import Grid from "@mui/material/Grid";

import {
  Animator,
  ScrollContainer,
  ScrollPage,
  Sticky,
  Zoom,
  ZoomIn,
  FadeIn,
  FadeOut,
  MoveIn,
  MoveOut,
  Fade,
  ZoomOut,
  batch,
  StickyIn,
} from "react-scroll-motion";

import hero from "./lhs.png";
const Hero = () => {
  return (
    <>
      <>
        <div>
          {" "}
          <Grid>
            <br />
            < >
              <img src={hero} style={{ width: "100%" }} />
            </>
            {/* THIS JAVASCRIPT CODE IS FOR the rainbow image on the Home Page*/}
          </Grid>
        </div>
      </>
    </>
  );
};

export default Hero;
