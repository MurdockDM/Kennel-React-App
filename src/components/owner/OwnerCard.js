import React from "react";


const OwnerCard = () => {
    return (
            <div className="card">
                <div className="card-content">
                    <picture>
                    <img src={require("./Susan pic.jpg")} alt="prop" />
                    </picture>
                    <h6>picture used from https://generated.photos/</h6>
                    <h3>
                    Owner: <span className="cardOwnerName">Susan</span>
                    </h3>
                </div> 
            </div>
    )
}

export default OwnerCard