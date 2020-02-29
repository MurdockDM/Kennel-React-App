import React, { useState, useEffect } from 'react';

import LocationCard from './LocationCard';
import LocationManager from '../../modules/LocationManager';

const LocationList = (props) => {
  // The initial state is an empty array
  const [kennelLocation, setLocations] = useState([]);

  const getLocations = () => {

    return LocationManager.getAll().then(locationsFromAPI => {
      setLocations(locationsFromAPI)
    });
  };

  const deleteLocation = id => {
    LocationManager.delete(id)
      .then(() => LocationManager.getAll().then(setLocations));
  };


  useEffect(() => {
    getLocations();
  }, []);


  return (
    <React.Fragment>
      <section className="section-content">
        <button type="button"
          className="btn"
          onClick={() => { props.history.push("/location/new") }}>
          Add Location
          </button>
      </section>
      <div className="container-cards">
        {kennelLocation.map(kennelLocation => <LocationCard key={kennelLocation.id} kennelLocation={kennelLocation} deleteLocation={deleteLocation} {...props} />)}
      </div>
    </React.Fragment>
  );
};
export default LocationList