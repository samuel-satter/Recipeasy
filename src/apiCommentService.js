const BASE_URL = 'http://localhost:3000';

export default {
  postComment(recipeId, comment, name) {
    return fetch(`${BASE_URL}/recipes/${recipeId}/comments`, {
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
  fetchComments(recipeId) {
    return fetch(`${BASE_URL}/recipes/${recipeId}/comments`)
      .then(response => response.json());
  }
}