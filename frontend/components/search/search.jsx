import React from 'react';
import SpotsIndex from './spots_index';
import SpotsMap from '../spots_map/spots_map';
import FilterForm from './filter_form';
// import Slider from 'react-rangeslider';
// import 'react-rangeslider/lib/index.css';

const Search = ({ spots, updateFilter, filters, minPrice, maxPrice }) => {
  return (
  <div className="spots-index-container">
    <div className="spots-index-left">
      <FilterForm
          minPrice={ minPrice }
          maxPrice={ maxPrice }
          updateFilter={ updateFilter } />
      <SpotsIndex
          spots={ spots } />
    </div>

    <div className="spots-index-right">
      <div className="fixed">
        <SpotsMap
            spots={ spots }
            updateFilter={ updateFilter }
            filters={ filters } />
      </div>
    </div>
  </div>
  )
};

export default Search;

// class Searchhh extends React.Component {
//   constructor(props) {
//     super(props);
//     // ({ spots, updateFilter, filters })
//     this.handlePriceFilters = this.handlePriceFilters.bind(this);
//     this.state = { min_price: "0", max_price: "1000" };
//   }
//
//   updateFilter() {
//     this.props.updateFilter("min_price", this.state.min_price);
//     this.props.updateFilter("max_price", this.state.max_price);
//   }
//
//   handlePriceFilters(filter) {
//     // this.setState([filter]: )
//     // debugger;
//     return e => {
//       this.setState({
//         [filter]: e.currentTarget.value
//       });
//       this.updateFilter();
//     };
//   }
//
//   render () {
//     return(
//       <div className="spots-index-container">
//         <div className="spots-index-left">
//           <div className="spots-index-filters">
//             <form className="price-filters" >
//               <label>
//                 Minimum Price
//                 <input type="number"
//                        min="0"
//                        max="1000"
//                        value={this.state.min_price}
//                        onChange={this.handlePriceFilters("min_price")}/>
//               </label>
//
//               <label>
//                 Maximum Price
//                 <input type="number"
//                        min="0"
//                        max="1000"
//                        value={this.state.max_price}
//                        onChange={this.handlePriceFilters("max_price")}/>
//               </label>
//               <input type="submit" className="submit" value="submit"/>
//             </form>
//           </div>
//           <SpotsIndex spots={ this.props.spots } />
//         </div>
//
//         <div className="spots-index-right">
//           <div className="fixed">
//             <SpotsMap spots={ this.props.spots } updateFilter={ this.props.updateFilter } filters={ this.props.filters } />
//           </div>
//         </div>
//       </div>
//     )
//   }
// };
