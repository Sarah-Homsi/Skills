import React, { Component } from 'react';
import Accordion from './Components/Accordion';
import ResourceCard from './Components/ResourceCard';
import './search.css';


class Search extends Component {
  render() {
    return (
      <div className='search'>

        <div className='row'>
          <div className='col s12'>
            <h3>Current Criteria:</h3>
          </div>

          <div>
            <h3>Filter On:</h3>
            <Accordion/>
          </div>
       
          <div>
            <h3>Matching Resources:</h3>
            <ResourceCard/>
          </div>
        </section>


      </div>

    );
  }
}

export default Search;


