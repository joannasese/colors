export default function manageVerb(state = {
  verbs: [],
}, action) {
  switch (action.type) {
    case 'ADD_VERB':
      return { verbs: state.verbs.concat(action.verb) }
    default:
      return state;
      console.log(verbs)
  }
}
