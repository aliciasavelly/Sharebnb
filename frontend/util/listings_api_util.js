export const fetchHostedSpots = () => (
  $.ajax({
    method: 'GET',
    url: 'api/hosted_spots/users'
  })
)
