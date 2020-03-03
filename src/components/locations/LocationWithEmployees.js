import React, { useState, useEffect } from 'react'
import EmployeeManager from "../../modules/EmployeeManager"
import LocationManager from "../../modules/LocationManager"
import EmployeeCard from '../employee/EmployeeCard';

const LocationWithEmployees = props => {
    const [employees, setEmployee] = useState([]);
    const [kennelLocation, setLocation] = useState({ name: "", picFileLocation: "" });
    const [isLoading, setIsLoading] = useState(true);

  const handleDelete = () => {
    setIsLoading(true);
    LocationManager.delete(props.kennelLocationId).then(() =>
      props.history.push("/locations")
    );
  };


    const deleteEmployee = id => {
        EmployeeManager.delete(id)
            .then(() => EmployeeManager.getAll().then(setEmployee));
    };

    useEffect(() => {
        LocationManager.getWithEmployees(props.match.params.locationId)
            .then(APIResult => {
                console.log(APIResult)
                setLocation(APIResult);
                setEmployee(APIResult.employees);
            });
    }, []);

    return (
        <div>
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
            <div className="card">
                {employees.map(employee =>
                    <EmployeeCard
                        key={employee.id}
                        employee={employee}
                        deleteEmployee={deleteEmployee}
                        {...props}
                    />
                )}
            </div>
        </div>    
  );
};

export default LocationWithEmployees;











