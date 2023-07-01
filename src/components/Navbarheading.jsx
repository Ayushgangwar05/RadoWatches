import React from "react";

function Navbarheading() {
  return (
    <div
      id="Navbarheading"
      style={{
        width: "100%",
        height: "6vh",
        backgroundColor: "#000",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "84%",
          textAlign: "end",
          height: "3vh",
          marginTop: "1vh",
        }}
      >
        <a
          style={{
            textDecorationLine: "none",
            color: "white",
            fontSize: "13.5px",
          }}
          href="https://store.rado.com/en?_gl=1%2a1vdld8%2a_ga%2aMTM5OTA0NTM0Ny4xNjg2ODI2MzEz%2a_ga_31SBFMJ4EN%2aMTY4NzE0Nzk3Mi4xMi4xLjE2ODcxNDc5OTAuMC4wLjA"
        >
          Store Locator
        </a>
        <a
          style={{ marginLeft: "10px" }}
          href="https://store.rado.com/en?_gl=1%2a1vdld8%2a_ga%2aMTM5OTA0NTM0Ny4xNjg2ODI2MzEz%2a_ga_31SBFMJ4EN%2aMTY4NzE0Nzk3Mi4xMi4xLjE2ODcxNDc5OTAuMC4wLjA"
        >
          <i style={{ color: "white" }} class="bi bi-geo-alt"></i>
        </a>
        <a
          style={{
            textDecorationLine: "none",
            color: "white",
            marginLeft: "1vw",
            fontSize: "13.5px",
          }}
          href="#NavbarHindienlish"
        >
          India / English ₹
        </a>
        <a style={{ marginLeft: "5px" }} href="#">
          <i style={{ color: "white" }} class="bi bi-chevron-down"></i>
        </a>
      </div>
    </div>
  );
}
export default Navbarheading;
