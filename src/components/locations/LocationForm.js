import React, { useState } from 'react';
import LocationManager from '../../modules/LocationManager';
import "./LocationForm.css"

const LocationForm = props => {
  const [location, setLocation] = useState({ name: "", picFileLocation: "./default pic.jpeg"});
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...location };
    stateToChange[evt.target.id] = evt.target.value;
    setLocation(stateToChange);
  };


  const constructNewLocation = evt => {
    evt.preventDefault();
    if (location.name === "") {
      window.alert("Please input an location name");
    } else {
      setIsLoading(true);
      
      LocationManager.post(location)
        .then(() => props.history.push("/locations"));
    }
  };

//   const imageUpload = event => {
//     const stateToChange = {...location}
//     stateToChange[event.target.id] = event.target.files[0].path
//     setLocation(stateToChange)
//   }

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="name"
              placeholder="Location name"
            />
            <label htmlFor="name">Name</label>
          </div>
          {/* <div className="formgrid">
            <input
              type="file"
              required
              onChange={imageUpload}
              id="picFileLocation"
              placeholder="Image name"
            />
            <label htmlFor="picFileLocation">Image Upload</label>
          </div> */}
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewLocation}
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default LocationForm