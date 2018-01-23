import React from 'react';

function manageVerb(state = {
  verbs: [],
}, action) {
  switch (action.type) {
    case 'ADD_VERB':
      return { verbs: state.verbs.concat(action.verb.text) }
    default:
      return state;
  }
}

export default manageVerb;
