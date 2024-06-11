import React  from "react";
import '../../views/tracker/track.css';
import CustomGlobe from '../../views/tracker/customGlobe';

function Track() {
    return (
        <div className="track-page">
            <div className="background">
                <div class="stars"></div>
                <div class="twinkling"></div>
                <CustomGlobe />
                <div className="track-about">
                    <h2>Track Page</h2>
                    <p>This is the Track page.</p>
                </div>
            </div>


        </div>
    );
}

export default Track;