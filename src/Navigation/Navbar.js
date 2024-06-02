import React, { useEffect} from "react";
import  "../Navigation/Navbar.css";
import { Link } from "react-router-dom";

// Utility function to dynamically load the font
const loadFont = (fontName, fontUrl) => {
  const link = document.createElement('link'); // Create a new <link> element
  link.href = fontUrl; // Set the href attribute to the URL of the font
  link.rel = 'stylesheet'; // Set the rel attribute to 'stylesheet' to indicate that it's a stylesheet link
  document.head.appendChild(link); // Append the <link> element to the document's <head> section
};



function Navbar() {

  
  useEffect(() => {
    // Load Space Mono font from Google Fonts
    loadFont('Space Mono', 'https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');
    // Call the loadFont function to dynamically load the Space Mono font when the component mounts
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return(
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home 
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/track!">
              Track!
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About, w ChatGPT API
            </Link>
          </li>
          
        </ul>
      </div>
    </nav>
    );
}

export default Navbar;

