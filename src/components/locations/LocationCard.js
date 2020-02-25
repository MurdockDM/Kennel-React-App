import React from "react";

const LocationCard = (props) => {
    return (
            <div className="card">
                <div className="card-content">
                    <picture>
                    <img src={require(`${props.location.picFileLocation}`)} alt={props.location.name} />
                    </picture>
                    <h3>
                    Location: <span className="card-locationName">{props.location.name}</span>
                    </h3>
                </div> 
            </div>
    )
}






export default LocationCard