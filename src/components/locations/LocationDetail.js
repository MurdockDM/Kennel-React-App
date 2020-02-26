import React, { useState, useEffect } from "react";
import LocationManager from "../../modules/LocationManager";
import "./LocationDetail.css";



const LocationDetail = props => {
  const [location, setLocations] = useState({ name: "", picFileLocation: "" });
  const [isLoading, setIsLoading] = useState(true);

  const handleDelete = () => {
    setIsLoading(true);
    LocationManager.delete(props.locationId).then(() =>
      props.history.push("/locations")
    );
  };

  useEffect(() => {
    LocationManager.get(props.locationId).then(location => {
      setLocations({
        name: location.name,
        picFileLocation: location.picFileLocation
      });
      setIsLoading(false);
    });
  }, [props.locationId]);

  return (
    <div className="card">
      <div className="card-content">
        <picture>
          {location.picFileLocation && <img src={require(`${location.picFileLocation}`)} alt={location.name} />}
        </picture>
        <h3>
          Name: <span style={{ color: "darkslategrey" }}>{location.name}</span>
        </h3>
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Discharge
        </button>
      </div>
    </div>
  );
};

export default LocationDetail;