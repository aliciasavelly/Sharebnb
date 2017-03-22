import React from 'react';

const handlePriceFilters = (filter, updateFilter) => (
  e => updateFilter(filter, e.currentTarget.value)
)

const FilterForm = ({ minPrice, maxPrice, updateFilter }) => (
  <div className="spots-index-filters">
    <form className="price-filters" onChange={handlePriceFilters()} >
      <label>
        Minimum Price
        <input type="number"
               value={minPrice}
               onChange={handlePriceFilters("minPrice", updateFilter)} />
      </label>

      <label>
        Maximum Price
        <input type="number"
               value={maxPrice}
               onChange={handlePriceFilters("maxPrice", updateFilter)} />
      </label>
    </form>
  </div>
)

export default FilterForm;
