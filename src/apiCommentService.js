const BASE_URL = 'http://localhost:3000';

export default {
  postComment(id, comment, name) {
    return fetch(`${BASE_URL}/recipes/${id}/comments`, {
      method: 'POST',
      body: JSON.stringify({
        comment,
        name
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then(response => response.json());
  },
  fetchComments(id) {
    return fetch(`${BASE_URL}/recipes/${id}/comments`)
      .then(response => response.json());
  }
}