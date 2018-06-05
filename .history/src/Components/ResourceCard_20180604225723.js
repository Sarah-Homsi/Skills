import React from 'react';

const ResourceCard = props => (

    <div className="row">
        <div className="col s6">
            <div className="card">
                <div className="card-content white-text">
                    <span className="card-title">{props.name}</span>
                    <p>I am a very simple card. I am good at containing small bits of information.
                    I am convenient because I require little markup to use effectively.</p>
                </div>
                <div className="card-action">
                    <a href="#">Resume</a>
                </div>
            </div>
        </div>
    </div>

);

export default ResourceCard;


