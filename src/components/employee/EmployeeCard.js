import React from "react";



const EmployeeCard = () => {
    return (
        <div className="allEmployees">
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
            <div className="card">
                <div className="card-content">
                    <picture>
                    <img src={require("./Rosa.jpg")} alt="Rosa" />
                    </picture>
                    <h6>picture used from https://generated.photos/</h6>
                    <h3>
                    Employee: <span className="cardOwnerName">Rosa</span>
                    </h3>
                </div> 
            </div>
        </div>       
    )

}

export default EmployeeCard