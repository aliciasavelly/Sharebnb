export const fetchDestinations = () => (
  $.ajax({
    method: 'GET',
    url: '/api/destinations'
  })
);

// TODO this isn't called anywhere..
// export const fetchSearchDestinations = letters => (
//   $.ajax({
//     method: 'GET',
//     url: '/api/search/destinations',
//     data: { letters }
//   })
// );
