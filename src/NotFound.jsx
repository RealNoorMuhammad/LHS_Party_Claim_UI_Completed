import React from "react";

const NotFound = () => {
  return (
    <div>
      <br />
      <br />
     
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1
        style={{
          justifyContent: "center",
          textAlign: "center",
          color: "#990000 ",
          fontWeight: "800",
        }}
        className=" font_family"
      >
        404 ERROR
      </h1>
      <br />
      <br />
      <br />
      <div class="cloak__wrapper">
        <div class="cloak__container">
          <div class="cloak"></div>
        </div>
      </div>
      <div
        style={{ justifyContent: "center", textAlign: "center" }}
        className=" font_family"
      >
        <h2 className=" font_family">We can't find that page</h2>
        <br />

        <p className=" font_family">
          We're fairly sure that page used to be here, but seems to have gone
          missing. We do apologise on it's behalf.
        </p>

        <br />
        <a href="./" target="_blank" rel="noreferrer noopener">
          <div class="">
            <div class="button-containerzc">
              <p class="maskc">Home </p>
              <button type="button" name="Hover">
                Home
              </button>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default NotFound;
