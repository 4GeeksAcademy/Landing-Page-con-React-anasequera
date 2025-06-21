import React from 'react';

const Jumbotron = () => {
    return (
        <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container-fluid py-5">
                <h1 className="display-3 fw"> A WARM WELCOME!</h1>
                <p className="col-md-8 fs-4">Here you'll find everything about my projects and skills. Explore my work and what I can offer you!</p>
                <button className="btn btn-primary btn-lg" type="button">CALL TO ACTION</button>
            </div>
        </div>
    );
};

export default Jumbotron;