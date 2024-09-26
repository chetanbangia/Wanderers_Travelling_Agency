import React from "react";
import Navbar from "./Navbar";

const container = {
  height: "100vh",
  width: "98.8vw",
  background: "url(taj.jpg)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "top",
  backgroundAttachment: "fixed",
};

const overlay = {
  height: "100vh",
  width: "98.8vw",
  background: "rgba(0, 0, 0, 0.5)",
  position: "relative",
};

const header = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-45%)",
  color: "white",
  textAlign: "center",
};

function scroll() {
  document.getElementById("explore").scrollIntoView("smooth");
}

const Header = () => {
  return (
    <section style={container} id="home">
      <Navbar />
      <div style={overlay}></div>
      <header style={header}>
        <h1 style={{ fontSize: "3.5rem" }} className="mb-5">
          Your Journey Begins!
        </h1>
        <p style={{ fontSize: "1.3rem" }}>
          A journey of a 1000 miles starts with a single step. Start your
          journey with a single click and explore various tourist destinations
          and hotels according to your budget all at one place.
        </p>
        <button className="btn btn-dark" onClick={scroll}>
          Explore More
        </button>
      </header>
    </section>
  );
};

export default Header;
