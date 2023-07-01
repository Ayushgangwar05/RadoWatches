import React from "react";
import Navbarheading from "./Navbarheading";
import Navbarmain from "./Navbarmain";

function Searchingnavb() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Navbarheading />
      <Navbarmain />
      <div style={{ textAlign: "center" }}>
        <h1>What are you looking for?</h1>
        <input
          style={{
            borderStyle: "none",
            borderBottomStyle: "solid",
            borderColor: "black",
            width: "25vw",
          }}
          type="text"
        />
        <i class="bi bi-search"></i>
      </div>
    </div>
  );
}

export default Searchingnavb;
