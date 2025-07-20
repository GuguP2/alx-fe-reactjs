import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/about" style={linkStyle}>About</Link>
      <Link to="/services" style={linkStyle}>Services</Link>
      <Link to="/contact" style={linkStyle}>Contact</Link>
    </nav>
  );
}

const navStyle = {
  backgroundColor: "#142a48",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "15px"
};

const linkStyle = {
  color: "white",
  margin: "0 20px",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "16px"
};

export default Navbar;
