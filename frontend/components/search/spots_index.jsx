import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';
// import SpotsIndexContainer from './spots_index_container';
import SpotIndexItem from './spot_index_item';

// class SpotsIndex extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//
//   componentWillMount() {
//     this.props.requestSpots();
//   }
//
//   render() {
//     if (this.props.spots.length > 0) {
//       return(
//         <div className="spots-index">
//           {this.props.spots.map(spot => (
//             <SpotIndexItem spot={spot} key={spot.id} />
//           ))}
//         </div>
//       )
//     } else {
//       return(
//         <div></div>
//
//       )
//     }
//   }
// }

const SpotsIndex = ({ spots }) => (
  <div className="spots-index">
    {spots.map( spot => (
      <SpotIndexItem spot={spot} key={spot.id} />
    ))}
  </div>
)

export default SpotsIndex;
