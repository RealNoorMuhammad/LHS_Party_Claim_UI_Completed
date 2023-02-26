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

import one from "./img/agile.gif";
import two from "./img/moun.gif";
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
      <h2 className="partner font_family">
        Captain badges (private sale/ICO){" "}
      </h2>
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
        Details of collection
        <br />
        <br />
        <br />
        Private sale/ ICO
        <br />
        1000 Supply
        <br />
        100 Captains per Faction
        <br />
        25 Matic each & 1 per wallet
        <br />
        20k HOPE tokens
        <br />
        Vested for 1 year
        <br />
        <br />
        <br />
        20K MATIC from sale will be used as Liquidity for our HOPE tokens.
      </p>

      
      <br />
      <br />
    </div>
  );
};

export default History;
