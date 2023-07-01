import React from "react";
import image from "../Gallery/feel-rado.jpg";

function FeelRado() {
  return (
    <div style={{ width: "100%", height: "100vh", backgroundColor: "black" }}>
      <div
        style={{
          borderTopStyle: "solid",
          borderColor: "white",
          width: "100%",
          height: "1px",
        }}
      ></div>
      <h1 style={{ marginLeft: "3vw" }}>DISCOVER</h1>
      <div style={{ display: "flex", marginLeft: "3vw" }}>
        <div>
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="https://www.rado.com/en_in/news.html"
          >
            News
          </a>
          <br />
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="https://www.rado.com/en_in/tennis.html"
          >
            Tennis
          </a>
          <br />
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="https://www.rado.com/en_in/cricket.html"
          >
            Cricket
          </a>
          <br />
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="https://www.rado.com/en_in/design.html"
          >
            Design
          </a>
          <br />
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="https://www.rado.com/en_in/ambassadors.html"
          >
            Ambassadors
          </a>
          <br />
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="https://www.rado.com/en_in/history-of-the-future.html"
          >
            History of the future
          </a>
        </div>
        <div style={{ width: "35vw", marginLeft: "20vw", marginTop: "10vh" }}>
          <img style={{ width: "35vw" }} src={image} alt="#" />
        </div>
      </div>
    </div>
  );
}

export default FeelRado;
