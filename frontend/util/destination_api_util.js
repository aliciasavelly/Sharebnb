export const fetchDestinations = city => (
  $.ajax({
    method: 'GET',
    url: `/api/destinations?city=${city}`
  })
);
