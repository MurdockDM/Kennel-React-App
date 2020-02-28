import React, { useState } from 'react';
import OwnerManager from '../../modules/OwnerManager';
import "./OwnerForm.css"

const EmployeeForm = props => {
  const [owner, setOwner] = useState({ name: "", phoneNumber: "", picFileLocation: "./default pic.jpeg"});
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...owner };
    stateToChange[evt.target.id] = evt.target.value;
    setOwner(stateToChange);
  };


  const constructNewOwner = evt => {
    evt.preventDefault();
    if (owner.name === "" | owner.phoneNumber === "") {
      window.alert("Please input an owner name and phone number");
    } else {
      setIsLoading(true);
      
      OwnerManager.post(owner)
        .then(() => props.history.push("/owner"));
    }
  };

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
              placeholder="Owner name"
            />
            <label htmlFor="name">Name</label>
          </div>
          <div className="formgrid">
            <input
              type="number"
              required
              onChange={handleFieldChange}
              id="phoneNumber"
              placeholder="Owner phone number without dashes"
            />
            <label htmlFor="phoneNumber">Phone Number</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewOwner}
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default EmployeeForm