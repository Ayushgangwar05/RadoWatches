import React from "react";
import image from "../Gallery/Carousel_5000x3756_2.jpg";
import image1 from "../Gallery/true-square-skeleton-all-carousel.jpg";
import image2 from "../Gallery/new-centrix-carousel.jpg";
import image3 from "../Gallery/view-all-collections.jpg";
import Creationimg from "../components/Creationimg ";

function Creationsimg() {
  return (
    <div style={{ width: "100%" }}>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div
            class="carousel-item active"
            style={{ width: "40vw", height: "70vh", display: "flex" }}
          >
            <img
              style={{ width: "40vw", height: "70vh" }}
              src={image}
              class="d-block w-100"
              alt="..."
            />

            <img
              style={{ width: "40vw", height: "70vh" }}
              src={image1}
              class="d-block w-100"
              alt="..."
            />

            <img
              style={{ width: "40vw", height: "70vh" }}
              src={image2}
              class="d-block w-100"
              alt="..."
            />
            <img
              style={{ width: "40vw", height: "70vh" }}
              src={image3}
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div style={{ width: "40vw", height: "70vh" }} class="carousel-item">
            <img
              style={{ width: "40vw", height: "70vh" }}
              src={image1}
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div style={{ width: "40vw", height: "70vh" }} class="carousel-item">
            <img
              style={{ width: "40vw", height: "70vh" }}
              src={image2}
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div style={{ width: "40vw", height: "70vh" }} class="carousel-item">
            <img
              style={{ width: "40vw", height: "70vh" }}
              src={image3}
              class="d-block w-100"
              alt="..."
            />
          </div>
          
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-target="#carouselExampleIndicators"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-target="#carouselExampleIndicators"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Creationsimg;
