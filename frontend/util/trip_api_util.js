export const fetchTrips = () => (
  $.ajax({
    method: 'GET',
    url: 'api/trips'
  })
);
