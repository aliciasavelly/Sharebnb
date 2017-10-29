import React, { Component } from 'react';
import SpotsIndex from './spots_index';
import SpotsMap from '../spots_map/spots_map';
import FilterForm from './filter_form';

class Search extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestSpots();
  }

  render() {
    const { minPrice, maxPrice, updateFilter, spots, filters, requestSpots } = this.props;

    return (
      <div className="spots-index-container">
        <div className="spots-index-left">
          <FilterForm
            minPrice={minPrice}
            maxPrice={maxPrice}
            updateFilter={updateFilter}
          />
          <SpotsIndex spots={spots} />
        </div>

        <div className="spots-index-right">
          <div className="fixed">
            <SpotsMap
              spots={spots}
              updateFilter={updateFilter}
              filters={filters}
              requestSpots={requestSpots}
            />
          </div>
        </div>
      </div>
    );
  }
};

export default Search;
