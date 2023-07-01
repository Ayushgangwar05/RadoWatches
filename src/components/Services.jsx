import React from "react";

function Services() {
  return (
    <div
      style={{
        width: "70vw",
        height: "67vh",
        backgroundColor: "black",
      }}
    >
      <div
        style={{
          borderTopStyle: "solid",
          marginTop: "2vh",
          borderColor: "white",
          width: "100%",
          height: "5px",
        }}
      ></div>
      <h1 style={{ marginLeft: "5vw", marginTop: "5vh" }}>DISCOVER</h1>
      <a
        style={{
          color: "white",
          textDecoration: "none",
          marginTop: "5vh",
          marginLeft: "5vw",
        }}
        href="https://service.rado.com/?country=in&_gl=1*rmj3kz*_ga*MTM5OTA0NTM0Ny4xNjg2ODI2MzEz*_ga_31SBFMJ4EN*MTY4NzM2MzI2NS4yMS4xLjE2ODczNjMyNjUuMC4wLjA."
      >
        Customer Service
      </a>
      <br />
      <a
        style={{
          color: "white",
          textDecoration: "none",
          marginTop: "5vh",
          marginLeft: "5vw",
        }}
        href="https://service.rado.com/faq?country=in&_gl=1*1x3ny2o*_ga*MTM5OTA0NTM0Ny4xNjg2ODI2MzEz*_ga_31SBFMJ4EN*MTY4NzQxOTg1Mi4yMi4xLjE2ODc0MTk4OTMuMC4wLjA."
      >
        FAQ
      </a>
    </div>
  );
}

export default Services;
