//
//
// export function fetchMemes() {
//   return (dispatch) => {
//     dispatch({ type: 'MEMES_REQ' });
//     return fetch('https://api.imgflip.com/get_memes')
//       .then(response => response.json())
//       .then(MEMES => dispatch({ type: 'ADD_MEMES', memes }));
//   };
// }

export function memesFetchDataSuccess(memes) {
    return {
        type: 'MEMES_FETCH_DATA_SUCCESS',
        memes
    };
}

export function memesFetchData(url) {
  return (dispatch) => {
    fetch(url)
    .then((response) => response.json())
    .then((memes) => dispatch(memesFetchDataSuccess(memes)))
  }
}
