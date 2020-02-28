import React, { useState, useEffect } from 'react';

import OwnerCard from './OwnerCard';
import OwnerManager from '../../modules/OwnerManager';

const OwnerList = (props) => {
  // The initial state is an empty array
  const [owners, setOwners] = useState([]);

  const getOwners = () => {
    
    return OwnerManager.getAll().then(ownersFromAPI => {
        setOwners(ownersFromAPI)
    });
  };

  const deleteOwner = id => {
    OwnerManager.delete(id)
      .then(() => OwnerManager.getAll().then(setOwners));
  };

  
  useEffect(() => {
    getOwners();
  }, []);

  
  return (
    <React.Fragment>
      <section className="section-content">
          <button type="button"
            className="btn"
            onClick={() => { props.history.push("owner/new") }}>
            Signup New Customer
          </button>
      </section>
      <div className="container-cards">
        {owners.map(owner => < OwnerCard key={owner.id} owner={owner} deleteOwner={deleteOwner}/>)}
      </div>
    </React.Fragment>    
  );
};
export default OwnerList