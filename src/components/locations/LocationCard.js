import React from "react";
import { Link } from "react-router-dom";

const LocationCard = (props) => {
    return (
        <div className="card">
            <div className="card-content">
                <picture>
                    <img src={require(`${props.kennelLocation.picFileLocation}`)} alt={props.kennelLocation.name} />
                </picture>
                <h3>
                    Location: <span className="card-locationName">{props.kennelLocation.name}</span>
                </h3>
                <Link to={`/locations/${props.kennelLocation.id}`}>
                    <button>Details</button>
                </Link>
                <button type="button"
                    onClick={() => props.history.push(`/locations/${props.kennelLocation.id}/edit`)}>
                    Edit
                </button>
                <button type="button" onClick={() => props.deleteLocation(props.kennelLocation.id)}>Close Location</button>
            </div>
        </div>
    )
}






export default LocationCard