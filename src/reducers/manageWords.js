export function manageWords(state = {
  words: []
}, action) {
  switch (action.type) {

    case 'ADD_WORDS':
      return Object.assign({}, state, {
        words: state.words
        .concat(action.words.noun)
        .concat(action.words.adj)
      });

    default:
      return state;

  }
};

export default manageWords;
