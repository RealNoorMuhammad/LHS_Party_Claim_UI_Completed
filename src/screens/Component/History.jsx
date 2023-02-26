import React from "react";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  Sticky,
  Zoom,
  ZoomIn,
  FadeIn,
  FadeOut,
  MoveIn,
  MoveOut,
  Fade,
  ZoomOut,
  batch,
  StickyIn,
} from "react-scroll-motion";

const ZoomInScrollOut = batch(FadeIn(), MoveIn(-1000, 0));

const History = () => {
  return (
    <ScrollContainer>
      <ScrollPage page={1}>
        <Animator></Animator>

        <div className="container">
          {" "}
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Animator animation={( Sticky(), MoveOut(0, -200))}>
            <h2 className="partner font_family">History of LHS</h2>
          </Animator>
          <br />
          <br />
          <Animator animation={ZoomInScrollOut}>
            {" "}
            <p className="partners">
              Lost Hope Society started out in 2022 to create a community of
              crypto and NFT enthusiasts.
              <br />
              <br />
              Inspiration for the Factions was taken from the founders own
              personal struggles with mental health. The premise was to create a
              project were everyone could have thier own identity and a place to
              call home.
              <br />
              <br />
              The first collection was The Faction Leader Badges. 10 applicants
              received a badge which would represent their title as a Faction
              Leader while also securing a percentage of their Faction sales.
            </p>
          </Animator>
        </div>
      </ScrollPage>{" "}
    </ScrollContainer>
  );
};

export default History;
