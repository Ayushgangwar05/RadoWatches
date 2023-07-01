import React from "react";
import Services from "./Services";
import FeelRado from "./FeelRado";
import Ceramicnavbar from "./Ceramicnavbar";
import Womennav from "./Womennav";
import Mennav from "./Mennav";
import "../components/Allcomponents.css";

function Navbarmain() {
  return (
    <div id="Navbarmain" style={{ backgroundColor: "black" ,width:"100%"}}>
      <nav class="navbar navbar-expand-lg">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul style={{ marginLeft: "4vw" }} class="navbar-nav">
            <li class="nav-item dropdown">
              <a
                class="nav-link"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
                style={{ color: "white" }}
              >
                Men
              </a>
              <div
                className="Mens"
                style={{
                  backgroundColor: "black",
                  marginTop: "1.2vw",
                  width: "93.8vw",
                  height: "80vh",
                }}
                class="dropdown-menu"
              >
                <Mennav />
              </div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
                style={{ color: "white" }}
              >
                Women
              </a>
              <div
                style={{
                  backgroundColor: "black",
                  marginTop: "1.2vw",
                  width: "90.7vw",
                  height: "80vh",
                }}
                class="dropdown-menu"
              >
                <Womennav />
              </div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
                style={{ color: "white" }}
              >
                Ceramic Watches
              </a>
              <div
                style={{
                  backgroundColor: "black",
                  marginTop: "1.2vw",
                  width: "86vw",
                  height: "80vh",
                }}
                class="dropdown-menu"
              >
                <Ceramicnavbar />
              </div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
                style={{ color: "white" }}
              >
                Feel Rado
              </a>
              <div
                style={{
                  backgroundColor: "black",
                  marginTop: "1.2vw",
                  width: "77vw",
                  height: "80vh",
                }}
                class="dropdown-menu"
              >
                <FeelRado />
              </div>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
                style={{ color: "white" }}
              >
                Services
              </a>
              <div
                style={{
                  marginTop: "1.2vw",
                  backgroundColor: "black",
                }}
                class="dropdown-menu"
              >
                <Services />
              </div>
            </li>
          </ul>
          <div style={{ height: "80px", marginLeft: "14vw" }}>
            <a
              style={{
                color: "white",
                fontSize: "2vw",
                textDecoration: "none",
              }}
              href="#"
            >
              Radio
            </a>
            <br />
            <a
              style={{
                color: "white",
                fontSize: "10px",
                textDecoration: "none",
              }}
              href="#"
            >
              {" "}
              S W I T Z E R L A N D
            </a>
          </div>
          <div>
            <a style={{ color: "white", marginLeft: "39vw" }} href="#">
              <i class="bi bi-search"></i>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbarmain;
