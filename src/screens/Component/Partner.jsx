import React from "react";
import { MDBCard, MDBCardImage } from "mdb-react-ui-kit";

import { Grid } from "@mui/material";

import crypto from "../Component/img/crypto.png";
import pbp from "../Component/img/pbp.png";
import siva from "../Component/img/siva.png";
import sos from "../Component/img/sos.png";

import no from "../Component/img/no.png";

import ss from "../Component/img/ss.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper";

const Partner = () => {
  return (
    <div className="container" id='partner'>
      <br />
      <br />
      <br />
      <br />
      <h2 className="partner font_family" >Partners and Collaborations</h2>
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
              href="   https://twitter.com/cryptocrewnfts 



"
              target="_blank"
            >
              <MDBCard style={{ background: "transparent" }}>
                <MDBCardImage
                  src={crypto}
                  position="top"
                  alt="..."
                  style={{ width: "70%" }}
                />
              </MDBCard>
            </a>
          </SwiperSlide>

          <SwiperSlide>
            <a
              href="   https://twitter.com/sivacoin


    "
              target="_blank"
            >
              {" "}
              <MDBCard style={{ background: "transparent" }}>
                <MDBCardImage
                  src={siva}
                  position="top"
                  alt="..."
                  style={{ width: "70%" }}
                />
              </MDBCard>
            </a>
          </SwiperSlide>

          <SwiperSlide>
            <a
              href="   https://twitter.com/PoweredByPoly 

        "
              target="_blank"
            >
              {" "}
              <MDBCard style={{ background: "transparent" }}>
                <MDBCardImage
                  src={pbp}
                  position="top"
                  alt="..."
                  style={{ width: "70%" }}
                />
              </MDBCard>
            </a>
          </SwiperSlide>

          <SwiperSlide>
            <a
              href="  https://twitter.com/soskids22 
            "
              target="_blank"
            >
              <MDBCard style={{ background: "transparent" }}>
                <MDBCardImage
                  src={sos}
                  position="top"
                  alt="..."
                  style={{ width: "70%" }}
                />
              </MDBCard>
            </a>
          </SwiperSlide>

          <SwiperSlide>
            <a href=" https://twitter.com/SaltySharksNFT " target="_blank">
              <MDBCard style={{ background: "transparent" }}>
                <MDBCardImage
                  src={ss}
                  position="top"
                  alt="..."
                  style={{ width: "70%" }}
                />
              </MDBCard>
            </a>
          </SwiperSlide>

          <SwiperSlide>
            <a
              href="https://twitter.com/nobankfinance 
          "
              target="_blank"
            >
              <MDBCard style={{ background: "transparent" }}>
                <MDBCardImage
                  src={no}
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
