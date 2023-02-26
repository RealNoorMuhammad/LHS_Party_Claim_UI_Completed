import React from "react";

import { Grid } from "@mui/material";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";

import one from "./popp.png";
import two from "./tgs.png";
import three from "./img/cap.gif";
import four from "./img/dar.gif";

const History = () => {
  return (
    <div className="container" id="story">
      {" "}
      <br />
      <br />
      <br />
      <br />
      <h2 className="partner font_family">Hope token (tokenomics)</h2>
      <br />
      <br />
      <img
        src={one}
        position="top"
        alt="..."
        style={{ height: "100%", borderRadius: "20px", width: "100%" }}
      />
      <br />
      <br />
      <p className="partners">
        <br />
        <br />
        <br />
        Our HOPE tokens are the utility tokens of the LHS ecosystem.
        <br />
        <br />
        With a total supply of 1 Billion and fully incorporated into our NFTs
        using 0xPioneers NFTfi protocol.
        <br />
        <br />
        Our supply will be released in stages with Vesting schedules to protect
        the community.
      </p>
      <br />
      <br />
    </div>
  );
};

export default History;
