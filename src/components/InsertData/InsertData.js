import React from 'react';
import classes from '../../fakeData/classes';
import plans from '../../fakeData/plans';

const InsertData = () => {

    const handleAddClasses = () => {
        const packages = classes[0];
        console.log("Before post class", classes.length);
        fetch('http://localhost:5000/addPackages', {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(classes) 
          })
          .then(res => res.json())
          .then(data => {
            console.log("Classes Post Successfully", data);
        });
  
    }

    const handleAddPlans = () => {
        const plan = plans[0];
        console.log("Before post plans", plans.length);
        fetch('http://localhost:5000/addPlans', {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(plans) 
          })
          .then(res => res.json())
          .then(data => {
            console.log("Plans Post Successfully", data);
        });
  
    }


    return (
        <div className="col text-center">
            <br/><br/>
            <h1>Inser Data</h1>
            <br/>
            <button onClick={handleAddClasses} className="btn btn-lg btn-primary xtra-btn">Insert Class</button><br/><br/>
            <button onClick={handleAddPlans} className="btn btn-lg btn-danger xtra-btn">Insert Plans</button><br/><br/>
        </div>
    );
};

export default InsertData;