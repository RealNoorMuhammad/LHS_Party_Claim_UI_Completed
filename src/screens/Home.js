import React from "react";
import Layout from "./Navbar";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import "bootstrap/dist/css/bootstrap.min.css";
import Grid from "@mui/material/Grid";

import Navbar from "./Navbar";

import Hero from "./Component/Hero";
import Roadmap from "./Component/Roadmap";
import Partner from "./Component/Partner";
import History from "./Component/History";
import StoryofLeader from "./Component/StortofLeader";
import Faq from "./Component/Faq";
import Team from "./Component/Team";
import MemberScrolls from "./Component/MemberScrolls";
import Captain from "./Component/Captain";
import Token from "./Component/tokenomics";
import Header from "../components/Header";

import Footer from "./Component/Footer";

import bg from "./bg.scss";

function Home() {
  const theme = useTheme();
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down("lg"));
  return (
    <div className="home">
      {/* This css code is  use for the height of the home Page*/}
      {/* THIS JAVASCRIPT CODE IS FOR Background Image we have on the Home Page*/}{" "}
      {/* THIS JAVASCRIPT CODE IS FOR Header on the Home Page*/}
      {!smallScreen && (
        <Grid justifyContent={"center"} class="wrappers">
          <Navbar />
          <br />
          <br />
          <br />
          <Hero />
          <br />
          <br />
          <History />
          <StoryofLeader />
          <br />
          <br />
          <Captain />
          <br />
          <br />
          <Token />
          <br />
          <br />
          <MemberScrolls />
          <br />
          <br />
          <Partner />
          <br />
          <br />
          <Roadmap />
          <br />
          <br />
          <Team />
          <br />
          <br />
          <Faq />
          <br />
          <br />
          <div
            className="container"
            style={{
              justifyContent: "center",
              AlignItems: "center",
              textAlign: "center",
              fontFamily: "ethnocentric",
            }}
          >
            {" "}
            <a
              href="https://drive.google.com/file/d/1sbYSPc7KoL7W5tRiwK-JiaRvj4v_JAL5/view?usp=share_link"
              style={{
                textDecoration: "none",
              }}
            >
              <button
                class="glow-on-hover"
                type="button"
                style={{
                  justifyContent: "center",
                  AlignItems: "center",
                  textAlign: "center",
                  fontFamily: "ethnocentric",
                }}
              >
                {" "}
                LITE PAPER
              </button>
            </a>
            &nbsp; &nbsp; &nbsp;
            <a
              href="https://drive.google.com/file/d/1vv3TNEURizUB8gdnAcOW63_WNLP3aGB1/view"
              style={{
                textDecoration: "none",
              }}
            >
              <button
                class="glow-on-hover"
                type="button"
                style={{
                  justifyContent: "center",
                  AlignItems: "center",
                  textAlign: "center",
                  fontFamily: "ethnocentric",
                }}
              >
                {" "}
                Pitch Deck
              </button>
            </a>
          </div>

          <br />

          <Footer />

          {/* THIS JAVASCRIPT CODE IS FOR the rainbow image on the Home Page*/}
        </Grid>
      )}
      {/* THIS JAVASCRIPT CODE IS FOR the Slider used for the Desktop View when you press on CustomSlider with ctrl and right arrow you move towards the Slider Page Desktop View*/}
      {smallScreen && (
        <Grid justifyContent={"center"} class="wrappers">
          <Navbar />
          <br />
          <br />
          <br />
          <Hero />
          <br />
          <br />
          <br />
          <br />
          <History />
          <br />
          <br />
          <StoryofLeader />
          <br />
          <br />
          <Captain />
          <br />
          <br />
          <Token />
          <br />
          <br />
          <MemberScrolls />
          <br />
          <br />
          <Partner />
          <br />
          <br />
          <Roadmap />
          <br />
          <br />
          <Team />
          <br />
          <br />
          <Faq />
          <br />
          <br />
          <div
            className="container"
            style={{
              justifyContent: "center",
              AlignItems: "center",
              textAlign: "center",
              fontFamily: "ethnocentric",
            }}
          >
            {" "}
            <a
              href="https://drive.google.com/file/d/1sbYSPc7KoL7W5tRiwK-JiaRvj4v_JAL5/view?usp=share_link"
              style={{
                textDecoration: "none",
              }}
            >
              <button
                class="glow-on-hover"
                type="button"
                style={{
                  justifyContent: "center",
                  AlignItems: "center",
                  textAlign: "center",
                  fontFamily: "ethnocentric",
                }}
              >
                {" "}
                LITE PAPER
              </button>
            </a>
          </div>
          <br />
          <br />
          <div
            className="container"
            style={{
              justifyContent: "center",
              AlignItems: "center",
              textAlign: "center",
              fontFamily: "ethnocentric",
            }}
          >
            {" "}
            <a
              href="https://drive.google.com/file/d/1vv3TNEURizUB8gdnAcOW63_WNLP3aGB1/view"
              style={{
                textDecoration: "none",
              }}
            >
              <button
                class="glow-on-hover"
                type="button"
                style={{
                  justifyContent: "center",
                  AlignItems: "center",
                  textAlign: "center",
                  fontFamily: "ethnocentric",
                }}
              >
                {" "}
                Pitch Deck
              </button>
            </a>
          </div>
          <br />
          <Footer />
          {/* THIS JAVASCRIPT CODE IS FOR the rainbow image on the Home Page*/}
        </Grid>
      )}
      {/* THIS JAVASCRIPT CODE IS FOR the Slider used for the Mobile View when you press on MobileSlider with ctrl and right arrow you move towards the Slider Page Mobile View*/}
    </div>
  );
}

export default Home;
