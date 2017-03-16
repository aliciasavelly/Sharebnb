export const updateUser = (currentUserId, data) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/users/${currentUserId}`,
    data: { user: data }
  })
);
