import React from "react";
import backgroundVideo from "./backgroundVideo.mp4";
import './HomePage.css'


function HomePage() {
    return (
        <div className="homepage">

            <video className="backgroundVideo" autoPlay loop muted controls={false}>
                <source src={backgroundVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

        </div>
    );
}

export default HomePage;