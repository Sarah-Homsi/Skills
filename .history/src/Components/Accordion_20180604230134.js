import React, { Component } from 'react';


class Accordion extends Component {
  render() {
    return (
        <div className='row'>
        <div className='col s12'>
            <ul className='collapsible'>
                <li>
                    <div className='collapsible-header'><i className='material-icons'>filter_drama</i>Role</div>
                    <div className='collapsible-body'><span>Lorem ipsum dolor sit amet.</span></div>
                </li>
                <li>
                    <div className='collapsible-header'><i className='material-icons'>place</i>Skill</div>
                    <div className='collapsible-body'><span>Lorem ipsum dolor sit amet.</span></div>
                </li>
                <li>
                    <div className='collapsible-header'><i className='material-icons'>whatshot</i>Experience Level</div>
                    <div className='collapsible-body'><span>Lorem ipsum dolor sit amet.</span></div>
                </li>
            </ul>
        </div>
    </div>

    );
  }
}

export default Accordion;


