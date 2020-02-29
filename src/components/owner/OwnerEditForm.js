import React, { useState, useEffect } from "react"
import OwnerManager from "../../modules/OwnerManager"


const OwnerEditForm = props => {
  const [owner, setOwner] = useState({ name: "", picFileLocation: ""});
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...owner };
    stateToChange[evt.target.id] = evt.target.value;
    setOwner(stateToChange);
  };

  const updateExistingOwner = evt => {
    evt.preventDefault()
    setIsLoading(true);

    
    const editedOwner = {
      id: props.match.params.ownerId,
      name: owner.name,
      picFileLocation: owner.picFileLocation
    };

    OwnerManager.update(editedOwner)
      .then(() => props.history.push("/owner"))
  }

  useEffect(() => {
    OwnerManager.get(props.match.params.ownerId)
      .then(owner => {
        setOwner(owner);
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
              value={owner.name}
            />
            <label htmlFor="name">Owner name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="picFileLocation"
              value={owner.picFileLocation}
            />
            <label htmlFor="picFileLocation">Picture File Location</label>
          </div>
          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingOwner}
              className="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default OwnerEditForm