import React from "react";
import { MDBCard, MDBCardImage } from "mdb-react-ui-kit";

import { Grid } from "@mui/material";
import guild from "./guild.png";
import gm from "./gm.jpg";
import crypto from "./crypto.png";
import ss from "./ss.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper";

const Partner = () => {
  return (
    <div className="container" id="partner">
      <br />
      <br />
      <br />
      <br />
      <h2 className="partner font_family">Partner projects included so far</h2>
      <br />
      <br />
      <Grid container style={{ paddingLeft: "80px" }}>
        {" "}
        <Swiper
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <a
              href="  https://315guild.io/



"
              target="_blank"
            >
              <MDBCard style={{ background: "transparent" }}>
                <MDBCardImage
                  src={guild}
                  position="top"
                  alt="..."
                  style={{ width: "60%" }}
                />
              </MDBCard>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="   https://twitter.com/cryptocrewnfts 



"
              target="_blank"
            >
              <MDBCard style={{ background: "transparent" }}>
                <MDBCardImage
                  src={crypto}
                  position="top"
                  alt="..."
                  style={{ width: "50%", position: "relative", left: "16px" }}
                />
              </MDBCard>
            </a>
          </SwiperSlide>

          <SwiperSlide>
            <a href="https://billionairezombies.com/ " target="_blank">
              <MDBCard style={{ background: "transparent" }}>
                <MDBCardImage
                  src={gm}
                  position="top"
                  alt="..."
                  style={{ width: "70%" }}
                />
              </MDBCard>
            </a>
          </SwiperSlide>
        </Swiper>
      </Grid>
      <br />
      <br />
    </div>
  );
};

export default Partner;
