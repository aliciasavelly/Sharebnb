import React from 'react';
import SpotsIndex from './spots_index';
import SpotsMap from '../spots_map/spots_map';
import FilterForm from './filter_form';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestSpots();
  }

  render() {
    return (
      <div className="spots-index-container">
        <div className="spots-index-left">
          <FilterForm
              minPrice={ this.props.minPrice }
              maxPrice={ this.props.maxPrice }
              updateFilter={ this.props.updateFilter } />
          <SpotsIndex
              spots={ this.props.spots } />
        </div>

        <div className="spots-index-right">
          <div className="fixed">
            <SpotsMap
                spots={ this.props.spots }
                updateFilter={ this.props.updateFilter }
                filters={ this.props.filters }
                requestSpots={ this.props.requestSpots } />
          </div>
        </div>
      </div>
    )
  }
};

export default Search;
