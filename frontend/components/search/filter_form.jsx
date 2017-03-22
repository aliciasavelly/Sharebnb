import React from 'react';

const handlePriceFilters = (filter, updateFilter) => (
  e => updateFilter(filter, e.currentTarget.value)
)

const FilterForm = ({ minPrice, maxPrice, updateFilter }) => (
  <div className="spots-index-filters">
    <label>
      Minimum Price
    </label>
    <input type="number"
      value={minPrice}
      onChange={handlePriceFilters("minPrice", updateFilter)} />

    <label>
      Maximum Price
    </label>
    <input type="number"
      value={maxPrice}
      onChange={handlePriceFilters("maxPrice", updateFilter)} />
  </div>
)

export default FilterForm;
