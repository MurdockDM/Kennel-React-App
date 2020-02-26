import React, { useState, useEffect } from 'react';

import LocationCard from './LocationCard';
import LocationManager from '../../modules/LocationManager';

const LocationList = () => {
  // The initial state is an empty array
  const [location, setLocations] = useState([]);

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
    <div className="container-cards">
      {location.map(location => <LocationCard key={location.id} location={location} deleteLocation={deleteLocation}/>)}
    </div>
  );
};
export default LocationList