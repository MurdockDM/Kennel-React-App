import React from "react";

const LocationCard = () => {
    return (
            <div className="card">
                <div className="card-content">
                    <picture>
                    <img src={require("./nashville pic.jpeg")} alt="Downtown Nashville" />
                    </picture>
                    <h3>
                    Location: <span className="card-locationName">Nashville Branch</span>
                    </h3>
                </div> 
            </div>
    )
}






export default LocationCard