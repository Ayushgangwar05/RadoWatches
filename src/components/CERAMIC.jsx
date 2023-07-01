import React from "react";
import image from "../Gallery/captain-cook-high-tech-ceramic-skeleton-lifestyle-hero_1.jpg";

function CERAMIC() {
  return (
    <div style={{ width: "100%" }}>
      <div style={{ width: "100%", position: "relative" }}>
        <a href="#">
          <img
            style={{ width: "100%", objectFit: "contain" }}
            src={image}
            alt="#"
          />
        </a>
        <div
          style={{
            width: "95%",
            position: "absolute",
            top: "0",
            marginTop: "6vw",
          }}
        >
          <div style={{ width: "40vw", marginLeft: "55vw" }}>
            <h1 style={{ color: "white", fontSize: "40px", fontWeight: "500" }}>
              CAPTAIN COOK <br />
              HIGH-TECH CERAMIC SKELETON
            </h1>
            <p style={{ color: "white", fontWeight: "bold" }}>
              The ideal gift for Father's Day!
            </p>

            <button
              style={{
                width: "10vw",
                height: "7vh",
                backgroundColor: "transparent",
                borderRadius: "50px 50px",
                borderColor: "white",
              }}
            >
              <a
                style={{ textDecorationLine: "none", color: "white" }}
                href="https://www.rado.com/en_in/collections/true-square.html"
              >
                Discover more
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CERAMIC;
