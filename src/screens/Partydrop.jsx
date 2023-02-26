import React from "react";
import Layout from "./Navbar";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import "bootstrap/dist/css/bootstrap.min.css";
import Grid from "@mui/material/Grid";
import Partydropnavbar from "../partydropcomponent/partydropnavbar";
import Partdropclaim from "../partydropcomponent/partdropclaim";
import Partner from "../partydropcomponent/partydroppartner";
import Footer from "./Component/Footer";

function Home() {
  const theme = useTheme();
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down("lg"));
  return (
    <div className="home">
      {/* This css code is  use for the height of the home Page*/}
      {/* THIS JAVASCRIPT CODE IS FOR Background Image we have on the Home Page*/}{" "}
      {/* THIS JAVASCRIPT CODE IS FOR Header on the Home Page*/}
      {!smallScreen && (
        <Grid justifyContent={"center"} class="bg">
          <Partydropnavbar />
          <Partdropclaim />
          <br />
          <br />
          <Partner />
          <Footer />

          {/* THIS JAVASCRIPT CODE IS FOR the rainbow image on the Home Page*/}
        </Grid>
      )}
      {/* THIS JAVASCRIPT CODE IS FOR the Slider used for the Desktop View when you press on CustomSlider with ctrl and right arrow you move towards the Slider Page Desktop View*/}
      {smallScreen && (
        <Grid justifyContent={"center"} class="bg">
          <Partydropnavbar />
          <Partdropclaim />
          <br />
          <br />
          <Partner />
          <Footer />
          {/* THIS JAVASCRIPT CODE IS FOR the rainbow image on the Home Page*/}
        </Grid>
      )}
      {/* THIS JAVASCRIPT CODE IS FOR the Slider used for the Mobile View when you press on MobileSlider with ctrl and right arrow you move towards the Slider Page Mobile View*/}
    </div>
  );
}

export default Home;
