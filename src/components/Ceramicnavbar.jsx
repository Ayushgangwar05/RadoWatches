import React from "react";
import image from "../Gallery/ceramic-watches.jpg";

function Ceramicnavbar() {
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

      <div
        style={{
          display: "flex",
          gap: "2vw",
          marginTop: "5vh",
          marginLeft: "5vw",
        }}
      >
        <div>
          <h1 style={{ fontSize: "25px" }}>DISCOVER</h1>
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="https://www.rado.com/en_in/master-of-materials.html "
          >
            Master of Materials
          </a>
          <br />
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="https://www.rado.com/en_in/art-of-ceramic.html"
          >
            Art of Ceramic
          </a>
          <br />
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="https://www.rado.com/en_in/ceramic-watches/discover/new-arrivals.html"
          >
            New Arrivals
          </a>
          <br />
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="https://www.rado.com/en_in/ceramic-watches/discover/special-editions.html"
          >
            Special Editions
          </a>
          <br />
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="https://www.rado.com/en_in/ceramic-watches/discover/all-watches.html"
          >
            All Watches
          </a>
        </div>
        <div>
          <h1 style={{ fontSize: "25px" }}>OUR SELECTION</h1>
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="https://www.rado.com/en_in/ceramic-watches/our-selection/designer.html"
          >
            Designer
          </a>
          <br />
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="https://www.rado.com/en_in/ceramic-watches/our-selection/sport-diver.html"
          >
            Sport & Diver
          </a>
          <br />
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="https://www.rado.com/en_in/ceramic-watches/our-selection/square.html"
          >
            Square
          </a>
          <br />
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="https://www.rado.com/en_in/ceramic-watches/our-selection/classic.html"
          >
            Classic
          </a>
          <br />
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="https://www.rado.com/en_in/ceramic-watches/our-selection/automatic.html"
          >
            Automatic
          </a>
        </div>
        <div>
          <h1 style={{ fontSize: "25px" }}> COLLECTIONS </h1>
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="https://www.rado.com/en_in/collections/captain-cook.html?case_materials=High-Tech%20Ceramic~Plasma%20High-Tech%20Ceramic"
          >
            Captain Cook
          </a>
          <br />
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="https://www.rado.com/en_in/collections/true-square.html?case_materials=High-Tech%20Ceramic~Plasma%20High-Tech%20Ceramic"
          >
            True Square
          </a>
          <br />
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="https://www.rado.com/en_in/collections/true.html?case_materials=High-Tech%20Ceramic~Plasma%20High-Tech%20Ceramic"
          >
            True
          </a>
          <br />
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="https://www.rado.com/en_in/collections/true-thinline.html?case_materials=High-Tech%20Ceramic~Plasma%20High-Tech%20Ceramic"
          >
            True Thinline
          </a>
          <br />
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="https://www.rado.com/en_in/collections/hyperchrome.html?case_materials=High-Tech%20Ceramic~Plasma%20High-Tech%20Ceramic"
          >
            HyperChrome
          </a>
          <br />
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="https://www.rado.com/en_in/collections/hyperchrome-classic.html?case_materials=High-Tech%20Ceramic~Plasma%20High-Tech%20Ceramic"
          >
            HyperChrome Classic
          </a>
          <br />
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="https://www.rado.com/en_in/collections/integral.html?case_materials=High-Tech%20Ceramic~Plasma%20High-Tech%20Ceramic"
          >
            Integral
          </a>
          <br />
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="https://www.rado.com/en_in/collections/ceramica.html?case_materials=High-Tech%20Ceramic~Plasma%20High-Tech%20Ceramic"
          >
            Ceramica
          </a>
          <br />
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="https://www.rado.com/en_in/collections/diamaster.html?case_materials=High-Tech%20Ceramic~Plasma%20High-Tech%20Ceramic"
          >
            DiaMaster
          </a>
        </div>
        <div style={{ marginTop: "10vh" }}>
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="https://www.rado.com/en_in/collections/diamaster.html?case_materials=High-Tech%20Ceramic~Plasma%20High-Tech%20Ceramic"
          >
            See all collections
          </a>
        </div>
        <div style={{ width: "30vw", marginTop: "10vh" }}>
          <img style={{ width: "30vw" }} src={image} alt="#" />
        </div>
      </div>
    </div>
  );
}

export default Ceramicnavbar;
