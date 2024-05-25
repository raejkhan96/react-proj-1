import React, { useEffect} from "react";
import backgroundVideo from "../../assets/videos/backgroundVideo.mp4";
import '../../views/HomePage/HomePage.css';
import { TypeAnimation } from 'react-type-animation';

// Utility function to dynamically load the font
const loadFont = (fontName, fontUrl) => {
    const link = document.createElement('link'); // Create a new <link> element
    link.href = fontUrl; // Set the href attribute to the URL of the font
    link.rel = 'stylesheet'; // Set the rel attribute to 'stylesheet' to indicate that it's a stylesheet link
    document.head.appendChild(link); // Append the <link> element to the document's <head> section
};

function HomePage() {

    useEffect(() => {
        // Load Space Mono font from Google Fonts
        loadFont('Space Mono', 'https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');
        // Call the loadFont function to dynamically load the Space Mono font when the component mounts
    }, []); // Empty dependency array ensures this runs only once when the component mounts



    return (
        <div className="homepage"> 
        {/* style={{fontFamily: 'Space Mono, monospace'}} */}
            <div className="title" >
                <TypeAnimation
                    sequence={[
                        'ISS Tracker', 
                        3000, 
                        ' ', 
                        1000, 
                        'ISS Tracker'    
                    ]}
                    repeat={Infinity}
                />
            </div>
            <video className="backgroundVideo" autoPlay loop muted controls={false}>
                <source src={backgroundVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

        </div>
    );
}

export default HomePage;