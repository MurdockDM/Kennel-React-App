import React from "react";



const EmployeeCard = () => {
    return (
            <div className="card">
                <div className="card-content">
                    <picture>
                    <img src={require("./Angie.jpg")} alt="Angie" />
                    </picture>
                    <h6>picture used from https://generated.photos/</h6>
                    <h3>
                    Employee: <span className="cardEmployeeName">Angie</span>
                    </h3>
                </div> 
            </div>  
    )

}

export default EmployeeCard