import React, { useState, useEffect } from 'react';

import EmployeeCard from './EmployeeCard';
import EmployeeManager from '../../modules/EmployeeManager';

const EmployeeList = () => {
  // The initial state is an empty array
  const [employees, setEmployees] = useState([]);

  const getEmployees = () => {
    
    return EmployeeManager.getAll().then(employeesFromAPI => {
        setEmployees(employeesFromAPI)
    });
  };

  
  useEffect(() => {
    getEmployees();
  }, []);

  
  return (
    <div className="container-cards">
      {employees.map(employee => < EmployeeCard/>)}
    </div>
  );
};
export default EmployeeList