import React from "react";
import image from "../Gallery/homepage-master-of-materials-image-card.jpg";

function Materials() {
  return (
    <div style={{ width:"100%",display: "flex", backgroundColor: "#f2f2f2" }}>
      <div style={{ width: "51vw" }}>
        <div
          style={{
            marginTop: "18vh",
            marginLeft: "18vw",
          }}
        >
          <h4 style={{ fontSize: "20px", fontWeight: "450" }}>
            Master of materials
          </h4>
          <h1 style={{ width: "20vw", fontWeight: "400" }}>
            The unconventional beauty of ceramic
          </h1>
          <p style={{ width: "24vw" }}>
            Hypoallergenic comfort, lightness and the very special sensation of
            ceramic against your skin – unmistakable, sensual and unique with
            Rado high-tech ceramic
          </p>
          <br />
          <div
            style={{
              width: "3vw",
              height: "5px",
              borderTopStyle: "solid",
              borderTopColor: "black",
            }}
          ></div>
          <br />
          <a
            style={{ textDecoration: "none", color: "black" }}
            href="https://www.rado.com/en_in/art-of-ceramic.html"
          >
            Discover the world of ceramics
            <i class="bi bi-arrow-right-short"></i>
          </a>
        </div>
      </div>
      <div style={{ width: "48vw" }}>
        <a href="https://www.rado.com/en_in/art-of-ceramic.html">
          <img
            style={{ width: "48vw", height: "70vh", marginTop: "14vh" }}
            src={image}
            alt="#"
          />
        </a>
      </div>
    </div>
  );
}

export default Materials;
