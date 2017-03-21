export const fetchSpots = data => (
  $.ajax({
    method: 'GET',
    url: '/api/spots',
    data
  })
);

export const fetchSingleSpot = spotId => (
  $.ajax({
    method: 'GET',
    url: `/api/spots/${spotId}`
  })
);

export const createSpot = spot => (
  $.ajax({
    method: 'POST',
    url: '/api/spots',
    data: { spot }
  })
);

export const updateSpot = (spotId, data) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/spots/${spotId}`,
    data: { spot: data }
  })
);

export const deleteSpot = spotId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/spots/${spotId}`
  })
);
