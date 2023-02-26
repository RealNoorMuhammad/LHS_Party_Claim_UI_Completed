import React from "react";

import Pne from "./partone.jsx";
import Bone from "./BoneFaction";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper";
import "./sty.css";

const MemberScrolls = () => {
  return (
    <div className="container">
      <br />

      <br />
      <h2 className="partner font_family">Faction Member Scrolls </h2>
      <br />
      <br />
      <Swiper
        grabCursor={true}
        centeredSlides={true}
        navigation={true}
        slidesPerView={"1"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 10000,
          disableOnInteraction: true,
        }}
        pagination={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Pne />
        </SwiperSlide>
      </Swiper>
      <br />
      <br />
      <br />
      <p className="partners">
        Details of collection
        <br />
        <br />
        <br />
        Presale & Public sale.
        <br />
        5000 supply
        <br />
        presale (1000 at 50 MATIC)
        <br />
        public sale (4000 at 100 MATIC)
        <br />
        20k HOPE tokens emitted monthly over 1 year.
        <br />
        self leveling NFT with tokens held = higher level.
      </p>

      <br />
      <br />
      <br />
    </div>
  );
};

export default MemberScrolls;
