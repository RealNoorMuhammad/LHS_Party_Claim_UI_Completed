import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { Grid } from "@mui/material";

const Faq = () => {
  return (
    <div className="container" id="faq">
      <br />
      <h2 className="partner font_family">FAQ's</h2>
      <br />
      <br />

      <Grid container>
        <Grid item md={12} lg={12} xs={12} sm={12}>
          {" "}
          <Accordion
            style={{
              background: "#201f1c86",

              borderRadius: "20px",
              color: "#fff",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                style={{
                  fontWeight: "600",
                }}
              >
                Who are the Lost Hope Society?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                style={{
                  fontWeight: "400",
                }}
              >
                Lost Hope Society is a lore driven Faction based NFT project
                powered by Polygon looking to blur the lines between NFTs, DeFi
                and the Metaverse using 0xPioneers NFTfi protocol.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <br />
          <Accordion
            style={{
              background: "#201f1c86",

              borderRadius: "20px",
              color: "#fff",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                style={{
                  fontWeight: "600",
                }}
              >
                What is NFTfi?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                style={{
                  fontWeight: "400",
                }}
              >
                We believe that the future of NFTs lies in the ability to easily
                connect a non-Fungible asset to one that is Fungible. Using our
                developers 0xPionners innovative NFT Harvesting Protocol we will
                look to allow our users to be able to hold one of our NFTS while
                simultaneously earning a set number of tokens that are not held
                by another entity but are being minted into existence block by
                block. Fittingly the term “NFTfi” has been born from this
                protocol and will change the way that we can interact with NFTs
                and DeFi lending endless possibilities to what we thought was
                possible within Web3
                <br />
                Please refer to &nbsp;
                <a
                  href="https://0xpioneers.gitbook.io/0xpioneers/"
                  style={{ color: "#990000", fontWeight: "800" }}
                >
                  OxPioneers
                </a>
                &nbsp; for more information regarding this protocol.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <br />
          <Accordion
            style={{
              background: "#201f1c86",

              borderRadius: "20px",
              color: "#fff",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                style={{
                  fontWeight: "600",
                }}
              >
                What is the Faction Leader- Badge collection?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                style={{
                  fontWeight: "400",
                }}
              >
                The Faction Leader collection consisted of 10 1/1 NFTs
                representing each Factions.
                <br />
                They represent the 10 Factions of Opona and all have there own
                individual backstories
                <br />
                The Faction Leaders are the founding members and will have full
                control of their individual Factions.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <br />
          <Accordion
            style={{
              background: "#201f1c86",

              borderRadius: "20px",
              color: "#fff",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                style={{
                  fontWeight: "600",
                }}
              >
                What is the Private Sale/ICO?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                style={{
                  fontWeight: "400",
                }}
              >
                To establish Liquidity and to give early investor a chance to
                hold our tokens we have structured out private sale in two
                parts:
                <br />
                1. Captain Badges – For those who want to hold tokens and be a
                part of the project (Active Investors)
                <br />
                2. Ambassador Badges- For those who want to hold a higher number
                of tokens and not be involved with the projects story/ Factions
                (Passive investors)
                <br />
                The sale of our Tokens/ICO will come in the form of an NFTfi
                sale, where the NFT will show your claim of tokens and will also
                show a working product on which our Faction Member Scrolls will
                follow.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <br />
          <Accordion
            style={{
              background: "#201f1c86",

              borderRadius: "20px",
              color: "#fff",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                style={{
                  fontWeight: "600",
                }}
              >
                What are the Faction Member Scrolls?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                style={{
                  fontWeight: "400",
                }}
              >
                The Faction Member Scrolls will be our first onboarding of 5000
                members to the Lost Hope Society.
                <br />
                These NFTs will incorporate our NFTfi protocol meaning they will
                self level over time and also hold a claim to 20k HOPE tokens
                each emitted over 1 year.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <br />
          <Accordion
            style={{
              background: "#201f1c86",

              borderRadius: "20px",
              color: "#fff",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                style={{
                  fontWeight: "600",
                }}
              >
                What are HOPE tokens?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                style={{
                  fontWeight: "400",
                }}
              >
                HOPE tokens are the utility coin for the Lost Hope Society,
                these tokens can only be acquired through holding a Scroll,
                Captains Badge or Ambassador badge. Our HOPE tokens will be
                fully backed and paired to MATIC.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </div>
  );
};

export default Faq;
