

export function fetchMemes() {
  return (dispatch) => {
    dispatch({ type: 'MEMES_REQ' });
    return fetch('https://api.imgflip.com/get_memes')
      .then(response => response.json())
      .then(MEMES => dispatch({ type: 'ADD_MEMES', memes }));
  };
}
