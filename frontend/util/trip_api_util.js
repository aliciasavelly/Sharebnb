export const fetchTrips = () => (
  $.ajax({
    method: 'GET',
    url: 'api/trips'
  })
);

export const createTrip = trip => (
  $.ajax({
    method: 'POST',
    url: '/api/trips',
    data: { trip }
  })
);

export const deleteTrip = tripId => (
  $.ajax({
    method: 'DELETE',
    url: `api/trips/${tripId}`
  })
);
