import React from "react";

export default function Footer() {
  let footerstyle = {
    position: "relative",
    width: "100%",
    top: "88vh",
  };
  return (
    <footer className="bg-dark text-light py-3" style={footerstyle}>
      <p className="text-center">Copyright &copy; Meri Kart.com</p>
    </footer>
  );
}
