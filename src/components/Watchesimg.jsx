import React from "react";
import image from "../Gallery/captain-cook-chronograph_1.jpg";
import image1 from "../Gallery/true-square.jpg";
import image2 from "../Gallery/captain-cook-over-pole.jpg";
import image4 from "../Gallery/men-watches.jpg";
import image5 from "../Gallery/women-watches.jpg";

function Watchesimg() {
  return (
    <div>
      <div style={{ display: "flex", width: "100%" }}>
        <div style={{ position: "relative" }}>
          <a href="https://www.rado.com/en_in/chronograph-watches.html">
            <img style={{ width: "33vw" }} src={image} alt="#" />
          </a>

          <div
            style={{
              position: "absolute",
              top: "0",
              marginTop: "27vh",
              marginLeft: "5vw",
              textDecoration: "none",
            }}
          >
            <a
              style={{ textDecoration: "none" }}
              href="https://www.rado.com/en_in/chronograph-watches.html"
            >
              <h1
                style={{
                  color: "white",
                  fontWeight: "400",
                  textDecoration: "none",
                }}
              >
                Chronograph watches
              </h1>
            </a>

            <a
              style={{ textDecoration: "none" }}
              href="https://www.rado.com/en_in/chronograph-watches.html"
            >
              <button
                style={{
                  width: "9vw",
                  height: "6vh",
                  backgroundColor: "transparent",
                  marginLeft: "5vw",
                  color: "white",
                  fontSize: "15px",
                  borderColor: "white",
                  borderRadius: "50px 50px",
                }}
              >
                Discover more
              </button>
              /
            </a>
          </div>
        </div>

        <div style={{ position: "relative" }}>
          <a href="https://www.rado.com/en_in/skeleton-watches.html">
            <img style={{ width: "33vw" }} src={image1} alt="#" />
          </a>

          <div
            style={{
              position: "absolute",
              top: "0",
              marginTop: "27vh",
              marginLeft: "8vw",
            }}
          >
            <a
              style={{ textDecoration: "none" }}
              href="https://www.rado.com/en_in/skeleton-watches.html"
            >
              <h1
                style={{
                  color: "white",
                  fontWeight: "400",
                  textDecoration: "none",
                }}
              >
                Skeleton watches
              </h1>
            </a>

            <a href="https://www.rado.com/en_in/skeleton-watches.html">
              <button
                style={{
                  width: "9vw",
                  height: "6vh",
                  backgroundColor: "transparent",
                  marginLeft: "4vw",
                  color: "white",
                  fontSize: "15px",
                  borderColor: "white",
                  borderRadius: "50px 50px",
                }}
              >
                Discover more
              </button>
              /
            </a>
          </div>
        </div>

        <div style={{ position: "relative" }}>
          <a href="https://www.rado.com/en_in/leather-watches.html">
            <img style={{ width: "33vw" }} src={image2} alt="#" />
          </a>

          <div
            style={{
              position: "absolute",
              top: "0",
              marginTop: "27vh",
              marginLeft: "9vw",
            }}
          >
            <a
              style={{
                color: "white",
                fontWeight: "400",
                textDecoration: "none",
              }}
              href="https://www.rado.com/en_in/leather-watches.html"
            >
              <h1 style={{ color: "white", fontWeight: "400" }}>
                Leather watches
              </h1>
            </a>

            <a href="https://www.rado.com/en_in/leather-watches.html">
              <button
                style={{
                  width: "9vw",
                  height: "6vh",
                  backgroundColor: "transparent",
                  marginLeft: "3vw",
                  color: "white",
                  fontSize: "15px",
                  borderColor: "white",
                  borderRadius: "50px 50px",
                }}
              >
                Discover more
              </button>
            </a>
          </div>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ position: "relative" }}>
          <a href="https://www.rado.com/en_in/men-watches/discover/all-watches.html">
            <img
              style={{
                width: "50vw",
                height: "70vh",
              }}
              src={image4}
              alt="#"
            />
          </a>
          <div
            style={{
              position: "absolute",
              top: "0",
              width: "30vw",
              marginLeft: "18vw",
              marginTop: "30vh",
            }}
          >
            <a
              style={{ textDecoration: "none" }}
              href="https://www.rado.com/en_in/men-watches/discover/all-watches.html"
            >
              <h1
                style={{
                  color: "white",

                  fontWeight: "500",
                }}
              >
                Men's watches
              </h1>
              <button
                style={{
                  width: "8vw",
                  height: "6vh",
                  marginLeft: "3vw",
                  borderRadius: "50px 50px",
                  backgroundColor: "transparent",
                  color: "white",
                  borderColor: "white",
                }}
              >
                Explore more
              </button>
            </a>
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <a href="https://www.rado.com/en_in/women-watches/discover/all-watches.html">
            <img
              style={{ width: "49vw", height: "70vh" }}
              src={image5}
              alt="#"
            />
          </a>
          <div
            style={{
              position: "absolute",
              top: "0",
              width: "30vw",
              marginLeft: "18vw",
              marginTop: "30vh",
            }}
          >
            <a
              style={{ textDecoration: "none" }}
              href="https://www.rado.com/en_in/women-watches/discover/all-watches.html"
            >
              <h1
                style={{
                  color: "white",
                  fontWeight: "500",
                }}
              >
                Women's watches
              </h1>
              <button
                style={{
                  width: "8vw",
                  height: "6vh",
                  marginLeft: "5vw",
                  borderRadius: "50px 50px",
                  backgroundColor: "transparent",
                  color: "white",
                  borderColor: "white",
                }}
              >
                Explore more
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Watchesimg;
