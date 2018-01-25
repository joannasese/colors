export function memes(state = [], action) {
  switch (action.type) {
    case 'MEMES_FETCH_DATA_SUCCESS':
      return action.memes;
    default:
      return state;
  }
}
