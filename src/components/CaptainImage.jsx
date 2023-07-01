import React from "react";

function CaptainImage({ data }) {
  return (
    <div
      style={{
        width: "100%",
        alignItems: "center",
        height: "110vh",
        position: "relative",
      }}
    >
      <div style={{ width: "100%", alignItems: "center" }}>
        <h1
          style={{ textAlign: "center", marginTop: "10vh", fontWeight: "400" }}
        >
          Captain Cook High-Tech Ceramic Diver
        </h1>
        <p
          style={{
            textAlign: "center",
            marginLeft: "23vw",
            width: "54vw",
            fontSize: "20px",
          }}
        >
          The new Captain Cook High-Tech Ceramic Diver comes in six models, each
          one with a distinct character, to match the most discerning tastes of
          true watch lovers.
        </p>
        <div style={{ display: "flex" }}>
          {data.map((ele) => {
            return (
              <div style={{ marginTop: "20px" }}>
                <a href="https://www.rado.com/en_in/captain-cook-high-tech-ceramic-diver-high-tech-ceramic-green-43mm-r32130312.html">
                  <img style={{ width: "15vw" }} src={ele.Image} alt="#" />
                </a>

                <div
                  style={{
                    marginLeft: "45px",
                    width: "12vw",
                    textAlign: "center",
                    marginTop: "36px",
                  }}
                >
                  <a
                    style={{ textDecoration: "none", color: "black" }}
                    href="https://www.rado.com/en_in/captain-cook-high-tech-ceramic-diver-high-tech-ceramic-black-43mm-r32129152.html"
                  >
                    {ele.Name}
                  </a>
                </div>
                <div
                  style={{
                    marginLeft: "45px",
                    width: "12vw",
                    textAlign: "center",
                    color: "#6e6e6e",
                    fontSize: "14px",
                    marginTop: "10px",
                  }}
                >
                  <a
                    style={{
                      textAlign: "center",
                      color: "#6e6e6e",
                      fontSize: "14px",
                      textDecoration: "none",
                    }}
                    href="https://www.rado.com/en_in/captain-cook-high-tech-ceramic-diver-high-tech-ceramic-black-43mm-r32129152.html"
                  >
                    {ele.ModelNo}
                  </a>
                </div>
                <div
                  style={{
                    marginLeft: "45px",
                    marginTop: "10px",
                    width: "12vw",
                    fontSize: "14px",
                    textAlign: "center",
                    fontWeight: "400",
                  }}
                >
                  <a
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontSize: "14px",
                      textAlign: "center",
                      fontWeight: "400",
                    }}
                    href="https://www.rado.com/en_in/captain-cook-high-tech-ceramic-diver-high-tech-ceramic-black-43mm-r32129152.html"
                  >
                    ₹{ele.Cost}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            marginTop: "10vh",
          }}
        >
          <div
            style={{
              borderTopStyle: "solid",
              borderColor: "black",
              width: "1.7vw",
            }}
          ></div>
          <div
            style={{
              borderTopStyle: "solid",
              borderColor: "black",
              width: "1.7vw",
            }}
          ></div>
        </div>
        <div style={{ top: "0", position: "absolute", marginTop: "60vh" }}>
          <div
            style={{
              marginLeft: "1vw",
            }}
          >
            <a href="#">
              <i
                style={{ fontSize: "2vw", color: "black" }}
                class="bi bi-arrow-left"
              ></i>
            </a>
          </div>
          <div
            style={{
              marginTop: "-5vh",
              marginLeft: "95vw",
            }}
          >
            <a href="#">
              <i
                style={{ fontSize: "2vw", color: "black" }}
                class="bi bi-arrow-right"
              ></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaptainImage;
