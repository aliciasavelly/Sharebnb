//TODO add search params
export const fetchSpots = () => (
  $.ajax({
    method: 'GET',
    url: '/api/spots'
  })
);

export const fetchSingleSpot = (spotId) => (
  $.ajax({
    method: 'GET',
    url: `api/spots/${spotId}`
  })
);
