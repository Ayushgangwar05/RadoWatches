import React from "react";

function Creations() {
  return (
    <div
      style={{
        backgroundColor: "#141414",
        width: "100%",
        height: "30vh",
        marginTop: "-1vh",
        textAlign: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1
        style={{
          color: "white",
          fontSize: "35px",
          fontWeight: "400",
          marginTop: "30px",
        }}
      >
        Explore our latest creations
      </h1>
      <p style={{ color: "white", width: "49vw", fontSize: "19px" }}>
        Rado is known as the Master of Materials: from high-tech ceramic to
        sapphire crystal and diamonds to stainless steel, our innovative watches
        have no boundaries when it comes to design. Feel and discover the Rado
        difference!
      </p>
    </div>
  );
}

export default Creations;
