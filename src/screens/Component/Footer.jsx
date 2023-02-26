import React from "react";
import Grid from "@mui/material/Grid";
import { FaDiscord, FaTwitter, FaTelegram } from "react-icons/fa";

import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
const Footer = () => {
  return (
    <div>
      {" "}
      <MDBFooter
        className="text-center text-lg-start "
        style={{
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
                  style={{
                    color: "#990000 ",
                    fontWeight: "700",
                    textAlign: "center",
                  }}
                >
                  LOST HOPE SOCIETY
                </h6>
                <p style={{ color: "#fff ", textAlign: "center" }}>
                  Copyright © 2022 Lost Hope Society-NFT | Powered by Lost Hope
                  Society-NFT
                </p>
              </MDBCol>

              <MDBCol md="12" lg="12" xl="12" className="mx-auto mb-md-0 mb-4">
                <h6
                  className="text-uppercase fw-bold mb-4"
                  style={{
                    color: "#990000 ",
                    fontWeight: "700",
                    textAlign: "center",
                  }}
                >
                  social networks
                </h6>
                <div
                  style={{
                    color: "#990000 ",
                    fontWeight: "700",
                    textAlign: "center",
                  }}
                >
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
                        fontWeight: "30px",
                      }}
                      target="_blank"
                    >
                      <FaTelegram
                        style={{
                          justifyContent: "center",
                          AlignItems: "center",
                          marginTop: "auto",
                          fontWeight: "30px",
                        }}
                      />
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
                      className={` `}
                      style={{
                        justifyContent: "center",
                        AlignItems: "center",
                        marginTop: "auto",
                        fontWeight: "30px",
                      }}
                      target="_blank"
                    >
                      <FaTwitter
                        style={{
                          justifyContent: "center",
                          AlignItems: "center",
                          marginTop: "auto",
                          fontWeight: "30px",
                        }}
                      />
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
          style={{ backgroundColor: "#990000", borderRadius: "1px" }}
        ></div>
      </MDBFooter>
    </div>
  );
};

export default Footer;
