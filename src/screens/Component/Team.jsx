import React from "react";

import { Grid } from "@mui/material";

import mc from "../Component/img/mc.jpg";
import dc from "../Component/img/dn.jpg";
import god from "../Component/img/god.jpg";

import deb from "../Component/img/deb.jpg";
import cory from "../Component/img/cory.jpg";
import got from "../Component/img/got.jpg";

import cms from "./cms.jpg";

const Team = () => {
  return (
    <div className="container" id="team">
      {" "}
      <br />
      <h2 className="partner font_family">Our Team</h2>
      <br />
      <br />
      <Grid container spacing={2}>
        <Grid item md={6} lg={6} xs={12} sm={12} className="partnerz">
          <>
            {" "}
            <img
              src={mc}
              style={{ height: "100%", width: "50%", borderRadius: "50px" }}
              className="partnerz"
            />
          </>
        </Grid>
        <Grid item md={6} lg={6} xs={12} sm={12}>
          <h2 className="partner font_family">
            Tyler McGoldrick - Founder of LHS
          </h2>
          <br />
          <p className="partnerz">
            Crypto enthusiast since 2015, Engineering Student and LHS is his
            first project, he is also on the core team of another Polygon
            Project called Crypto Crew.
          </p>

          <a href="https://twitter.com/McGoldT" className="btn-grad">
            Twitter
          </a>
        </Grid>
      </Grid>
      <br />
      <br />
      <Grid container spacing={2}>
        <Grid item md={6} lg={6} xs={12} sm={12} className="partnerz">
          <>
            {" "}
            <img
              src={dc}
              style={{ height: "100%", width: "50%", borderRadius: "50px" }}
              className="partnerz"
            />
          </>
        </Grid>
        <Grid item md={6} lg={6} xs={12} sm={12}>
          <h2 className="partner font_family">Dan (Munch) - Lead Designer</h2>
          <br />
          <p className="partnerz">
            Dan is our Lead designer and handles the 3D/ animated content and
            delivery of the NFT designs. Dan is a team member of The Boys Club
            and actively involved in many projects in the Web3 space.
          </p>

          <a href="https://twitter.com/OGMunch83" className="btn-grad">
            Twitter
          </a>
        </Grid>
      </Grid>
      <br />
      <br />
      <Grid container spacing={2}>
        <Grid item md={6} lg={6} xs={12} sm={12} className="partnerz">
          <>
            {" "}
            <img
              src={god}
              style={{ height: "100%", width: "50%", borderRadius: "50px" }}
              className="partnerz"
            />
          </>
        </Grid>
        <Grid item md={6} lg={6} xs={12} sm={12}>
          <h2 className="partner font_family">Godknows - Graphic Designer</h2>
          <br />
          <p className="partnerz">
            Godknows is our Graphic designer he deals with out brand kit and all
            other 2D graphics. He also works as a Graphic Designer for
            Invigorate DAO, Ambassador & Moderator for Crypto Crew.
          </p>

          <a href="https://twitter.com/godknows_ukari" className="btn-grad">
            Twitter
          </a>
        </Grid>
      </Grid>
      <br />
      <br />
      <Grid container spacing={2}>
        <Grid item md={6} lg={6} xs={12} sm={12} className="partnerz">
          <>
            {" "}
            <img
              src={deb}
              style={{ height: "100%", width: "50%", borderRadius: "50px" }}
              className="partnerz"
            />
          </>
        </Grid>

        <Grid item md={6} lg={6} xs={12} sm={12}>
          <h2 className="partner font_family">Deb - Lore Writer</h2>
          <br />
          <p className="partnerz">
            Deb is responsible for writing our project Lore she has a PhD in
            Film Studies and English and works as a technical writer for a
            global tech company.
          </p>

          <a href="https://twitter.com/deb3writer" className="btn-grad">
            Twitter
          </a>
        </Grid>
      </Grid>
      <br />
      <br />
      <Grid container spacing={2}>
        <Grid item md={6} lg={6} xs={12} sm={12} className="partnerz">
          <>
            <img
              src={cory}
              style={{ height: "100%", width: "50%", borderRadius: "50px" }}
              className="partnerz"
            />
          </>
        </Grid>

        <Grid item md={6} lg={6} xs={12} sm={12}>
          <h2 className="partner font_family">Cory Roberts - Metaverse Tech</h2>
          <br />
          <p className="partnerz">
            Cory is well known in the NFT space as he is a part of the Legit
            Squad and started his journey in Web3 as a Promoter and is now the
            community manager for both LHS & Crypto Crew
          </p>

          <a href="https://twitter.com/cory_roberts16" className="btn-grad">
            Twitter
          </a>
        </Grid>
      </Grid>
      <br />
      <br />
      <Grid container spacing={2}>
        <Grid item md={6} lg={6} xs={12} sm={12} className="partnerz">
          <>
            {" "}
            <img
              src={got}
              style={{ height: "100%", width: "50%", borderRadius: "50px" }}
              className="partnerz"
            />
          </>
        </Grid>
        <Grid item md={6} lg={6} xs={12} sm={12}>
          <h2 className="partner font_family">
            Justin (Enmity) - Strategic Leader
          </h2>
          <br />
          <p className="partnerz">
            Justin is the owner of Ancient Dragon Club and Long Term Member and
            Moderator for HealthHero/GoHero
          </p>

          <a href="https://twitter.com/enmityancientdr" className="btn-grad">
            Twitter
          </a>
        </Grid>
      </Grid>
      <br />
      <br />
      <Grid container spacing={2}>
        <Grid item md={6} lg={6} xs={12} sm={12} className="partnerz">
          <>
            {" "}
            <img
              src={cms}
              style={{ height: "110%", width: "50%", borderRadius: "50px" }}
              className="partnerz"
            />
          </>
        </Grid>
        <Grid item md={6} lg={6} xs={12} sm={12}>
          <h2 className="partner font_family">Andie - Community Manager </h2>
          <br />
          <p className="partnerz">
            Coming Soon <br /> .......
          </p>

          <a href="" className="btn-grad">
            Twitter (Coming Soon)
          </a>
        </Grid>
      </Grid>
      <br />
      <br />
      <Grid container spacing={2}>
        <Grid item md={6} lg={6} xs={12} sm={12} className="partnerz">
          <>
            {" "}
            <img
              src={cms}
              style={{ height: "110%", width: "50%", borderRadius: "50px" }}
              className="partnerz"
            />
          </>
        </Grid>
        <Grid item md={6} lg={6} xs={12} sm={12}>
          <h2 className="partner font_family">Jofreelon - Telegram Manager</h2>
          <br />
          <p className="partnerz">
            Coming Soon <br /> .......
          </p>

          <a href="" className="btn-grad">
            Twitter (Coming Soon)
          </a>
        </Grid>
      </Grid>
    </div>
  );
};

export default Team;
