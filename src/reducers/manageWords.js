export function manageWords(state = {
  words: []
}, action) {
  switch (action.type) {

    case 'ADD_WORDS':
      return Object.assign({}, state, {
        words: state.words
        .concat({
          noun: action.words.noun,
          adj: action.words.adj,
          verb: action.words.verb
        })
      });

    default:
      return state;

  }
};

export default manageWords;
