import React from "react";


const OwnerCard = (props) => {
    return (
        <div className="card">
            <div className="card-content">
                <picture>
                    <img src={require(`${props.owner.picFileLocation}`)} alt={props.owner.name} />
                </picture>
                <h6>picture used from https://generated.photos/</h6>
                <h3>
                    Owner: <span className="cardOwnerName">{props.owner.name}</span>
                </h3>
                <button type="button"
                    onClick={() => props.history.push(`/owner/${props.owner.id}/edit`)}>
                    Edit
                </button>
                <button type="button" onClick={() => props.deleteOwner(props.owner.id)}>Remove as Customer</button>
            </div>
        </div>
    )
}

export default OwnerCard