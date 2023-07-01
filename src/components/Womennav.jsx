import React from "react";
import image from "../Gallery/women-watches-india.jpg";

function Womennav() {
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
            href="https://www.rado.com/en_in/women-watches/discover/new-arrivals.html"
          >
            New Arrivals
          </a>
          <br />
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="https://www.rado.com/en_in/women-watches/discover/gift-ideas.html"
          >
            Gift Ideas
          </a>
          <br />
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="https://www.rado.com/en_in/women-watches/discover/special-editions.html"
          >
            Special Editions
          </a>
          <br />
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="https://www.rado.com/en_in/women-watches/discover/essentials.html"
          >
            Essentials
          </a>
          <br />
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="https://www.rado.com/en_in/women-watches/discover/straps-and-bracelets.html"
          >
            Straps and bracelets
          </a>
        </div>
        <div>
          <h1 style={{ fontSize: "25px" }}>OUR SELECTION</h1>
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="https://www.rado.com/en_in/women-watches/our-selection/lifestyle.html"
          >
            Lifestyle
          </a>
          <br />
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="https://www.rado.com/en_in/women-watches/our-selection/designer.html"
          >
            Designer
          </a>
          <br />
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="https://www.rado.com/en_in/women-watches/our-selection/diamonds.html"
          >
            Diamonds
          </a>
          <br />
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="https://www.rado.com/en_in/women-watches/our-selection/classic.html"
          >
            Classic
          </a>
          <br />
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="https://www.rado.com/en_in/women-watches/our-selection/automatic.html"
          >
            Automatic
          </a>
        </div>
        <div>
          <h1 style={{ fontSize: "25px" }}> COLLECTIONS </h1>
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="https://www.rado.com/en_in/collections/captain-cook.html?gender=Women~Unisex"
          >
            Captain Cook
          </a>
          <br />
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="https://www.rado.com/en_in/collections/true-square.html?gender=Women~Unisex"
          >
            True Square
          </a>
          <br />
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="https://www.rado.com/en_in/collections/centrix.html?gender=Women~Unisex"
          >
            Centrix
          </a>
          <br />
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="https://www.rado.com/en_in/collections/true.html?gender=Women~Unisex"
          >
            True
          </a>
          <br />
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="https://www.rado.com/en_in/collections/true-thinline.html?gender=Women~Unisex"
          >
            True Thinline
          </a>
          <br />
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="https://www.rado.com/en_in/collections/florence-classic.html?gender=Women~Unisex"
          >
            Florence Classic
          </a>
          <br />
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="https://www.rado.com/en_in/collections/diastar-original.html?gender=Women~Unisex"
          >
            DiaStar Original
          </a>
          <br />
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="https://www.rado.com/en_in/collections/hyperchrome.html?gender=Women~Unisex"
          >
            HyperChrome
          </a>
          <br />
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="https://www.rado.com/en_in/collections/coupole-classic.html?gender=Women~Unisex "
          >
            Coupole Classic
          </a>
        </div>
        <div style={{ marginTop: "10vh" }}>
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="https://www.rado.com/en_in/collections/integral.html?gender=Women~Unisex"
          >
            Integral
          </a>
          <br />
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="https://www.rado.com/en_in/collections/ceramica.html?gender=Women~Unisex"
          >
            Ceramica
          </a>
          <br />
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="https://www.rado.com/en_in/collections/diamaster.html?gender=Women~Unisex"
          >
            DiaMaster
          </a>
          <br />
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="https://www.rado.com/en_in/collections.html"
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

export default Womennav;
