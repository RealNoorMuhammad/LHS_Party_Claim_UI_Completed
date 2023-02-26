import React from "react";

import main from "./hope.mp4";

import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Grid from "@mui/material/Grid";
import { FaDiscord, FaTwitter, FaTelegram } from "react-icons/fa";

import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

function Home() {
  const theme = useTheme();
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <div>
      {/* This css code is  use for the height of the home Page*/}
      {/* THIS JAVASCRIPT CODE IS FOR Background Image we have on the Home Page*/}{" "}
      {/* THIS JAVASCRIPT CODE IS FOR Header on the Home Page*/}
      {!smallScreen && (
        <div>
          {" "}
          <Grid justifyContent={"center"}>
            {/* THIS JAVASCRIPT CODE IS FOR the rainbow image on the Home Page*/}

            <Grid container justifyContent={"center"} spacing={10}>
              <Grid item md={12} lg={12} xs={12} sm={12}>
                <video
                  className="homeRainBow "
                  autoPlay="true"
                  loop="true"
                  muted="false"
                >
                  <source src={main} type="video/mp4" />
                  <source src={main} type="video/ogg" />
                </video>
              </Grid>
            </Grid>
            <br />
            <Grid
              container
              justifyContent={"center"}
              spacing={10}
              style={{
                justifyContent: "center",
                AlignItems: "center",
                textAlign: "center",
              }}
            >
              <Grid item md={12} lg={12} xs={12} sm={12}>
                <h2
                  style={{
                    justifyContent: "center",
                    AlignItems: "center",
                    textAlign: "center",
                    fontFamily: "ethnocentric",
                    color: "#fff ",
                  }}
                >
                  WELCOME TO LOST HOPE SOCIETY
                  <br />
                  <br />
                </h2>

                <br />
                <br />

                <a
                  href="./home"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <div class="">
                    <div class="button-containerzc">
                      <p class="maskc">Enter </p>
                      <button type="button" name="Hover">
                        Enter
                      </button>
                    </div>
                  </div>
                </a>
                <br />
              </Grid>
              <br />
            </Grid>
            <br />

            <MDBFooter
              className="text-center text-lg-start "
              style={{
                backgroundColor: "#000 ",
                fontFamily: "ethnocentric",
              }}
            >
              <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                <div>
                  <a href="" className="me-4 text-reset">
                    <MDBIcon fab icon="facebook-f" />
                  </a>
                  <a href="" className="me-4 text-reset">
                    <MDBIcon fab icon="twitter" />
                  </a>
                  <a href="" className="me-4 text-reset">
                    <MDBIcon fab icon="google" />
                  </a>
                  <a href="" className="me-4 text-reset">
                    <MDBIcon fab icon="instagram" />
                  </a>
                  <a href="" className="me-4 text-reset">
                    <MDBIcon fab icon="linkedin" />
                  </a>
                  <a href="" className="me-4 text-reset">
                    <MDBIcon fab icon="github" />
                  </a>
                </div>
              </section>

              <section className="">
                <MDBContainer className="text-center text-md-start mt-5">
                  <MDBRow className="mt-3">
                    <MDBCol md="12" lg="12" xl="12" className="mx-auto mb-4">
                      <h6
                        className="text-uppercase fw-bold mb-4"
                        style={{ color: "#fff ", textAlign: "center" }}
                      >
                        LOST HOPE SOCIETY
                      </h6>
                      <p style={{ color: "#fff ", textAlign: "center" }}>
                        Copyright © 2022 Lost Hope Society-NFT | Powered by Lost
                        Hope Society-NFT
                      </p>
                    </MDBCol>
                    <br />

                    <MDBCol
                      md="12"
                      lg="12"
                      xl="12"
                      className="mx-auto mb-md-0 mb-4"
                    >
                      <br />
                      <br />
                      <h6
                        className="text-uppercase fw-bold mb-4"
                        style={{ color: "#fff ", textAlign: "center" }}
                      >
                        social networks
                      </h6>
                      <div style={{ color: "#fff ", textAlign: "center" }}>
                        <a
                          href="https://t.me/+Uwqp38JLaA82ZjU0"
                          className="me-4 text-reset"
                        >
                          <a
                            href="https://t.me/+Uwqp38JLaA82ZjU0"
                            className={` `}
                            style={{
                              justifyContent: "center",
                              AlignItems: "center",
                              marginTop: "auto",
                              textAlign: "center",
                            }}
                            target="_blank"
                          >
                            <FaTelegram />
                            {/* Thats is used for discord link   For Home Page*/}
                          </a>
                        </a>
                        &nbsp; &nbsp; &nbsp; &nbsp;
                        <a
                          href="https://twitter.com/LHS_NFTfi"
                          className="me-4 text-reset"
                        >
                          <a
                            href="https://twitter.com/LHS_NFTfi"
                            className={``}
                            style={{
                              justifyContent: "center",
                              AlignItems: "center",
                              marginTop: "auto",
                              textAlign: "center",
                            }}
                            target="_blank"
                          >
                            <FaTwitter />
                            {/* Thats is used for discord link   For Home Page*/}
                          </a>
                        </a>
                      </div>
                    </MDBCol>
                  </MDBRow>
                  <br />
                </MDBContainer>
              </section>

              <div
                className="text-center p-4"
                style={{ backgroundColor: " #990000 " }}
              ></div>
            </MDBFooter>
          </Grid>
        </div>
      )}
      {/* THIS JAVASCRIPT CODE IS FOR the Slider used for the Desktop View when you press on CustomSlider with ctrl and right arrow you move towards the Slider Page Desktop View*/}
      {smallScreen && (
        <div>
          {" "}
          <Grid justifyContent={"center"}>
            {/* THIS JAVASCRIPT CODE IS FOR the rainbow image on the Home Page*/}

            <Grid container justifyContent={"center"} spacing={10}>
              <Grid item md={12} lg={12} xs={12} sm={12}>
                <video
                  className="homeRainBow "
                  autoPlay="true"
                  loop="true"
                  muted="false"
                >
                  <source src={main} type="video/mp4" />
                  <source src={main} type="video/ogg" />
                </video>
              </Grid>
            </Grid>
            <br />
            <Grid
              container
              justifyContent={"center"}
              spacing={10}
              style={{
                justifyContent: "center",
                AlignItems: "center",
                textAlign: "center",
              }}
            >
              <Grid item md={12} lg={12} xs={12} sm={12}>
                <h2
                  style={{
                    justifyContent: "center",
                    AlignItems: "center",
                    textAlign: "center",
                    fontFamily: "ethnocentric",
                    color: "#fff ",
                    fontSize: "17px",
                  }}
                >
                  WELCOME TO LOST HOPE SOCIETY
                  <br />
                  <br />
                </h2>

                <br />
                <br />
                <a
                  href="./home"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <div class="">
                    <div class="button-containerzc">
                      <p class="maskc">Enter </p>
                      <button type="button" name="Hover">
                        Enter
                      </button>
                    </div>
                  </div>
                </a>
                <br />
              </Grid>
              <br />
            </Grid>
            <br />

            <MDBFooter
              className="text-center text-lg-start "
              style={{
                backgroundColor: "#000 ",
                fontFamily: "ethnocentric",
              }}
            >
              <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                <div>
                  <a href="" className="me-4 text-reset">
                    <MDBIcon fab icon="facebook-f" />
                  </a>
                  <a href="" className="me-4 text-reset">
                    <MDBIcon fab icon="twitter" />
                  </a>
                  <a href="" className="me-4 text-reset">
                    <MDBIcon fab icon="google" />
                  </a>
                  <a href="" className="me-4 text-reset">
                    <MDBIcon fab icon="instagram" />
                  </a>
                  <a href="" className="me-4 text-reset">
                    <MDBIcon fab icon="linkedin" />
                  </a>
                  <a href="" className="me-4 text-reset">
                    <MDBIcon fab icon="github" />
                  </a>
                </div>
              </section>

              <section className="">
                <MDBContainer className="text-center text-md-start mt-5">
                  <MDBRow className="mt-3">
                    <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                      <h6
                        className="text-uppercase fw-bold mb-4"
                        style={{ color: "#fff " }}
                      >
                        LOST HOPE SOCIETY
                      </h6>
                      <p style={{ color: "#fff " }}>
                        Copyright © 2022 Lost Hope Society-NFT | Powered by Lost
                        Hope Society-NFT
                      </p>
                    </MDBCol>

                    <MDBCol
                      md="2"
                      lg="2"
                      xl="2"
                      className="mx-auto mb-4"
                    ></MDBCol>

                    <MDBCol
                      md="3"
                      lg="2"
                      xl="2"
                      className="mx-auto mb-4"
                    ></MDBCol>

                    <MDBCol
                      md="4"
                      lg="3"
                      xl="3"
                      className="mx-auto mb-md-0 mb-4"
                    >
                      <h6
                        className="text-uppercase fw-bold mb-4"
                        style={{ color: "#fff " }}
                      >
                        social networks
                      </h6>
                      <div>
                        <a
                          href="https://t.me/+Uwqp38JLaA82ZjU0"
                          className="me-4 text-reset"
                        >
                          <a
                            href="https://t.me/+Uwqp38JLaA82ZjU0"
                            className={` `}
                            style={{
                              justifyContent: "center",
                              AlignItems: "center",
                              marginTop: "auto",
                            }}
                            target="_blank"
                          >
                            <FaTelegram />
                            {/* Thats is used for discord link   For Home Page*/}
                          </a>
                        </a>
                        &nbsp; &nbsp;
                        <a
                          href="https://twitter.com/LHS_NFTfi"
                          className="me-4 text-reset"
                        >
                          <a
                            href="https://twitter.com/LHS_NFTfi"
                            className={``}
                            style={{
                              justifyContent: "center",
                              AlignItems: "center",
                              marginTop: "auto",
                            }}
                            target="_blank"
                          >
                            <FaTwitter />
                            {/* Thats is used for discord link   For Home Page*/}
                          </a>
                        </a>
                      </div>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
              </section>

              <div
                className="text-center p-4"
                style={{ backgroundColor: " #990000 " }}
              ></div>
            </MDBFooter>
          </Grid>
        </div>
      )}
      {/* THIS JAVASCRIPT CODE IS FOR the Slider used for the Mobile View when you press on MobileSlider with ctrl and right arrow you move towards the Slider Page Mobile View*/}
    </div>
  );
}

export default Home;
