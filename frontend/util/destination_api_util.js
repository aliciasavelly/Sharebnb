export const fetchDestinations = city => (
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
