import React from "react";
import lost from "./lhs.png";
import { Grid } from "@mui/material";
import { useWallet } from "../hooks/useWallet";
import logo from "./lh.png";
const Partdropclaim = () => {
  const { account, connect, contractData, harvest } = useWallet();
  const { isWL, hasClaimed } = contractData;

  return (
    <div className="container">
      <Grid container>
        {" "}
        <Grid
          item
          md={12}
          lg={12}
          sm={12}
          xs={12}
          style={{
            justifyContent: "center",
            AlignItems: "center",
            textAlign: "center",
            fontFamily: "ethnocentric",
            color: "#fff ",
            fontSize: "17px",
          }}
        >
          <br />
          <br />
          <a href="./">
            {" "}
            <img src={logo} className="partynavlogo" />
          </a>

          <br />
          <br />
          <div class="">
            <br />

            <h2 className="partner font_family"> HOPE Token Party Claim </h2>
            <br />
            <br />
            <p
              style={{
                justifyContent: "center",
                AlignItems: "center",
                textAlign: "center",
                fontFamily: "ethnocentric",
                color: "#fff ",
                fontSize: "17px",
              }}
            >
              {" "}
              A gift of HOPE to LHS Partner projects.{" "}
            </p>
            <p
              style={{
                justifyContent: "center",
                AlignItems: "center",
                textAlign: "center",
                fontFamily: "ethnocentric",
                color: "#fff ",
                fontSize: "17px",
              }}
            >
              {" "}
              If you own an NFT from a partner collection, you're able to claim
              420 HOPE tokens (once per wallet), as a gift to our extended web3
              family.{" "}
            </p>
          </div>
          <br />
          <div class="">
            <p
              style={{
                justifyContent: "center",
                AlignItems: "center",
                textAlign: "center",
                fontFamily: "ethnocentric",
                color: "#fff ",
                fontSize: "17px",
              }}
            >
              {" "}
              HOPE Token Contract:{" "}
            </p>
            <p
              style={{
                justifyContent: "center",
                AlignItems: "center",
                textAlign: "center",
                fontFamily: "ethnocentric",
                color: "#fff ",
                fontSize: "17px",
              }}
            >
              {" "}
              0x2d2C0A72eaFDB8840DA4F7B604e05dD64FEB86C1{" "}
            </p>
          </div>

          <br />
          <img
            src={lost}
            style={{ borderRadius: "10px" }}
            className="lost_img_party"
          />
        </Grid>
      </Grid>

      <Grid container>
        {" "}
        <Grid
          item
          md={12}
          lg={12}
          sm={12}
          xs={12}
          style={{
            justifyContent: "center",
            AlignItems: "center",
            textAlign: "center",
            fontFamily: "ethnocentric",
            color: "#fff ",
            fontSize: "17px",
          }}
        >
          <br />
          {!!account && (
            <div class="">
              <p
                style={{
                  justifyContent: "center",
                  AlignItems: "center",
                  textAlign: "center",
                  fontFamily: "ethnocentric",
                  color: "#fff ",
                  fontSize: "17px",
                }}
              >
                Claim Status:{" "}
                {!account
                  ? "Connect Wallet"
                  : hasClaimed
                  ? "Already Claimed"
                  : isWL
                  ? "420 HOPE Claim Available"
                  : "Account Not Whitelisted"}{" "}
              </p>
            </div>
          )}
          <br />
          {!!account ? (
            <div className="container">
              <a
                disabled={hasClaimed || !isWL}
                class="button"
                type="button"
                name="Hover"
                onClick={() => harvest()}
              >
                Claim
              </a>
            </div>
          ) : (
            <div className="container">
              <a
                class="button"
                type="button"
                name="Hover"
                onClick={() => connect()}
              >
                Connect Wallet
              </a>
            </div>
          )}
        </Grid>
        <Grid
          item
          md={12}
          lg={12}
          sm={12}
          xs={12}
          style={{
            justifyContent: "center",
            AlignItems: "center",
            textAlign: "center",
            fontFamily: "ethnocentric",
            color: "#fff ",
            fontSize: "17px",
          }}
        >
          <br />
        </Grid>
      </Grid>
    </div>
  );
};

export default Partdropclaim;
