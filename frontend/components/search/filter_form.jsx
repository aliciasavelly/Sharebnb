import React from 'react';
import { withRouter } from 'react-router';

// const handlePriceFilters = (filter, updateFilter) => {
//   return e => updateFilter(filter, e.currentTarget.value)
// }

// const FilterForm = ({ minPrice, maxPrice, updateFilter }) => (
//   <div className="spots-index-filters">
//     <label>
//       Minimum Price
//     </label>
//     <input type="number"
//       value={minPrice}
//       onChange={handlePriceFilters("minPrice", updateFilter)} />
//
//     <label>
//       Maximum Price
//     </label>
//     <input type="number"
//       value={maxPrice}
//       onChange={handlePriceFilters("maxPrice", updateFilter)} />
//   </div>
// )

class FilterForm extends React.Component {
  //  ({ minPrice, maxPrice, updateFilter })

  constructor(props) {
    super(props);

    this.handlePriceFilters = this.handlePriceFilters.bind(this);
  }

  handlePriceFilters(filter) {
    return e => this.props.updateFilter(filter, e.currentTarget.value)
  }

  render() {
    return(
      <div className="spots-index-filters">
        <div className="filters">
          <div className="single-filter one">
            <label>
              Minimum Price
            </label>
            <input className="first-input"
                   type="number"
                   value={this.props.minPrice}
                   onChange={this.handlePriceFilters("minPrice")} />
          </div>

          <div className="single-filter two">
            <label>
              Maximum Price
            </label>
            <input className="second-input"
                    type="number"
                    value={this.props.maxPrice}
                    onChange={this.handlePriceFilters("maxPrice")} />
          </div>

        </div>
      </div>
    )
  }
}

export default withRouter(FilterForm);
