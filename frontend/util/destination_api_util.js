export const fetchDestinations = () => (
  $.ajax({
    method: 'GET',
    url: '/api/destinations'
  })
);
