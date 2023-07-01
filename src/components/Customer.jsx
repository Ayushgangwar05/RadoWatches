import React from "react";

function Customer() {
  return (
    <div style={{ height: "70vh", width: "100%" }}>
      <div
        style={{
          display: "flex",
          gap: "6vw",
          width: "100%",
        }}
      >
        <div
          style={{ marginLeft: "20vw", marginTop: "10vh", textAlign: "center" }}
        >
          <h1 style={{ fontWeight: "400", marginLeft: "" }}>
            Rado Customer Service
          </h1>
          <p style={{ width: "23vw" }}>
            Access the most exclusive services and discover the wealth of
            knowledge of our Customer Service Team.
          </p>
          <a
            style={{ textDecoration: "none" }}
            href="https://service.rado.com/?country=in&_gl=1*5mcst9*_ga*MTM5OTA0NTM0Ny4xNjg2ODI2MzEz*_ga_31SBFMJ4EN*MTY4NzIzNzMwOS4xNi4xLjE2ODcyMzg1MzUuMC4wLjA."
          >
            <button
              style={{
                width: "7vw",
                height: "6vh",
                backgroundColor: "black",
                color: "white",
                fontSize: "16px",
                borderRadius: "50px 50px",
                borderColor: "black",
                marginTop: "5vh",
              }}
            >
              Contact Us
            </button>
          </a>
        </div>
        <div
          style={{
            borderRightStyle: "solid",
            height: "50vh",
            borderColor: "#F1EFEF",
            width: ".1vw",
            marginLeft: "1vw",
            marginTop: "10vh",
          }}
        ></div>
        <div style={{ marginTop: "10vh", textAlign: "center" }}>
          <h1 style={{ fontWeight: "400", marginLeft: "" }}>
            Rado Store Locator
          </h1>
          <p>Find your nearest store, boutique or service centre.</p>
          <a
            style={{ textDecoration: "none" }}
            href="https://service.rado.com/?country=in&_gl=1*1rk321v*_ga*MTM5OTA0NTM0Ny4xNjg2ODI2MzEz*_ga_31SBFMJ4EN*MTY4NzIzNzMwOS4xNi4xLjE2ODcyMzg1MzUuMC4wLjA."
          >
            <button
              style={{
                width: "7vw",
                height: "6vh",
                backgroundColor: "black",
                color: "white",
                fontSize: "16px",
                borderRadius: "50px 50px",
                borderColor: "black",
                marginTop: "11vh",
              }}
            >
              Find a store
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Customer;
