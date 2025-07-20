import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ background: "#142a48", padding: "10px" }}>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/about" style={linkStyle}>About</Link>
      <Link to="/services" style={linkStyle}>Services</Link>
      <Link to="/contact" style={linkStyle}>Contact</Link>
    </nav>
  );
}

const linkStyle = {
  color: "white",
  margin: "0 15px",
  textDecoration: "none",
  fontWeight: "bold"
};

export default Navbar;
