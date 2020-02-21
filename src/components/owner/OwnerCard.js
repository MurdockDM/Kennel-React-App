import React from "react";


const OwnerCard = () => {
    return (
        <div className="allOwners">
            <div className="card">
                <div className="card-content">
                    <picture>
                    <img src={require("./Susan pic.jpg")} alt="Susan" />
                    </picture>
                    <h6>picture used from https://generated.photos/</h6>
                    <h3>
                    Owner: <span className="cardOwnerName">Susan</span>
                    </h3>
                </div> 
            </div>
            <div className="card">
                <div className="card-content">
                    <picture>
                    <img src={require("./Ronpic.jpg")} alt="Ron" />
                    </picture>
                    <h6>picture used from https://generated.photos/</h6>
                    <h3>
                    Owner: <span className="cardOwnerName">Ron</span>
                    </h3>
                </div> 
            </div>
        </div>    
    )
}

export default OwnerCard