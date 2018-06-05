import React, { Component } from 'react';


class ResourceCard extends Component {
  render() {
    return (
        <div className="row">
            <div className="col s6">
                <div className="card">
                    <div className="card-content white-text">
                        <span className="card-title">{}</span>
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
  }
}

const RoundButtonWithText = props => (

    <div>
        <span className='bold'>{props.buttonText}</span>
        <Button floating waves='light' node='a' icon='keyboard_arrow_right' href={props.url}
        style={{
            margin: '10px',
            backgroundColor: `${props.backgroundColor}`
        }}
        />
    </div>

);

export default ResourceCard;


