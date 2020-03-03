import React, { useState, useEffect } from "react";
import LocationManager from "../../modules/LocationManager";
import "./LocationDetail.css";



const LocationDetail = props => {
  const [kennelLocation, setLocations] = useState({ name: "", picFileLocation: "" });
  const [isLoading, setIsLoading] = useState(true);

  const handleDelete = () => {
    setIsLoading(true);
    LocationManager.delete(props.kennelLocationId).then(() =>
      props.history.push("/locations")
    );
  };

  useEffect(() => {
    LocationManager.get(props.kennelLocationId).then(kennelLocation => {
      setLocations({
        name: kennelLocation.name,
        picFileLocation: kennelLocation.picFileLocation
      });
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="card">
      <div className="card-content">
        <picture>
          {kennelLocation.picFileLocation && <img src={require(`${kennelLocation.picFileLocation}`)} alt={kennelLocation.name} />}
        </picture>
        <h3>
          Name: <span style={{ color: "darkslategrey" }}>{kennelLocation.name}</span>
        </h3>
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Discharge
        </button>
      </div>
    </div>
  );
};

export default LocationDetail;