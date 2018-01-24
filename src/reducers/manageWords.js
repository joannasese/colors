export default function manageWords(state = {
  words: []
}, action) {
  switch (action.type) {
    case 'ADD_WORDS':
      return { words: state.words.concat(action.word) }

    // case 'ADD_WORDS':
    //   return Object.assign({}, state, {
    //     words: state.words.concat(action.word)
    //   });

    default:
      return state;
  }
};
