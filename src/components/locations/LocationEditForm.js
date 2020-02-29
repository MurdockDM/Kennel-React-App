import React, { useState, useEffect } from "react"
import LocationManager from "../../modules/LocationManager"


const LocationEditForm = props => {
  const [kennelLocation, setLocation] = useState({ name: "", picFileLocation: ""});
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...kennelLocation };
    stateToChange[evt.target.id] = evt.target.value;
    setLocation(stateToChange);
  };

  const updateExistingLocation = evt => {
    evt.preventDefault()
    setIsLoading(true);

    
    const editedKennelLocation = {
      id: props.match.params.kennelLocationId,
      name: kennelLocation.name,
      picFileLocation: kennelLocation.picFileLocation
    };

    LocationManager.update(editedKennelLocation)
      .then(() => props.history.push("/locations"))
  }

  useEffect(() => {
    LocationManager.get(props.match.params.kennelLocationId)
      .then(kennelLocation => {
        setLocation(kennelLocation);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={kennelLocation.name}
            />
            <label htmlFor="name">Location name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="picFileLocation"
              value={kennelLocation.picFileLocation}
            />
            <label htmlFor="picFileLocation">Picture File Location</label>
          </div>
          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingLocation}
              className="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default LocationEditForm