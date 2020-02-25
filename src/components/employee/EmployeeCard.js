import React from "react";



const EmployeeCard = (props) => {
    return (
            <div className="card">
                <div className="card-content">
                    <picture>
                    <img src={require(`${props.employee.picFileLocation}`)} alt={props.employee.name} />
                    </picture>
                    <h6>picture used from https://generated.photos/</h6>
                    <h3>
                    Employee: <span className="cardEmployeeName">{props.employee.name}</span>
                    </h3>
                </div> 
            </div>  
    )

}

export default EmployeeCard