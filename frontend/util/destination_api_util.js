export const fetchDestinations = () => (
  $.ajax({
    method: 'GET',
    url: '/api/destinations'
  })
);

export const fetchSearchDestinations = letters => (
  $.ajax({
    method: 'GET',
    url: '/api/search/destinations',
    data: { letters }
  })
);
