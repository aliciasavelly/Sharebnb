//TODO add search params
export const fetchSpots = () => (
  $.ajax({
    method: 'GET',
    url: '/api/spots'
  })
);
