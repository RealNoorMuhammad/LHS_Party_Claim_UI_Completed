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
  
      <h2 className="partner font_family">The 10 Factions </h2>
      <br />
      <br />
      <p className="partners">
        The Lost Hope Society and it's Factions are fully backed with a rich and
        deep Lore that will act as the story behind the project.
      </p>
      <br />
      <br />
      <p className="partners">
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
            href="/lore"
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
              Lore page coming soon
            </button>
          </a>
        </div>
      </p>
      {/* <Grid container spacing={2}>
        <Grid item md={3} lg={3} sm={12} xs={12}>
          <MDBCard
            style={{
              background: "rgba(27, 27, 27, 0.678)",
              border: "1px solid #000",
              borderRadius: "20px",
            }}
          >
            <MDBCardImage
              src={one}
              position="top"
              alt="..."
              style={{ height: "250px", borderRadius: "20px", width: "100%" }}
            />
            <MDBCardBody style={{ height: "350px" }}>
              <MDBCardText style={{ color: "#fff" }} className="pcard">
                Agile and cunning, the Wolf Pack transform from their human
                forms into wolves during the full moon and roam in packs across
                Opona. They hunt by the moonlight and leave no survivors.
                Centuries ago, they were scholars who wrote the ancient texts
                but, when the Battle of the Ten commenced, they hid the texts
                and now guard them with their lives. The faction leader leads
                the pack and is the most learned.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </Grid>
        <Grid item md={3} lg={3} sm={12} xs={12}>
          <MDBCard
            style={{
              background: " rgba(27, 27, 27, 0.678)",
              border: "1px solid #000",
              borderRadius: "20px",
            }}
          >
            <MDBCardImage
              src={two}
              position="top"
              alt="..."
              style={{ height: "250px", borderRadius: "20px", width: "100%" }}
            />
            <MDBCardBody style={{ height: "350px" }}>
              <MDBCardText style={{ color: "#fff" }} className="pcard">
                A once peaceful race who lived in and mined the mountains of
                Opona, the Mountain Wreckers were driven from their home by the
                House of Yeti and are their mortal enemies. They may be dwarves
                but they are fiercely intelligent and fast. Their weapons are
                some of the strongest in Opona due to their mining skills. The
                faction leader is responsible for finding new ways to strengthen
                their weapons.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </Grid>
        <Grid item md={3} lg={3} sm={12} xs={12}>
          <MDBCard
            style={{
              background: " rgba(27, 27, 27, 0.678)",
              border: "1px solid #000",
              borderRadius: "20px",
            }}
          >
            <MDBCardImage
              src={three}
              position="top"
              alt="..."
              style={{ height: "250px", borderRadius: "20px", width: "100%" }}
            />
            <MDBCardBody style={{ height: "350px" }}>
              <MDBCardText style={{ color: "#fff" }} className="pcard">
                In life, they were Opona’s most dangerous criminals and killers.
                Now, in the afterlife, the Necrotots Sindicate is a deathly
                force of different beings whose powers were strengthened through
                death. The faction leader has the power to resurrect those they
                want to join their ranks. They are the enemies of The Last Hope
                Order.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </Grid>
        <Grid item md={3} lg={3} sm={12} xs={12}>
          <MDBCard
            style={{
              background: " rgba(27, 27, 27, 0.678)",
              border: "1px solid #000",
              borderRadius: "20px",
            }}
          >
            <MDBCardImage
              src={four}
              position="top"
              alt="..."
              style={{ height: "250px", borderRadius: "20px", width: "100%" }}
            />
            <MDBCardBody style={{ height: "350px" }}>
              <MDBCardText style={{ color: "#fff" }} className="pcard">
                Comprised of the strongest and most-skilled Spartan warriors,
                the Dark Sparta Alliance is known for their battle tactics and
                brute force. Boys are initiated into strict military training
                from infancy and are taught to fight to the death. They are most
                known for their brutal use of spears and other weapons. The
                faction leader is known for their military prowess and tactics.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </Grid>
      </Grid>*/}
    </div>
  );
};

export default History;
